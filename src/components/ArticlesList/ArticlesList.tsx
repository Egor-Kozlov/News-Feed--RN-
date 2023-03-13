import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {FlatList, View, Alert, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {deleteArticle, changeArticleTitle} from '../../store/slices/articles';
import {IArticle, ROUTES, RootStackParamList} from '../../types';
import ModalWindow from '../ModalWindow/ModalWindow';

import Pagination from './Pagination/Pagination';
import Section from './Section/Section';
import styles from './styles';

interface ArticlesListProps {
  articles: IArticle[];
  refreshList: () => void;
  isLoading: boolean;
  countOfArticlesPerPage?: number;
}

const ArticlesList = ({
  articles,
  refreshList,
  isLoading,
  countOfArticlesPerPage = 10,
}: ArticlesListProps) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ROUTES.ArticleDetail>
    >();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [articleForEdit, setArticleForEdit] = useState<string | null>(null);

  const showModal = (articleTitle: string): void => {
    setArticleForEdit(articleTitle);
    setIsModalVisible(true);
  };
  const hideModal = (): void => {
    setArticleForEdit(null);
    setIsModalVisible(false);
  };

  const navigateToArticleWebView = useCallback(
    (articleUrl: string, articleTitle: string) => {
      navigation.navigate(ROUTES.ArticleDetail, {
        url: articleUrl,
        headerTitle: articleTitle,
      });
    },
    [navigation],
  );

  const onRefresh = (): void => {
    refreshList();
  };

  const cutArticles = (
    articles: IArticle[],
    currentPage: number,
    articlesPerPage: number,
  ) => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return articles.slice(startIndex, endIndex);
  };

  const onDeleteArticle = useCallback(
    (title: string): void => {
      Alert.alert(
        'Delete article',
        `Are you sure you want to delete article "${title}"?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => dispatch(deleteArticle(title))},
        ],
      );
    },
    [dispatch],
  );

  const onEditArticle = (title: string): void => {
    dispatch(changeArticleTitle({oldTitle: articleForEdit, newTitle: title}));
    hideModal();
  };

  return (
    <View style={styles.mainContainer}>
      <ModalWindow
        visible={isModalVisible}
        onDismiss={hideModal}
        onEditArticle={onEditArticle}
      />
      <FlatList
        data={
          articles?.length > 0
            ? cutArticles(articles, currentPage, countOfArticlesPerPage)
            : articles
        }
        renderItem={({item}) => (
          <Section
            article={item}
            onPicturePress={navigateToArticleWebView}
            onShowModal={showModal}
            onDeleteArticle={onDeleteArticle}
          />
        )}
        keyExtractor={item => item.title}
        style={styles.list}
        contentContainerStyle={styles.columnWrapper}
        refreshing={isLoading}
        onRefresh={onRefresh}
        ListEmptyComponent={<Text>No articles found. Pull to refresh.</Text>}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countOfPages={Math.ceil(articles?.length / countOfArticlesPerPage)}
      />
    </View>
  );
};

export default ArticlesList;

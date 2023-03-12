import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, FlatList, View, Alert} from 'react-native';

import {Article} from '../../types';
import ModalWindow from '../ModalWindow/ModalWindow';

import Pagination from './Pagination/Pagination';
import Section from './Section/Section';

interface ArticlesListProps {
  articles: Article[];
  refreshList: () => void;
  isLoading: boolean;
}

const COUNT_OF_ARTICLES_PER_PAGE = 10;

const ArticlesList: FC<ArticlesListProps> = ({
  articles,
  refreshList,
  isLoading,
}) => {
  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState<boolean>(false);
  const [articleForEdit, setArticleForEdit] = useState<string | null>(null);

  const showModal = (articleTitle: string): void => {
    setArticleForEdit(articleTitle);
    setVisible(true);
  };
  const hideModal = (): void => {
    setArticleForEdit(null);
    setVisible(false);
  };

  const navigateToArticleWebView = useCallback(
    (articleUrl: string, articleTitle: string) => {
      navigation.navigate(
        'ArticleDetail' as never,
        {
          url: articleUrl,
          headerTitle: articleTitle,
        } as never,
      );
    },
    [navigation],
  );

  const onRefresh = (): void => {
    refreshList();
  };

  const cutArticles = (
    articles: Article[],
    currentPage: number,
    articlesPerPage: number,
  ) => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return articles.slice(startIndex, endIndex);
  };

  const onDeleteArticle = useCallback((title: string): void => {
    console.log(title);
    Alert.alert(
      'Delete article',
      `Are you sure you want to delete article "${title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );
  }, []);

  const onEditArticle = useCallback((title: string): void => {
    console.log(title);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ModalWindow
        visible={visible}
        onDismiss={hideModal}
        articleTitle={articleForEdit}
      />
      <FlatList
        data={
          articles.length > 0
            ? cutArticles(articles, currentPage, COUNT_OF_ARTICLES_PER_PAGE)
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
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countOfPages={Math.ceil(articles.length / COUNT_OF_ARTICLES_PER_PAGE)}
      />
    </View>
  );
};

export default ArticlesList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  columnWrapper: {
    rowGap: 16,
    paddingTop: 30,
  },
});

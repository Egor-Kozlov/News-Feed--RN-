import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {Article} from '../../types';

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

  const onRefresh = () => {
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

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={
          articles.length > 0
            ? cutArticles(articles, currentPage, COUNT_OF_ARTICLES_PER_PAGE)
            : articles
        }
        renderItem={({item}) => (
          <Section article={item} onPicturePress={navigateToArticleWebView} />
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
  },
});

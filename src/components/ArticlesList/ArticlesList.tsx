import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {Article} from '../../types';

import Pagination from './Pagination/Pagination';
import Section from './Section/Section';

interface ArticlesListProps {
  articles: Article[];
  refreshList: () => void;
  isLoading: boolean;
}

const ArticlesList: FC<ArticlesListProps> = ({
  articles,
  refreshList,
  isLoading,
}) => {
  const navigation = useNavigation();

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

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <Section article={item} onPicturePress={navigateToArticleWebView} />
        )}
        keyExtractor={item => item.title}
        style={styles.list}
        contentContainerStyle={styles.columnWrapper}
        refreshing={isLoading}
        onRefresh={onRefresh}
      />
      <Pagination />
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

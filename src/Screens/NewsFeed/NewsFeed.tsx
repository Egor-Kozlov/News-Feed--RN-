import React, {useEffect, FC, useCallback} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '~/store/store';

import ArticlesList from '../../components/ArticlesList/ArticlesList';
import {fetchArticles} from '../../store/slices/articles';

import styles from './styles';

const NewsFeed: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {articles, loading} = useSelector((state: RootState) => state.articles);

  const checkIfArticlesAreEmpty = useCallback(() => {
    return articles?.length === 0;
  }, [articles]);

  const getArticles = useCallback(() => {
    void dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    if (checkIfArticlesAreEmpty()) {
      getArticles();
    }
  }, [checkIfArticlesAreEmpty, getArticles]);

  return (
    <View style={styles.mainContainer}>
      {loading && articles && articles?.length === 0 ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size={40} />
        </View>
      ) : (
        <ArticlesList
          articles={articles}
          refreshList={() => getArticles()}
          isLoading={loading}
        />
      )}
    </View>
  );
};

export default NewsFeed;

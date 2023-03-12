import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '~/store/store';

import ArticlesList from '../../components/ArticlesList/ArticlesList';
import {fetchArticles} from '../../store/slices/articles';

import styles from './styles';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const {articles, loading} = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    dispatch(fetchArticles());
  };

  return (
    <View style={styles.mainContainer}>
      {loading && articles.length === 0 ? (
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

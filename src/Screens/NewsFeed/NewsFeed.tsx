import React, {useEffect, FC} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '~/store/store';

import ArticlesList from '../../components/ArticlesList/ArticlesList';
import {fetchArticles} from '../../store/slices/articles';

import styles from './styles';

const NewsFeed: FC = () => {
  const dispatch = useDispatch();
  const {articles, loading} = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    if (checkIfArticlesAreEmpty()) {
      getArticles();
    }
  }, []);

  const checkIfArticlesAreEmpty = () => {
    return articles?.length === 0;
  };

  const getArticles = () => {
    dispatch(fetchArticles() as any);
  };

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

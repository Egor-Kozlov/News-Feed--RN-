import React, {useState, FC} from 'react';
import {View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {WebView} from 'react-native-webview';

import {Route as RouteInterface} from '../../types';

import styles from './styles';

interface ArticleDetailProps {
  route: RouteInterface;
}

const ArticleDetail: FC<ArticleDetailProps> = ({route}) => {
  const {url} = route.params;
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  return (
    <View style={styles.mainContainer}>
      {loadingProgress < 1 && (
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={loadingProgress} color="blue" />
        </View>
      )}
      <WebView
        source={{uri: url}}
        onLoadProgress={({nativeEvent}) => {
          setLoadingProgress(nativeEvent.progress);
        }}
      />
    </View>
  );
};

export default ArticleDetail;

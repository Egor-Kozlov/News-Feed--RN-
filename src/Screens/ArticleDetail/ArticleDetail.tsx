import React, {useState, FC} from 'react';
import {View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {WebView} from 'react-native-webview';

import {Props} from '~/types';

import styles from './styles';

const ArticleDetail: FC<Props> = ({route}) => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  return (
    <View style={styles.mainContainer}>
      {loadingProgress < 1 && (
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={loadingProgress} color="blue" />
        </View>
      )}
      <WebView
        source={{uri: route?.params.url ?? ''}}
        onLoadProgress={({nativeEvent}) => {
          setLoadingProgress(nativeEvent.progress);
        }}
      />
    </View>
  );
};

export default ArticleDetail;

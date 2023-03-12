import React, {FC} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import COLORS from '../../../constants/colors';
import {Article} from '../../../types';

interface ArticleProps {
  article: Article;
  onPicturePress: (articleUrl: string, articleTitle: string) => void;
}

const Section: FC<ArticleProps> = ({article, onPicturePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => onPicturePress(article.url, article.title)}>
        <Image source={{uri: article.imageUrl}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingBottom: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.gray,
  },
  titleContainer: {
    width: '100%',
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

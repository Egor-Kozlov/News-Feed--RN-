import React, {FC} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import COLORS from '../../../constants/colors';
import {Article} from '../../../types';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';

interface ArticleProps {
  article: Article;
  onPicturePress: (articleUrl: string, articleTitle: string) => void;
  onDeleteArticle: (title: string) => void;
  onShowModal: (title: string) => void;
}

const Section: FC<ArticleProps> = ({
  article,
  onPicturePress,
  onDeleteArticle,
  onShowModal,
}) => {
  const onNavigateToWebViewPress = (): void => {
    onPicturePress(article.url, article.title);
  };

  const onDeleteArticlePress = (): void => {
    onDeleteArticle(article.title);
  };

  const onEditArticlePress = (): void => {
    onShowModal(article.title);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={onNavigateToWebViewPress}>
        <Text style={styles.title}>{article.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.imageContainer}
        onPress={onNavigateToWebViewPress}>
        <Image source={{uri: article.imageUrl}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.actionsContainer}>
        <ButtonIcon
          iconName="comment-edit"
          label="Edit"
          onPress={onEditArticlePress}
        />
        <ButtonIcon
          iconName="delete-outline"
          label="Remove"
          onPress={onDeleteArticlePress}
        />
      </View>
    </View>
  );
};

export default React.memo(Section);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.gray,
  },
  titleContainer: {
    width: '100%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.blue_dark,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

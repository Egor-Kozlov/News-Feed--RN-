import React, {FC} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {IArticle} from '../../../types';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';

import styles from './styles';

interface IArticleProps {
  article: IArticle;
  onPicturePress: (articleUrl: string, articleTitle: string) => void;
  onDeleteArticle: (title: string) => void;
  onShowModal: (title: string) => void;
}

const Section: FC<IArticleProps> = ({
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

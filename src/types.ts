import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum ROUTES {
  NewsFeed = 'NewsFeed',
  ArticleDetail = 'ArticleDetail',
}

export type RootStackParamList = {
  [ROUTES.NewsFeed]: undefined;
  [ROUTES.ArticleDetail]: {url: string; headerTitle: string};
};

export type Props = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.ArticleDetail
>;

export interface IArticle {
  url: string;
  title: string;
  imageUrl: string;
}

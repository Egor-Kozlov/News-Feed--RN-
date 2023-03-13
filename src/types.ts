export interface IArticle {
  url: string;
  title: string;
  imageUrl: string;
}

export interface IRoute {
  params: {key: string; headerTitle: string; path: unknown; url: string};
  key: string;
  name: string;
  path: unknown;
}

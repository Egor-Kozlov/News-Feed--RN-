export interface IArticle {
  url: string;
  title: string;
  imageUrl: string;
}

export interface IRoute {
  params: {
    url: string;
    headerTitle: string;
  };
  key: string;
  name: string;
  path: unknown;
}

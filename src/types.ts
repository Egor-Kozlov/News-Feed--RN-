export interface Article {
  url: string;
  title: string;
  imageUrl: string;
}

export interface Route {
  params: {
    url: string;
    headerTitle: string;
  };
  key: string;
  name: string;
  path: unknown;
}

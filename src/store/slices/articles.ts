import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IArticle} from '../../types';

export const fetchArticles = createAsyncThunk('fetchArticles', async () => {
  const response = await fetch(
    'https://storage.googleapis.com/aller-structure-task/article_list.json',
  );
  return (await response.json()) as IArticle[];
});

interface IArticlesState {
  articles: IArticle[];
  loading: boolean;
  error: string;
}

const initialState: IArticlesState = {
  articles: [],
  loading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    changeArticleTitle: (state, action) => {
      const {oldTitle, newTitle} = action.payload;
      const article = state.articles.find(a => a.title === oldTitle);
      if (article) {
        article.title = newTitle;
      }
    },
    deleteArticle: (state, action) => {
      const title = action.payload;
      const article = state.articles.find(a => a.title === title);
      if (article) {
        state.articles = state.articles.filter(a => a.title !== title);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchArticles.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || '';
    });
  },
});

export const {changeArticleTitle, deleteArticle} = articlesSlice.actions;
export default articlesSlice.reducer;

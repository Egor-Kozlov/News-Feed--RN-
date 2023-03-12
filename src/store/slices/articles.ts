import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {Article} from '~/types';

export const fetchArticles = createAsyncThunk('fetchArticles', async () => {
  const response = await fetch(
    'https://storage.googleapis.com/aller-structure-task/article_list.json',
  );
  return (await response.json()) as Article[];
});

interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string;
}

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    changeArticleTitle: (state, action) => {
      const {title} = action.payload;
      const article = state.articles.find(a => a.title === title);
      if (article) {
        article.title = title;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchArticles.pending, (state, action) => {
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

export const {changeArticleTitle} = articlesSlice.actions;
export default articlesSlice.reducer;

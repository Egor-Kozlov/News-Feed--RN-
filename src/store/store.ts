import {configureStore} from '@reduxjs/toolkit';

import {reducer as articlesReducer} from './slices/articles';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

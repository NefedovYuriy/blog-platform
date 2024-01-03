import { combineReducers } from 'redux';

import { reducerArticles } from './articlesReducer';
import { reducerUsers } from './usersReducer';

export const rootReducer = combineReducers({
  reducerArticles,
  reducerUsers,
});

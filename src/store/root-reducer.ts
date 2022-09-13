import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'helpers/const';
import { questData } from './quest-data/quest-data';
import { questProcess } from './quest-process/quest-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questData.reducer,
  [NameSpace.Quest]: questProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

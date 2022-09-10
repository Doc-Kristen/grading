import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Quest, Quests } from 'types/quest';
import { APIRoute } from 'helps/const';
import { loadQuestList, setDetailedQuest } from './action';

export const fetchQuestsListAction = createAsyncThunk<Quests, void, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuestsList',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Quests>(APIRoute.Quests);
    dispatch(loadQuestList(data));
    return data;
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<Quest, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuestsList',
  async (questId: number, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${questId}`);
    dispatch(setDetailedQuest(data));
    return data;
  },
);

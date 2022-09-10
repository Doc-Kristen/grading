import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Quest, Quests } from 'types/quest';
import { APIRoute } from 'helps/const';

export const fetchQuestsListAction = createAsyncThunk<Quests, void, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuestsList',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Quests>(APIRoute.Quests);
    return data;
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<Quest, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchDetailedQuest',
  async (questId: number, { extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${questId}`);
    return data;
  },
);

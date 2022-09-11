import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest, Quests } from 'types/quest';
import { APIRoute } from 'helps/const';
import { OrderPost } from 'types/order-post';
// import { saveToken } from 'services/token';

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

export const sendOrder = createAsyncThunk<void, OrderPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/postOrder',
  async (order: OrderPost, { extra: api }) => {
    const { data } = await api.post(APIRoute.Orders, order);
    console.log(data);
    return data;
  }
);

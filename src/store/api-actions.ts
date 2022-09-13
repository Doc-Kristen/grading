import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest, Quests } from 'types/quest';
import { APIRoute, AppRoute } from 'helpers/const';
import { OrderPost } from 'types/order-post';
import { redirectToRoute, setModalBlockingStatus, setModalOpeningStatus } from './action';

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

export const fetchDetailedQuestAction = createAsyncThunk<Quest, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchDetailedQuest',
  async (questId: string, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(`${APIRoute.Quests}/${questId}`);
      return data;
    }
    catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const sendOrder = createAsyncThunk<void, OrderPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/postOrder',
  async (order: OrderPost, { dispatch, extra: api }) => {
    try {
      dispatch(setModalBlockingStatus(true));
      const { data } = await api.post(APIRoute.Orders, order);
      dispatch(setModalBlockingStatus(false));
      dispatch(setModalOpeningStatus(false));
      return data;
    }
    catch {
      dispatch(setModalBlockingStatus(false));
    }
  }
);

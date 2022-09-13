import { store } from '../store/index';
import { Quest, Quests } from './quest';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type QuestData = {
    questsList: Quests;
    detailedQuest?: Quest,
    isServerError: boolean,
    isDataLoaded: boolean,
};

type QuestProcess = {
    selectedGenre: string,
};

type UserProcess = {
    isFormOpened: boolean,
    isFormBlocked: boolean
};

export type { State, AppDispatch, QuestData, UserProcess, QuestProcess };
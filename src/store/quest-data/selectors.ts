import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, QuestType } from "helpers/const";
import { Quest, Quests } from "types/quest";
import { getQuestsByGenre } from "helpers/utils";
import { getSelectedGenre } from 'store/quest-process/selectors';

export const getServerErrorStatus = (state: { [x: string]: { isServerError: boolean; }; }): boolean => state[NameSpace.Data].isServerError;

export const getDataLoadedStatus = (state: { [x: string]: { isDataLoaded: boolean; }; }): boolean => state[NameSpace.Data].isDataLoaded;

export const getQuestList = (state: { [x: string]: { questsList: Quests; }; }): Quests => state[NameSpace.Data].questsList;

export const filterQuestsByGenre = createSelector(
    [getQuestList, getSelectedGenre],
    (questsList, selectedGenre) => selectedGenre === QuestType['allQuests'] ? questsList : getQuestsByGenre(questsList, selectedGenre)
);

export const getQuest = (state: { [x: string]: { detailedQuest: Quest; }; }): Quest => state[NameSpace.Data].detailedQuest;
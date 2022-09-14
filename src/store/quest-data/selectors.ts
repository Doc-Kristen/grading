import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, QuestType } from "helpers/const";
import { Quest, Quests } from "types/quest";
import { getQuestsByGenre } from "helpers/utils";
import { getSelectedGenre } from 'store/quest-process/selectors';
import { State } from 'types/state';

export const getServerErrorStatus = (state: State): boolean => state[NameSpace.Data].isServerError;

export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getQuestList = (state: State): Quests => state[NameSpace.Data].questsList;

export const filterQuestsByGenre = createSelector(
    [getQuestList, getSelectedGenre],
    (questsList, selectedGenre) => selectedGenre === QuestType['allQuests'] ? questsList : getQuestsByGenre(questsList, selectedGenre)
);

export const getQuest = (state: State): Quest | undefined => state[NameSpace.Data].detailedQuest;

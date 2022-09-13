import { Quest, Quests } from "types/quest";
import { createReducer } from '@reduxjs/toolkit';
import { fetchDetailedQuestAction, fetchQuestsListAction } from "./api-actions";
import { QuestType } from "helpers/const";
import { getQuestsByGenre } from "helpers/utils";
import { selectGenre, setModalOpeningStatus, setModalBlockingStatus } from "./action";

type InitialState = {
    questsList: Quests;
    filteredQuestList: Quests;
    detailedQuest?: Quest,
    selectedGenre: string,
    isServerError: boolean,
    isDataLoaded: boolean,
    isFormOpened: boolean,
    isFormBlocked: boolean
};
const initialState: InitialState = {
    questsList: [],
    filteredQuestList: [],
    selectedGenre: QuestType['allQuests'],
    isServerError: false,
    isDataLoaded: false,
    isFormOpened: false,
    isFormBlocked: false
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchQuestsListAction.fulfilled, (state, action) => {
            state.questsList = action.payload;
            state.filteredQuestList = state.questsList;
            state.isServerError = false;
        })
        .addCase(fetchQuestsListAction.rejected, (state) => {
            state.isServerError = true;
        })
        .addCase(fetchDetailedQuestAction.pending, (state) => {
            state.isDataLoaded = true;
        })
        .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
            state.detailedQuest = action.payload;
            state.isDataLoaded = false;
        })
        .addCase(fetchDetailedQuestAction.rejected, (state) => {
            state.isDataLoaded = false;
        })
        .addCase(selectGenre, (state, action) => {
            state.selectedGenre = action.payload;
            state.filteredQuestList = state.selectedGenre !== QuestType['allQuests'] ? getQuestsByGenre(state.questsList, state.selectedGenre) : state.questsList;
        })
        .addCase(setModalOpeningStatus, (state, action) => {
            state.isFormOpened = action.payload;
        })
        .addCase(setModalBlockingStatus, (state, action) => {
            state.isFormBlocked = action.payload;
        })
});

export { reducer };
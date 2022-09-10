import { Quest, Quests } from "types/quest";
import { createReducer } from '@reduxjs/toolkit';
import { fetchDetailedQuestAction, fetchQuestsListAction } from "./api-actions";
import { QuestType } from "helps/const";
import { getQuestsByGenre } from "helps/utils";
import { selectGenre } from "./action";

type InitialState = {
    questsList: Quests;
    filteredQuestList: Quests;
    detailedQuest?: Quest,
    selectedGenre: string
};
const initialState: InitialState = {
    questsList: [],
    filteredQuestList: [],
    selectedGenre: QuestType['allQuests']
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchQuestsListAction.fulfilled, (state, action) => {
            state.questsList = action.payload;
            state.filteredQuestList = state.questsList;
        })
        .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
            state.detailedQuest = action.payload;
        })
        .addCase(selectGenre, (state, action) => {
            state.selectedGenre = action.payload;
            state.filteredQuestList = state.selectedGenre !== QuestType['allQuests'] ? getQuestsByGenre(state.questsList, state.selectedGenre) : state.questsList;
        });
});

export { reducer };
import { Quest, Quests } from "types/quest";
import { createReducer } from '@reduxjs/toolkit';
import { fetchDetailedQuestAction, fetchQuestsListAction } from "./api-actions";

type InitialState = {
    questList: Quests;
    detailedQuest?: Quest,
};
const initialState: InitialState = {
    questList: [],
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchQuestsListAction.fulfilled, (state, action) => {
            state.questList = action.payload;
        })
        .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
            state.detailedQuest = action.payload;
        });
});

export { reducer };
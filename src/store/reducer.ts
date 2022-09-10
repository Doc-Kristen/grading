import { Quest, Quests } from "types/quest";
import { createReducer } from '@reduxjs/toolkit';
import { loadQuestList, setDetailedQuest } from "./action";

type InitialState = {
    questList: Quests;
    detailedQuest: Quest | null,
};
const initialState: InitialState = {
    questList: [],
    detailedQuest: null,
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadQuestList, (state, action) => {
            state.questList = action.payload;
        })
        .addCase(setDetailedQuest, (state, action) => {
            state.detailedQuest = action.payload;
        });
});

export { reducer };
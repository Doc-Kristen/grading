import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'helpers/const';
import { fetchDetailedQuestAction, fetchQuestsListAction } from 'store/api-actions';
import { QuestData } from 'types/state';

const initialState: QuestData = {
    questsList: [],
    isServerError: false,
    isDataLoaded: false,
};

export const questData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchQuestsListAction.fulfilled, (state, action) => {
                state.questsList = action.payload;
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
            });
    }
});

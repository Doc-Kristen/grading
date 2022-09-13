import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, QuestType } from 'helpers/const';
import { QuestProcess } from 'types/state';

const initialState: QuestProcess = {
    selectedGenre: QuestType['allQuests'],
};

export const questProcess = createSlice({
    name: NameSpace.Quest,
    initialState,
    reducers: {
        selectGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
    },
});

export const { selectGenre } = questProcess.actions;
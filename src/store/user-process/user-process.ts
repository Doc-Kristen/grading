import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'helpers/const';
import { setModalOpeningStatus, setOrderErrorStatus } from 'store/action';
import { sendOrder } from 'store/api-actions';
import { UserProcess } from 'types/state';

const initialState: UserProcess = {
    isFormOpened: false,
    isFormBlocked: false,
    isOrderPosted: false,
    isOrderError: false,
};

export const userProcess = createSlice({
    name: NameSpace.User,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(setModalOpeningStatus, (state, action) => {
                state.isFormOpened = action.payload;
            })
            .addCase(sendOrder.pending, (state) => {
                state.isFormBlocked = true;
                state.isOrderPosted = true;
            })
            .addCase(sendOrder.fulfilled, (state) => {
                state.isFormBlocked = false;
                state.isFormOpened = false;
                state.isOrderPosted = false;
                state.isOrderError = false;
            })
            .addCase(sendOrder.rejected, (state) => {
                state.isFormBlocked = false;
                state.isOrderPosted = false;
                state.isOrderError = true;
            })
            .addCase(setOrderErrorStatus, (state, action) => {
                state.isOrderError = action.payload
            })
    }
});

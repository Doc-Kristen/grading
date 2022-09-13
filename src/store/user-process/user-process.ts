import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'helpers/const';
import { setModalBlockingStatus, setModalOpeningStatus } from 'store/action';
import { sendOrder } from 'store/api-actions';
import { UserProcess } from 'types/state';

const initialState: UserProcess = {
    isFormOpened: false,
    isFormBlocked: false
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
            })
            .addCase(sendOrder.fulfilled, (state) => {
                state.isFormBlocked = false;
                state.isFormOpened = false;
            })
            .addCase(sendOrder.rejected, (state) => {
                state.isFormBlocked = false;
            })
            .addCase(setModalBlockingStatus, (state, action) => {
                state.isFormBlocked = action.payload;
            });
    }
});

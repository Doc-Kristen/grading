import { createAction } from '@reduxjs/toolkit';

const Action = {
    SET_SELECTED_GENRE: 'SET_SELECTED_GENRE',
};

const selectGenre = createAction(Action.SET_SELECTED_GENRE, (value) => (
    {
        payload: value,
    }));


export {
    selectGenre
};
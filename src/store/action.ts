import { createAction } from '@reduxjs/toolkit';

const Action = {
    SET_SELECTED_GENRE: 'SET_SELECTED_GENRE',
    REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

const selectGenre = createAction(Action.SET_SELECTED_GENRE, (value) => (
    {
        payload: value,
    }));

const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => (
    {
        payload: value,
    }));

export {
    selectGenre,
    redirectToRoute
};
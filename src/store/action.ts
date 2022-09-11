import { createAction } from '@reduxjs/toolkit';

const Action = {
    SET_SELECTED_GENRE: 'SET_SELECTED_GENRE',
    REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
    SET_BOOKING_MODAL_STATUS: 'SET_BOOKING_MODAL_STATUS',
};

const selectGenre = createAction(Action.SET_SELECTED_GENRE, (value) => (
    {
        payload: value,
    }));

const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => (
    {
        payload: value,
    }));

const setModalStatus = createAction(Action.SET_BOOKING_MODAL_STATUS, (value) => (
    {
        payload: value,
    }));

export {
    Action,
    selectGenre,
    redirectToRoute,
    setModalStatus
};
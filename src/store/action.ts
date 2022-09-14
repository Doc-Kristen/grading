import { createAction } from '@reduxjs/toolkit';

const Action = {
    SET_SELECTED_GENRE: 'SET_SELECTED_GENRE',
    REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
    SET_BOOKING_MODAL_OPENING_STATUS: 'SET_BOOKING_MODAL_OPENING_STATUS',
    SET_BOOKING_MODAL_BLOCKING_STATUS: 'SET_BOOKING_MODAL_BLOCKING_STATUS',
    SET_ORDER_ERROR_STATUS: 'SET_ORDER_ERROR_STATUS'
};

const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => (
    {
        payload: value,
    }));

const setModalOpeningStatus = createAction(Action.SET_BOOKING_MODAL_OPENING_STATUS, (value) => (
    {
        payload: value,
    }));

const setOrderErrorStatus = createAction(Action.SET_ORDER_ERROR_STATUS, (value) => (
    {
        payload: value,
    }));

export {
    Action,
    redirectToRoute,
    setModalOpeningStatus,
    setOrderErrorStatus
};

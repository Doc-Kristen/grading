import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { reducer } from '../reducer';
import { Action } from '../action';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
    (_store) =>
        (next) =>
            (action) => {
                if (action.type === Action.REDIRECT_TO_ROUTE) {
                    browserHistory.push(action.payload);
                }

                return next(action);
            };
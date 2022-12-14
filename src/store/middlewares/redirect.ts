import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { Action } from '../action';
import { rootReducer } from 'store/root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
    (_store) =>
        (next) =>
            (action) => {
                if (action.type === Action.REDIRECT_TO_ROUTE) {
                    browserHistory.push(action.payload);
                }

                return next(action);
            };

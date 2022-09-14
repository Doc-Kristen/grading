import { NameSpace } from "helpers/const";
import { State } from "types/state";

export const getFormOpenedStatus = (state: State): boolean => state[NameSpace.User].isFormOpened;

export const getFormBlockedStatus = (state: State): boolean => state[NameSpace.User].isFormBlocked;

export const getOrderPostedStatus = (state: State): boolean => state[NameSpace.User].isOrderPosted;

export const getOrderErrorStatus = (state: State): boolean => state[NameSpace.User].isOrderError;

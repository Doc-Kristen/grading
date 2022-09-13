import { NameSpace } from "helpers/const";

export const getFormOpenedStatus = (state: { [x: string]: { isFormOpened: boolean; }; }): boolean => state[NameSpace.User].isFormOpened;

export const getFormBlockedStatus = (state: { [x: string]: { isFormBlocked: boolean; }; }): boolean => state[NameSpace.User].isFormBlocked;
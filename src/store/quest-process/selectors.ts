import { NameSpace } from "helpers/const";

export const getSelectedGenre = (state: { [x: string]: { selectedGenre: string; }; }): string => state[NameSpace.Quest].selectedGenre;

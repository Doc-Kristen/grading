import { NameSpace } from "helpers/const";
import { State } from "types/state";

export const getSelectedGenre = (state: State): string => state[NameSpace.Quest].selectedGenre;

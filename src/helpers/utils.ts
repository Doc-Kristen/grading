import { Quests } from "types/quest";
import { QuestType } from './const';

const getQuestsByGenre = (quests: Quests, selectedGenre: string) => quests.filter((quest) => QuestType[quest.type] === selectedGenre);

export { getQuestsByGenre };
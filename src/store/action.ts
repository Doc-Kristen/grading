import { createAction } from '@reduxjs/toolkit';

const Action = {
    LOAD_QUEST_LIST: 'SET_QUEST_LIST',
    FILTER_QUEST_LIST: 'FILTER_QUEST_LIST',
    SET_DETAILED_QUEST: 'SET_DETAILED_QUEST',
};

const loadQuestList = createAction(Action.LOAD_QUEST_LIST, (value) => (
    {
        payload: value,
    }));

const filterQuestList = createAction(Action.FILTER_QUEST_LIST);

const setDetailedQuest = createAction(Action.SET_DETAILED_QUEST, (value) => (
    {
        payload: value,
    }
));

export {
    loadQuestList,
    filterQuestList,
    setDetailedQuest
};
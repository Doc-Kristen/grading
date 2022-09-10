enum AppRoute {
  Home = '/',
  Quests = '/quests',
  DetailedQuest = '/detailed-quest/:id',
  Contacts = '/contacts',
};

enum APIRoute {
  Quests = '/quests',
  Orders = '/orders ',
}

const QuestType: { [char: string]: string } = {
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

const LevelType: { [char: string]: string } = {
  'easy': 'простой',
  'medium': 'средний',
  'hard': 'сложный',
} as const;

export {
  AppRoute,
  APIRoute,
  QuestType,
  LevelType
}
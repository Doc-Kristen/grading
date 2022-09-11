const BACKEND_URL = 'http://localhost:3001';

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
  'allQuests': 'Все квесты',
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

const genres = ['Все квесты', 'Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'];

export {
  BACKEND_URL,
  AppRoute,
  APIRoute,
  QuestType,
  LevelType,
  genres
}
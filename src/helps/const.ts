const ORGANIZATION_ADDRESS = {
  name: 'Санкт-Петербург',
  location: {
    latitude: 59.96848,
    longitude: 30.31655,
    zoom: 15
  }
};
enum AppRoute {
  Home = '/',
  Quests = '/quests',
  DetailedQuest = '/detailed-quest/:id',
  NotFound = '*',
  Beginners = '#',
  Reviews = '#',
  Promo = '#',
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

const LinkType = [
  {
    title: 'Квесты',
    link: AppRoute.Home
  },
  {
    title: 'Новичкам',
    link: AppRoute.Beginners
  },
  {
    title: 'Отзывы',
    link: AppRoute.Reviews
  },
  {
    title: 'Акции',
    link: AppRoute.Promo
  },
  {
    title: 'Контакты',
    link: AppRoute.Contacts
  },
] as const;

export {
  ORGANIZATION_ADDRESS,
  AppRoute,
  APIRoute,
  QuestType,
  LevelType,
  LinkType,
  genres,
}
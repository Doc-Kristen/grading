const URL_MARKER_DEFAULT = 'img/icon-location.svg';

const URL_MARKER_SHADOW = 'img/icon-blip.svg';

const ERROR_MESSAGE_TIME = 2000;

const ORGANIZATION_ADDRESS = {
  name: 'Санкт-Петербург',
  location: {
    latitude: 59.968322,
    longitude: 30.31735,
    zoom: 16
  }
};

enum AppRoute {
  Home = '/',
  Quests = '/',
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

const navigationLinks = [
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
];

enum NameSpace {
  Data = 'DATA',
  Quest = 'QUEST',
  User = 'USER',
}

export {
  ORGANIZATION_ADDRESS,
  NameSpace,
  AppRoute,
  APIRoute,
  QuestType,
  LevelType,
  navigationLinks,
  genres,
  URL_MARKER_DEFAULT,
  URL_MARKER_SHADOW,
  ERROR_MESSAGE_TIME
}

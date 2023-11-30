import { IContent } from '../model/contentInterface';

export const contentRu: IContent = {
  // name: 'Андрей Зарецкий',
  profession: 'Full-stack разработчик',
  language: 'Язык',
  languageRu: 'Русский',
  languageEn: 'English',
  download: 'Загрузить',
  footer: '© 2023 Андрей Зарецкий',
  photo: '../../../../assets/img/myPhoto.jpg',
  about: {
    title: 'Обо мне',
    description: 'Привет. Я Андрей Зарецкий. Я веб разработчик. Интересен как фронтенд, так и бэкенд. Обучался в течении года в Rolling Scopes school, где изучал HTML, CSS, JavaScript,Typescript, Angular, Node.js, Nest.js и другие технологии. Участвовал в нескольких проектах, связанных с созданием веб-приложений и API. Имею опыт работы с Git, Webpack, MongoDB и PostgreSQL. Стремлюсь развивать свои навыки и учиться новому.',
  },
  name: {
    title: 'Андрей Зарецкий',
    age: '35 лет',
    profession: 'Full-stack разработчик',
  },
  contacts: {
    title: 'Контакты',
    phone: '+375297758106',
    email: 'zaretskiag@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andreizaretski/',
    github: 'https://github.com/AndreiZaretski',
    location: 'Минск, Беларусь',
  },

  education: {
    title: 'Образование',
    school: [
      {
        name: 'RS-School',
        course: 'NodeJS 2023Q2',
        dates: 'june 2023 - august 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/skqxm1ym',
          text: 'Сертификат',
        },
      },

      {
        name: 'RS-School',
        course: 'Angular 2023Q1',
        dates: 'march 2023 - may 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/flen7nvw',
          text: 'Сертификат',
        },
      },

      {
        name: 'RS-School',
        course: 'JavaScript/Front-end 2022Q3',
        dates: 'march 2023 - may 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/6ad0o5bg',
          text: 'Сертификат',
        },
      },

      {
        name: 'Belhard',
        course: 'Основы разработки сайтов, Современный Front-End c использованием JavaScript и HTML5',
        dates: 'март 2022 - июнь 2022',
      },

      {
        name: 'БНТУ,  Строительный факультет',
        course: 'Строительные материалы и изделия',
        qualification: 'Исследователь',
        dates: '2013 - 2017',
      },

      {
        name: 'БНТУ,  Факультет транспортных коммуникаций',
        course: 'Строительство',
        qualification: 'Магистер',
        dates: '2011 - 2012',
      },

      {
        name: 'БНТУ,  Факультет транспортных коммуникаций',
        course: 'Мосты транспортные тоннели и метрополитены',
        qualification: 'горный инженер строитель',
        dates: '2006 - 2011',
      },

      {
        name: 'БНТУ,  Институт повышения квалификации и переподготовки кадров по новым направлениям развития техники, технологии и экономики',
        course: 'Экономика и управление на предприятии промышленности',
        qualification: 'экономист-менеджер',
        dates: '2009 - 2011',
      },
    ],
  },

  experience:
    {
      title: 'Опыт',
      organization: [
        {
          name: 'NeatSoft',
          position: 'Angular developer',
          dates: 'октябрь 2023 - ноябрь 2023',
          description: 'Разработка веб приложений',
        },
        {
          name: 'RS-School',
          position: 'Mentor',
          dates: 'сентябрь 2023',
          description: 'Код ревью, проведение технических интервью',
        },
        {
          name: 'RS-School',
          position: 'Trainee',
          dates: 'сентябрь 2022',
          description: 'Выполнение проектов, работа в команде, прохождение интервью, соблюдение дедлайнов, участие в комьюнити разработчиков',
        },

        {
          name: 'ОАО Мостострой филиал МСУ 6',
          position: 'Производитель работ',
          dates: 'август 2011 - март 2022',
          description: 'Работа с технической документацией, управление командой, общение с заказчиком и подрядчиком, решение технических и организационных проблем',
        },
      ],
    },

  portfolio: {
    title: 'Примеры работ',
    frontend: {
      title: 'Frontend',
      works: [
        {
          name: 'Online-Zoo',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-JSFE2022Q3/online-zoo/main/',
          description: 'Адаптивная верстка с добавлением интерактивности на JS',
        },

        {
          name: 'Gem Puzzle',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-JSFE2022Q3/puzzle/',
          description: 'Игра пятнашки написанная на JS',
        },

        {
          name: 'SongOpera',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-JSFE2022Q3/songopera/html/',
          description: 'Игра по угадываню произведений из опер реализованная на JS, HTML, SCSS',
        },

        {
          name: 'Online Store',
          link: 'https://andreizaretski.github.io/Online-store/',
          githubLink: 'https://github.com/AndreiZaretski/Online-store/tree/develop',
          description: 'Интернет магазин,  проект реализована на TS',
        },

        {
          name: 'Ava editor',
          link: 'https://ava-team-rsclone.netlify.app/',
          githubLink: 'https://github.com/9fogel/AVA-project/pull/70',
          description: 'Командный проект. Редактор фотографий с возможностью авторизации и написания в тех поддержку. Реализован на TS',
        },

        {
          name: 'Airways',
          link: 'https://ngonflight-angular-project.netlify.app/main',
          githubLink: 'https://github.com/AndreiZaretski/airways-angular-project/pull/36',
          description: 'Командный проект. Сервис по выбору, бронированию и покупке авиабилетов. Проект реализован на Angular.',
        },

        {
          name: 'Youtube client',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-ANGULAR2023Q1/login',
          description: 'Сервис по поиску видио в ютубе. Для входа нужно ввести логин и пaроль который пройдет валидацию.  Проект реализован на Angular.',
        },

      ],
    },
    backend: {
      title: 'Backend',
      works: [
        {
          name: 'Server Ava Editor',
          link: 'https://github.com/AndreiZaretski/server-final-tas',
          description: 'Сервер для авторизации и написания в техподдержу, для проекта AvaEditor. Реализован на Express.js.',
        },

        {
          name: 'File Manager',
          link: 'https://github.com/AndreiZaretski/File-Manager',
          description: 'Простой файловый менеджер , реализованный на node.js.',
        },

        {
          name: 'CRUD API',
          link: 'https://github.com/AndreiZaretski/CRUD_API',
          description: 'Простой CRUD API, использующий базу данных в памяти. Он реализован на node.js с использованием TypeScript.',
        },

        {
          name: 'Websokets',
          link: 'https://github.com/AndreiZaretski/websockets-ui',
          description: 'Сервер для игры в морской бой. Используемые технологии: WebSocket, TS, Webpack',
        },

        {
          name: 'Home Library Service',
          link: 'https://github.com/AndreiZaretski/nodejs2023Q2-service',
          description: 'Служба домашней библиотеки! Пользователи могут создавать, читать, обновлять, удалять данные об исполнителях, треках и альбомах, добавлять их в избранное в своей домашней библиотеке! Авторизация при помощи JWT токенов. Написание кастомного логирования. Используемый стек nest.js, Docker,  PostgreSQL, Prisma.',
        },
      ],
    },
  },

  stack: {
    title: 'Навыки',
    list: ['HTML', 'CSS', 'SCSS', 'Java script', 'Typescript', 'Angular', 'Webpack', 'Nest.js', 'Node.js', 'Docker', 'Websocket', 'Git', 'PostgreSql', 'MongoDb', 'Prisma', 'RXJS', 'NGRX'],
  },

  languageSkill: {
    title: 'Languages',
    language: [
      {
        name: 'Английский',
        level: 'B1',
      },

      {
        name: 'Итальянский',
        level: 'A2',
      },

      {
        name: 'Белорусский',
        level: 'native',
      },

      {
        name: 'Русский',
        level: 'native',
      },
    ],
  },
};

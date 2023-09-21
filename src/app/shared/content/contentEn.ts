import { IContent } from '../model/contentInterface';

export const contentEn: IContent = {
  // name: 'Andrei Zaretscki',
  profession: 'full-stack developer',
  language: 'Language',
  languageRu: 'Русский',
  languageEn: 'English',
  download: 'Download',
  footer: '© 2023 Andrei Zaretski',
  photo: '../../../../assets/img/myPhoto.jpg',
  about: {
    title: 'About',
    description: 'Hello. I\'m Andrey. I\'m a beginner developer. I\'m interested in both frontend and backend. I studied for a year at Rolling Scopes school, where I learned HTML, CSS, JavaScript,Typescript, Angular, Node.js, Nest.js and other technologies. I participated in several projects related to creating web applications and APIs. I have experience working with Git, Webpack, MongoDB and PostgreSQL. I strive to develop my skills and learn new things.',
  },
  name: {
    title: 'Andrei Zaretscki',
    age: '35 yers old',
    profession: 'Full-stack developer',
  },
  contacts: {
    title: 'Contacts',
    phone: '+375297758106',
    email: 'zaretskiag@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andreizaretski/',
    github: 'https://github.com/AndreiZaretski',
    location: 'Minsk, Belarus',
  },
  education: {
    title: 'Education',
    school: [
      {
        name: 'RS-School',
        course: 'NodeJS 2023Q2',
        dates: 'june 2023 - august 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/skqxm1ym',
          text: 'Certificate',
        },
      },

      {
        name: 'RS-School',
        course: 'Angular 2023Q1',
        dates: 'march 2023 - may 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/flen7nvw',
          text: 'Certificate',
        },
      },

      {
        name: 'RS-School',
        course: 'JavaScript/Front-end 2022Q3',
        dates: 'march 2023 - may 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/6ad0o5bg',
          text: 'Certificate',
        },
      },

      {
        name: 'Belhard',
        course: 'Website development basics, Modern Front-End with JavaScript and HTML5',
        dates: 'march 2022 - june 2022',
      },

      {
        name: 'BNTU,  Faculty of Civil Engineering',
        course: 'Construction materials and products',
        qualification: 'Researcher',
        dates: '2013 - 2017',
      },

      {
        name: 'BNTU,  Faculty of Transport Communications',
        course: 'Construction',
        qualification: 'Master',
        dates: '2011 - 2012',
      },

      {
        name: 'BNTU,  Faculty of Transport Communications',
        course: 'Bridges, transport tunnels and subways',
        qualification: 'mining civil engineer',
        dates: '2006 - 2011',
      },

      {
        name: 'BNTU,  Institute for advanced training and retraining of personnel in new areas of development of engineering, technology and economics',
        course: ' Economics and management at the industrial enterprise',
        qualification: 'economist-manager',
        dates: '2009 - 2011',
      },
    ],
  },
  experience:
    {
      title: 'Experience',
      organization: [
        {
          name: 'RS-School',
          position: 'Traine',
          dates: 'septemper 2022',
          description: 'Completing projects, working in a team, passing interviews, meeting deadlines, participating in the developer community',
        },

        {
          name: 'JSC Mostostroy MSU 6',
          position: 'Foreman',
          dates: 'august 2011 - march 2022',
          description: 'Work with technical documentation, team management, communication with the customer and contractor, solving technical and organizational problems',
        },
      ],
    },

  portfolio: {
    title: 'Works Example',
    frontend: {
      title: 'Frontend',
      works: [
        {
          name: 'Online-Zoo',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-JSFE2022Q3/online-zoo/main/',
          description: 'Adaptive layout with added interactivity using JS',
        },

        {
          name: 'Gem Puzzle',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-JSFE2022Q3/puzzle/',
          description: 'Tag game written in JS',
        },

        {
          name: 'SongOpera',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-JSFE2022Q3/songopera/html/',
          description: 'Game for guessing works from operas implemented in JS, HTML and SCSS',
        },

        {
          name: 'Online Store',
          link: 'https://andreizaretski.github.io/Online-store/',
          githubLink: 'https://github.com/AndreiZaretski/Online-store/tree/develop',
          description: 'Online store, project implemented on TS',
        },

        {
          name: 'Ava editor',
          link: 'https://ava-team-rsclone.netlify.app/',
          githubLink: 'https://github.com/9fogel/AVA-project/pull/70',
          description: 'Team project. Photo editor with the ability to log in and write to technical support. Implemented on TS',
        },

        {
          name: 'Airways',
          link: 'https://ngonflight-angular-project.netlify.app/main',
          githubLink: 'https://github.com/AndreiZaretski/airways-angular-project/pull/36',
          description: 'Team project. Service for selecting, booking and purchasing air tickets. The project was implemented in Angular.',
        },

        {
          name: 'Youtube client',
          link: 'https://rolling-scopes-school.github.io/andreizaretski-ANGULAR2023Q1/login',
          // githubLink: '',
          description: 'YouTube video search service. To log in, you need to enter a login and password that has been validated. The project was implemented in Angular.',
        },
      ],
    },
    backend: {
      title: 'Backend',
      works: [
        {
          name: 'Server Ava Editor',
          link: 'https://github.com/AndreiZaretski/server-final-tas',
          // githubLink: '',
          description: 'Server for authorization and writing to technical support for the AvaEditor project. Implemented in Express.js.',
        },

        {
          name: 'File Manager',
          link: 'https://github.com/AndreiZaretski/File-Manager',
          // githubLink: '',
          description: 'A simple file manager implemented in native node.js.',
        },

        {
          name: 'CRUD API',
          link: 'https://github.com/AndreiZaretski/CRUD_API',
          // githubLink: '',
          description: 'A simple CRUD API using in-memory database underneath. It implemented in native node.js using TypeScript.',
        },

        {
          name: 'Websokets',
          link: 'https://github.com/AndreiZaretski/websockets-ui',
          // githubLink: '',
          description: 'Server for playing sea battle.',
        },

        {
          name: 'Home Library Service',
          link: 'https://github.com/AndreiZaretski/nodejs2023Q2-service',
          // githubLink: '',
          description: 'Home Library Service! Users can create, read, update, delete data about Artists, Tracks and Albums, add them to Favorites in their own Home Library! Authorization using JWT tokens. Writing custom logging. Stack used: nest.js, Docker, PostgreSQL, Prisma.',
        },
      ],
    },
  },

  stack: {
    title: 'Skills',
    list: ['HTML', 'CSS', 'SCSS', 'Java script', 'Typescript', 'Angular', 'Webpack', 'Nest.js', 'Node.js', 'Docker', 'Websocket', 'Git', 'PostgreSql', 'MongoDb', 'Prisma', 'RXJS', 'NGRX'],
  },

  languageSkill: {
    title: 'Languages',
    language: [
      {
        name: 'English',
        level: 'B1',
      },

      {
        name: 'Italian',
        level: 'A2',
      },

      {
        name: 'Belarussian',
        level: 'native',
      },

      {
        name: 'Russian',
        level: 'native',
      },
    ],
  },

};

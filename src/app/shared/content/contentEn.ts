import { Content } from '../model/contentInterface';

export const contentEn: Content = {
  profession: 'full-stack developer',
  language: 'Language',
  languageRu: 'Русский',
  languageEn: 'English',
  download: 'Download',
  footer: 'Andrei Zaretski',
  photo: '../../../../assets/img/newphoto.jpg',
  about: {
    title: 'About',
    description: 'Web developer with over 3.5 years of experience. Full‑stack specialist engaged in building and maintaining complex web applications and APIs. Delivered more than ten advanced UI modules, including real‑time maps and chat systems. On the backend, designed business logic and optimized APIs to ensure high performance and reliability. Experienced in integrating CMS solutions and working with both relational and document‑oriented databases. Mentor in Angular and JavaScript courses at RollingScopes School. Contribute to team projects (3–10 developers) throughout the full cycle - from design to release. Passionate about clean architecture, practical automation, and continuous professional growth.',
  },
  name: {
    title: 'Andrei Zaretscki',
    age: '37 yers old',
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
        course: 'React 2023 Q4',
        dates: 'october 2023 - january 2024',
        certificate: {
          link: 'https://app.rs.school/certificate/r3yaovgd',
          text: 'Certificate',
        },
      },
      {
        name: 'RS-School',
        course: 'NodeJS 2023Q2',
        dates: 'june 2023 - september 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/skqxm1ym',
          text: 'Certificate',
        },
      },

      {
        name: 'RS-School',
        course: 'Angular 2023Q1',
        dates: 'march 2023 - june 2023',
        certificate: {
          link: 'https://app.rs.school/certificate/flen7nvw',
          text: 'Certificate',
        },
      },

      {
        name: 'RS-School',
        course: 'JavaScript/Front-end 2022Q3',
        dates: 'septemper 2022 - march 2023',
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
          name: 'Freelance',
          position: 'Web Developer',
          dates: 'january 2023',
          description: `
          •  Development of web components (custom elements) in Angular as integral parts of the application.

          •  Participation in team projects using Angular.

          •  Support and development of individual modules for backend applications on Nest.js.

          •  Support for applications on Next.js.

          •  Development of small applications using Angular, Next.js, and React.

          •  Deployment of applications on a remote cloud server, configuration setup to ensure uninterrupted operation, and automatic rebuild setup via webhooks upon changes in Git.

          •  Creation of the administrative part of the application and API using headless CMS (Directus, Strapi) and their integration into the main application.
          `,
        },
        {
          name: 'NeatSoft',
          position: 'Angular developer',
          dates: 'october 2023 - november 2023',
          description: 'Web application development',
        },
        {
          name: 'RS-School',
          position: 'Mentor',
          dates: 'september 2023',
          description: 'Code review, technical interviews',
        },
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
    title: 'Selected Cases',
    frontend: {
      title: 'Frontend',
      works: [
        {
          name: 'Direct Contact',
          link: 'https://dircont.com/',
          description: 'Real‑time online trading application. Participated in redesigning key modules: trading, chat, and AI assistant integration. Responsible for optimizing socket communication and managing state through services. Provided ongoing support and development within the team. Stack: Angular, RxJS, Socket.io, REST API.',
        },

        {
          name: 'Industrial Enterprise Security System (NDA)',
          link: 'NDA',
          description: 'Developed the frontend part in Angular: interactive markers on the plant map with issue descriptions, and real‑time notifications for all participants. The system served more than 500 active users. Stack: Angular.',
        },

        {
          name: 'Educational Center (NDA)',
          link: '',
          description: 'Developed the frontend part in Angular: personal accounts for students and teachers, course and schedule management. Implemented a chat module with role‑based separation (students, teachers, administrators) and thematic channels. The system served more than 1000 users. Worked in a team, actively contributing to interface design and API integration. Technologies: Angular, RxJS, NgRx, REST API.',
        },

        {
          name: 'Production Planning and Management System (NDA)',
          link: '',
          description: 'Developed the web version of an integrated production planning and management system (PPMS). Started the project with another developer but completed it independently despite its large scale. Implemented task boards with visualization, Gantt chart, and calculation tools. Used Angular, D3.js for visualization, REST API. Demonstrated ability to lead a large project from architecture to final implementation.',
        },

        {
          name: 'Auto Parts Sales and Car Repair Service',
          link: '',
          description: 'Full‑stack application built with Next.js: CRM for managing auto parts inventory, repair requests, client queue, and customer database. Participated in support and further development, adding new features and optimizing database queries. Worked in a team, collaborating with backend developers and analysts. Stack: Next.js, Sequelize, PostgreSQL, Node.js.',
        },
      ],
    },
    backend: {
      title: 'Backend',
      works: [
        {
          name: 'Medical Center (NDA)',
          link: '',
          description: 'Developed the server side using NestJS: user registration, role‑based access model, and statistics module. Configured database queries and pre‑processing of data on the server before sending to the client. Worked in a team, responsible for architecture and query optimization. Stack: NestJS, TypeORM, PostgreSQL, Redis.',
        },

        {
          name: 'Project Management Platform (NDA)',
          link: '',
          description: 'Developed the backend part of a corporate project management platform. Implemented a flexible notification system, data filtering, and analytics module. Worked in a team, focusing on WebSocket integration and API optimization. Stack: NestJS, WebSockets, PostgreSQL, Redis, Docker.',
        },
      ],
    },
  },

  stack: {
    title: 'Skills',
    list: ['HTML', 'CSS', 'SCSS', 'Java script', 'Typescript', 'Angular', 'Webpack', 'Nest.js', 'Node.js', 'Docker', 'Websocket', 'Git', 'PostgreSql', 'MongoDb', 'Prisma', 'RXJS', 'NGRX', 'React', 'Redux', 'Redux-toolkit', 'strapi', 'directus', 'knex'],
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

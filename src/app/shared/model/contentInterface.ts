export interface Content {
  profession: string,
  language: string,
  languageRu: string,
  languageEn: string,
  download: string,
  footer: string,
  photo: string,
  about: IAbout,
  name: IName,
  contacts: IContacts,
  education: IEducation,
  experience: IExperience,
  portfolio: IPortfolio,
  stack: IStack,
  languageSkill: ILanguage,

}

export interface IAbout {
  title: string,
  description: string
}

export interface IName {
  title: string,
  age: string,
  profession: string,
}

export interface IContacts {
  title: string,
  phone: string | number,
  email: string,
  linkedin: string,
  github: string,
  location: string,
}

export interface IEducation {
  title: string,
  school: {
    name: string,
    course: string,
    qualification?: string,
    dates: string,
    certificate?: {
      link: string,
      text: string,
    }
  }[]
}

export interface IExperience {
  title: string,
  organization: {
    name: string,
    position: string,
    dates: string,
    description: string
  }[]
}

export interface IPortfolio {
  title: string,
  frontend: {
    title: string
    works: IWork[]
  },
  backend: {
    title: string
    works: IWork[]
  }
}

export interface IWork {
  name: string,
  link: string,
  githubLink?: string,
  description: string,
}

export interface IStack {
  title: string,
  list: string[],
}

export interface ILanguage {
  title: string,
  language: {
    name: string,
    level: string,
  }[]
}

export interface IContent {
  // name: string,
  profession: string,
  language: string,
  languageRu: string,
  languageEn: string,
  download: string,
  photo: string,
  about: IAbout,
  name: IName,
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

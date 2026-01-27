import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { contentEn } from 'src/app/shared/content/contentEn';
import { Content } from 'src/app/shared/model/contentInterface';
import { Lang } from 'src/app/shared/enums/lang';
import { contentRu } from '../../shared/content/contentRu';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private contentSubject = new BehaviorSubject<Content>(contentEn);

  public content$ = this.contentSubject.asObservable();

  constructor() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.setContent(lang);
    } else {
      localStorage.setItem('lang', Lang.En);
      this.setContent(Lang.En);
    }
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.setContent(lang);
  }

  setContent(lang: string) {
    if (lang === Lang.En) {
      this.contentSubject.next(contentEn);
    } else if (lang === Lang.Ru) {
      this.contentSubject.next(contentRu);
    }
  }
}

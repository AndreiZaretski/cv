import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { materialModule } from 'src/app/shared/material-modules';
import { Content } from 'src/app/shared/model/contentInterface';
import { FormControl, FormGroup } from '@angular/forms';
import { Lang } from 'src/app/shared/enums/lang';
import { LanguageService } from '../../services/language.service';

interface ILanguage {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...materialModule, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() content!: Content;

  constructor(private languageService: LanguageService) {}

  languages?: ILanguage[];

  langControl!: FormControl;

  formLang!: FormGroup;

  ngOnInit(): void {
    this.languages = [
      { value: Lang.En, viewValue: this.content.languageEn },
      { value: Lang.Ru, viewValue: this.content.languageRu },
    ];

    this.langControl = new FormControl(this.languages[this.languages.findIndex((el) => el.value === localStorage.getItem('lang'))].value);

    this.formLang = new FormGroup({
      language: this.langControl,
    });
  }

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}

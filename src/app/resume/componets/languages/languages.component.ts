import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/app/shared/material-modules';
import { ILanguage } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-languages',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ...materialModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  @Input() language?: ILanguage;
}

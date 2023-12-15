import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { materialModule } from 'src/app/shared/material-modules';
import { ILanguage } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-languages',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...materialModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  @Input() language?: ILanguage;
}

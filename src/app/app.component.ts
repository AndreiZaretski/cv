import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HeaderComponent } from './core/componets/header/header.component';
import { FooterComponent } from './core/componets/footer/footer.component';
import { LanguageService } from './core/services/language.service';
import { MainComponent } from './resume/page/main/main.component';
import { Content } from './shared/model/contentInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AsyncPipe, HeaderComponent, FooterComponent, MainComponent],
})
export class AppComponent {
  title = 'cv';

  content$: Observable<Content> = this.languageService.content$;

  constructor(private languageService: LanguageService) {}
}

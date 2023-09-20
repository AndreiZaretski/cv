import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgSwitch, NgSwitchDefault, NgSwitchCase, CommonModule,
} from '@angular/common';
// import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { HeaderComponent } from './core/componets/header/header.component';
import { FooterComponent } from './core/componets/footer/footer.component';
import { LanguageService } from './core/services/language.service';
import { MainComponent } from './resume/page/main/main.component';
import { IContent } from './shared/model/contentInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, CommonModule,
    NgSwitchCase, RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cv';

  content$!: IContent;

  private subscription?: Subscription;
  // content$: Observable<IContent> = this.languageService.content$;

  constructor(private languageService: LanguageService) {

    // this.content$ = this.languageService.content$;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.languageService.content$.subscribe((content) => {
      this.content$ = content;
    });
  }
}

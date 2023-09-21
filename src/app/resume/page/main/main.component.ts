import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContent } from 'src/app/shared/model/contentInterface';
import { materialModule } from 'src/app/shared/material-modules';
import { AboutComponent } from '../../componets/about/about.component';
import { PhotoComponent } from '../../componets/photo/photo.component';
import { NameComponent } from '../../componets/name/name.component';
import { ContactsComponent } from '../../componets/contacts/contacts.component';
import { EducationComponent } from '../../componets/education/education.component';
import { ExperienceComponent } from '../../componets/experience/experience.component';
import { PortfolioComponent } from '../../componets/portfolio/portfolio.component';
import { StackComponent } from '../../componets/stack/stack.component';
import { LanguagesComponent } from '../../componets/languages/languages.component';

export interface Tile {
  color: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [CommonModule, ...materialModule,
    AboutComponent, PhotoComponent, NameComponent,
    ContactsComponent, EducationComponent, ExperienceComponent,
    PortfolioComponent, StackComponent, LanguagesComponent],
})
export class MainComponent implements OnInit {
  @Input() content!: IContent;

  tiles: Tile[] = [
    {
      color: 'lightblue',
    },
    {
      color: 'lightgreen',
    },
    {
      color: 'lightpink',
    },
    {
      color: '#DDBDF1',
    },
    {
      color: 'grey',
    },
    {
      color: 'aquamarine',
    },
    {
      color: 'bisque',
    },
    {
      color: 'cadetblue',
    },
  ];

  public isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 700;
  }

  onResize(event: UIEvent) {
    this.isMobile = (event.target as Window).innerWidth <= 700;
  }
}

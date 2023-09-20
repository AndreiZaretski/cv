import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContent } from 'src/app/shared/model/contentInterface';
import { materialModule } from 'src/app/shared/material-modules';
import { AboutComponent } from '../../componets/about/about.component';
import { PhotoComponent } from '../../componets/photo/photo.component';
import { NameComponent } from '../../componets/name/name.component';

export interface Tile {
  color: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [CommonModule, ...materialModule, AboutComponent, PhotoComponent, NameComponent],
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
  ];

  public isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 700;
  }

  onResize(event: UIEvent) {
    this.isMobile = (event.target as Window).innerWidth <= 700;
  }
}

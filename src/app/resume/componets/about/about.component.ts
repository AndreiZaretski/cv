import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAbout } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() about: IAbout | null = null;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IExperience } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experience?: IExperience;
}

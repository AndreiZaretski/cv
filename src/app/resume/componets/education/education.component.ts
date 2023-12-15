import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IEducation } from 'src/app/shared/model/contentInterface';
import { materialModule } from 'src/app/shared/material-modules';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...materialModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() education?: IEducation;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IName } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-name',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent {
  @Input() name?: IName;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IName } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-name',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent {
  @Input() name?: IName;
}

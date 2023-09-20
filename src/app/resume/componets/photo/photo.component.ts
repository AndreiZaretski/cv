import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  @Input() photo?: string;
}

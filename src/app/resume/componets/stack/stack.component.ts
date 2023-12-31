import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStack } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-stack',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  @Input() stack?: IStack;
}

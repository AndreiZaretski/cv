import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPortfolio } from 'src/app/shared/model/contentInterface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  @Input() portfolio?: IPortfolio;
}

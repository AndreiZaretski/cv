import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IContacts } from 'src/app/shared/model/contentInterface';
import { materialModule } from 'src/app/shared/material-modules';
import { IconService } from 'src/app/core/services/icon.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...materialModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  @Input() contacts?: IContacts;

  constructor(private IconeAdd: IconService) {
    IconeAdd.addPath('github', 'assets/icons/github-logo.svg');
    IconeAdd.addPath('linkedin', 'assets/icons/linkedin.svg');
  }
}

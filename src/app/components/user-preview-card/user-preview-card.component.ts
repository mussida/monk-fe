import { Component, input } from '@angular/core';
import { User } from '../../services/data-service.service';

@Component({
    selector: 'app-user-preview-card',
    imports: [],
    templateUrl: './user-preview-card.component.html',
    styleUrl: './user-preview-card.component.css'
})
export class UserPreviewCardComponent {
  user = input<User>();
  position = input<number>();
}

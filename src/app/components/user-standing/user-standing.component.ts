import { Component, model } from '@angular/core';
import { User } from '../../services/data-service.service';

@Component({
  selector: 'app-user-standing',
  imports: [],
  templateUrl: './user-standing.component.html',
  styleUrl: './user-standing.component.css',
})
export class UserStandingComponent {
  users = model<User[]>([]);
  showAlert = false;

  ngOnInit(): void {
    this.users.update((users) =>
      [...users].sort((a, b) => b.points - a.points)
    );
  }
}

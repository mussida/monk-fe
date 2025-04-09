import { Component, input } from '@angular/core';
import { Team, User } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-preview-card',
  imports: [CommonModule],
  templateUrl: './teams-preview-card.component.html',
  styleUrl: './teams-preview-card.component.css',
})
export class TeamsPreviewCardComponent {
  team = input<Team>();
  position = input<number>();
  users = input<User[]>();
  teamMembers: User[] | undefined = [];
  showTeam = false;

  ngOnInit() {
    this.teamMembers = this.users()?.filter(
      (user) => user.teamId === this.team()?.id
    );
  }

  toggleShowTeam() {
    this.showTeam = !this.showTeam;
  }
}

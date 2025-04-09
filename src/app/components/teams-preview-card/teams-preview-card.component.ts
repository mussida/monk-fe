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
    // Verifica iniziale se gli utenti sono disponibili
    this.updateTeamMembers();
  }

  // Puoi usare ngOnChanges per reagire ai cambiamenti degli input
  ngOnChanges() {
    this.updateTeamMembers();
  }

  updateTeamMembers() {
    const currentUsers = this.users();
    const currentTeam = this.team();

    if (currentUsers && currentUsers.length > 0 && currentTeam) {
      this.teamMembers = currentUsers.filter(
        (user) => user.teamId === currentTeam.id
      );
    }
  }

  toggleShowTeam() {
    this.showTeam = !this.showTeam;
  }
}

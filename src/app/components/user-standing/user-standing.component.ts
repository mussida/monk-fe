import { Component, model } from '@angular/core';
import { Team, User } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-standing',
  imports: [CommonModule],
  templateUrl: './user-standing.component.html',
  styleUrl: './user-standing.component.css',
})
export class UserStandingComponent {
  users = model<User[]>([]);
  teams = model<Team[]>([]); // Aggiungi le squadre
  showAlert = false;

  ngOnInit(): void {
    this.users.update((users) =>
      [...users].sort((a, b) => b.points - a.points)
    );
  }

  // Metodo per ottenere la squadra di un utente
  getTeam(teamId: number): Team | undefined {
    console.log('teamId', teamId);
    return this.teams().find((team) => team.id === teamId);
  }

  getTeamName(teamId: number): string {
    const team = this.getTeam(teamId);
    return team ? team.name : 'Nessuna squadra';
  }

  getTeamAbbreviation(teamId: number): string {
    const team = this.getTeam(teamId);
    return team ? team.abbreviation : 'Nessuna squadra';
  }
}

import { Component, model } from '@angular/core';
import { Team } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-standing',
  imports: [CommonModule],
  templateUrl: './teams-standing.component.html',
  styleUrl: './teams-standing.component.css',
})
export class TeamsStandingComponent {
  teams = model<Team[]>([]);
  showAlert = false;

  ngOnInit(): void {
    this.teams.update((teams) =>
      [...teams].sort((a, b) => b.points - a.points)
    );
  }
}

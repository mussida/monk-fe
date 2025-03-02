import { Component, model } from '@angular/core';
import { Team } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-standing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams-standing.component.html',
  styleUrl: './teams-standing.component.css',
})
export class TeamsStandingComponent {
  teams = model<Team[]>([]);
}

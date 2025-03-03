import { Component, inject, model } from '@angular/core';
import {
  DataServiceService,
  Route,
  Team,
  User,
} from '../../services/data-service.service';
import { CommonModule } from '@angular/common';
import { TeamsPreviewCardComponent } from '../../components/teams-preview-card/teams-preview-card.component';

@Component({
  selector: 'app-teams',
  imports: [CommonModule, TeamsPreviewCardComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  users = model<User[]>([]);
  teams = model<Team[]>([]);
  routes = model<Route[]>([]);

  dataService = inject(DataServiceService);

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((users) => {
      this.users.set(users);
      console.log(users);
    });

    this.dataService.getTeams().subscribe((teams) => {
      this.teams.set(teams);
    });

    this.dataService.getRoutes().subscribe((routes) => {
      this.routes.set(routes);
    });
  }
}

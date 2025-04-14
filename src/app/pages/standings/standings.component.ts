import { CommonModule } from '@angular/common';
import { Component, inject, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserStandingComponent } from '../../components/user-standing/user-standing.component';
import { TeamsStandingComponent } from '../../components/teams-standing/teams-standing.component';
import {
  DataServiceService,
  Route,
  Team,
  User,
} from '../../services/data-service.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-standings',
  imports: [
    CommonModule,
    FormsModule,
    UserStandingComponent,
    TeamsStandingComponent,
    FooterComponent,
  ],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css',
})
export class StandingsComponent implements OnInit {
  showTeamStandings = false;
  users = model<User[]>([]);
  teams = model<Team[]>([]);
  routes = model<Route[]>([]);

  dataService = inject(DataServiceService);

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users.set(users);
    });

    this.dataService.getTeams().subscribe((teams) => {
      this.teams.set(teams);
    });

    this.dataService.getRoutes().subscribe((routes) => {
      this.routes.set(routes);
    });
  }

  toggleTeamStandings() {
    this.showTeamStandings = !this.showTeamStandings;
  }
}

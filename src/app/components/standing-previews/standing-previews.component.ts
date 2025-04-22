import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, model, ViewChild } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import {
  DataServiceService,
  Route,
  Team,
  User,
} from '../../services/data-service.service';
import { TeamsPreviewCardComponent } from '../teams-preview-card/teams-preview-card.component';
import { UserPreviewCardComponent } from '../user-preview-card/user-preview-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-standing-previews',
  imports: [
    CommonModule,
    TeamsPreviewCardComponent,
    UserPreviewCardComponent,
    NgxSplideModule,
    RouterLink,
  ],
  templateUrl: './standing-previews.component.html',
  styleUrl: './standing-previews.component.css',
})
export class StandingPreviewsComponent {
  isVisible = false;
  showAlert = false;
  users = model<User[]>([]);
  teams = model<Team[]>([]);
  routes = model<Route[]>([]);

  dataService = inject(DataServiceService);

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users.set([...users].sort((a, b) => b.points - a.points));
      console.log(users);
    });

    this.dataService.getTeams().subscribe((teams) => {
      this.teams.set([...teams].sort((a, b) => b.points - a.points));
      console.log(teams);
    });

    this.dataService.getRoutes().subscribe((routes) => {
      this.routes.set(routes);
    });
  }

  private teamCache = new Map<number, Team>();

  getTeam(teamId: number): Team | undefined {
    if (!this.teamCache.has(teamId)) {
      const team = this.teams().find((team) => team.id === teamId);
      if (team) {
        this.teamCache.set(teamId, team);
      }
    }
    return this.teamCache.get(teamId);
  }
}

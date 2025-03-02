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

@Component({
  selector: 'app-standing-previews',
  standalone: true,
  imports: [
    CommonModule,
    TeamsPreviewCardComponent,
    UserPreviewCardComponent,
    NgxSplideModule,
  ],
  templateUrl: './standing-previews.component.html',
  styleUrl: './standing-previews.component.css',
})
export class StandingPreviewsComponent {
  isVisible = false;
  @ViewChild('whoWeAre', { static: true }) whoWeAreSection!: ElementRef;

  users = model<User[]>([]);
  teams = model<Team[]>([]);
  routes = model<Route[]>([]);

  dataService = inject(DataServiceService);

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.whoWeAreSection.nativeElement);

    this.dataService.getUsers().subscribe((users) => {
      this.users.set(users);
      console.log(users);
    });

    this.dataService.getTeams().subscribe((teams) => {
      this.teams.set(teams);
      console.log(teams);
    });

    this.dataService.getRoutes().subscribe((routes) => {
      this.routes.set(routes);
    });
  }
}

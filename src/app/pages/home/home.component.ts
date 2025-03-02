import { Component } from '@angular/core';
import { UserStandingComponent } from '../../components/user-standing/user-standing.component';
import { TitleComponent } from '../../components/title/title.component';
import { TeamsStandingComponent } from '../../components/teams-standing/teams-standing.component';
import { StandingPreviewsComponent } from '../../components/standing-previews/standing-previews.component';
import { HomeImageComponent } from '../../components/home-image/home-image.component';
import { CompetitionSectionComponent } from '../../components/competition-section/competition-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserStandingComponent,
    TitleComponent,
    TeamsStandingComponent,
    StandingPreviewsComponent,
    HomeImageComponent,
    CompetitionSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

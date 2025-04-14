import { Component } from '@angular/core';
import { CompetitionSectionComponent } from '../../components/competition-section/competition-section.component';
import { HomeImageComponent } from '../../components/home-image/home-image.component';
import { StandingPreviewsComponent } from '../../components/standing-previews/standing-previews.component';
import { TimeToStartComponent } from '../../components/time-to-start/time-to-start.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    StandingPreviewsComponent,
    HomeImageComponent,
    CompetitionSectionComponent,
    TimeToStartComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

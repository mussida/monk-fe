import { Component } from '@angular/core';
import { CompetitionSectionComponent } from '../../components/competition-section/competition-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeImageComponent } from '../../components/home-image/home-image.component';
import { StandingPreviewsComponent } from '../../components/standing-previews/standing-previews.component';

@Component({
  selector: 'app-home',
  imports: [
    StandingPreviewsComponent,
    HomeImageComponent,
    CompetitionSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

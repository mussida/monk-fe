import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { RulesComponent } from './pages/rules/rules.component';
import { StandingsComponent } from './pages/standings/standings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'teams', component: TeamsComponent },
];

import { Component, inject, model, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import {
  DataServiceService,
  Team,
  User,
  Route,
} from './services/data-service.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, MenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'monk-fe';

  users = model<User[]>([]);
  teams = model<Team[]>([]);
  routes = model<Route[]>([]);

  isMenuActive = model<boolean>(false);

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

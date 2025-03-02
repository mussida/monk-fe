import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Team {
  id: number;
  name: string;
  color: string;
  imageUrl: string;
  points: number;
}

export interface Route {
  id: number;
  grade: string;
  color: string;
  points: number;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  teamId: number;
  points: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('assets/data/users.json');
  }

  getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>('assets/data/teams.json');
  }

  getRoutes(): Observable<Route[]> {
    return this.httpClient.get<Route[]>('assets/data/routes.json');
  }
}

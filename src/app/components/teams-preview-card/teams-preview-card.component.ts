import { Component, input } from '@angular/core';
import { Team, User } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-teams-preview-card',
    imports: [CommonModule],
    templateUrl: './teams-preview-card.component.html',
    styleUrl: './teams-preview-card.component.css'
})
export class TeamsPreviewCardComponent {
  team = input<Team>();
  position = input<number>();
  showTeam = false;

  users: User[] = [
    {
      id: 1,
      name: 'Luca',
      surname: 'Rossi',
      age: 25,
      imageUrl:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
      teamId: 1,
      points: 1200,
    },
    {
      id: 2,
      name: 'Mario',
      surname: 'Bianchi',
      age: 30,
      imageUrl:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
      teamId: 1,
      points: 1100,
    },
    {
      id: 3,
      name: 'Giuseppe',
      surname: 'Verdi',
      age: 20,
      imageUrl:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
      teamId: 2,
      points: 1000,
    },
    {
      id: 4,
      name: 'Giovanni',
      surname: 'Rossi',
      age: 25,
      imageUrl:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
      teamId: 2,
      points: 900,
    },
  ];

  toggleShowTeam() {
    this.showTeam = !this.showTeam;
  }
}

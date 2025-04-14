import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-rules',
  imports: [FooterComponent],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css',
})
export class RulesComponent {
  routesPoints = [
    {
      grade: '5A',
      points: 10,
    },
    {
      grade: '5B',
      points: 25,
    },
    {
      grade: '5C',
      points: 40,
    },
    {
      grade: '6A',
      points: 60,
    },
    {
      grade: '6A+',
      points: 75,
    },
    {
      grade: '6B',
      points: 90,
    },
    {
      grade: '6B+',
      points: 105,
    },
    {
      grade: '6C',
      points: 120,
    },
    {
      grade: '6C+',
      points: 135,
    },
    {
      grade: '7A',
      points: 160,
    },
    {
      grade: '7A+',
      points: 185,
    },
    {
      grade: '7B',
      points: 200,
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-competition-section',
  imports: [CommonModule, RouterLink],
  templateUrl: './competition-section.component.html',
  styleUrl: './competition-section.component.css',
})
export class CompetitionSectionComponent {
  isVisible = false;
}

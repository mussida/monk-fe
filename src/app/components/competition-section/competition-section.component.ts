import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-competition-section',
    imports: [CommonModule],
    templateUrl: './competition-section.component.html',
    styleUrl: './competition-section.component.css'
})
export class CompetitionSectionComponent {
  isVisible = false;
  @ViewChild('whoWeAre', { static: true }) whoWeAreSection!: ElementRef;

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
  }
}

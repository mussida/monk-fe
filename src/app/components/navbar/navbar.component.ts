import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TimeToStartComponent } from '../time-to-start/time-to-start.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive, TimeToStartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  burgerMenuActive = false;
  isMenuActive = model<boolean>(false);

  toggleMenu() {
    this.isMenuActive.set(!this.isMenuActive());
    console.log('isMenuActive', this.isMenuActive());
    if (this.isMenuActive()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

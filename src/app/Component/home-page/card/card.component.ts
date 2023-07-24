import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  isResponsiveMenuOpen: boolean = false;

  toggleResponsiveMenu(): void {
    this.isResponsiveMenuOpen = !this.isResponsiveMenuOpen;
  }

}

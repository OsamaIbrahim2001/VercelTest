import { Component } from '@angular/core';
import { ScrollService } from '../Shared/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private scrollService: ScrollService){}
  scrollTo(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }
}

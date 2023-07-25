import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/Shared/scroll.service';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnDestroy{

  @ViewChild('contact') contactElement!: ElementRef;
  @ViewChild('equipment') equipmentElement!: ElementRef;
  @ViewChild('projects') worksElement!: ElementRef;
  @ViewChild('about') aboutElement!: ElementRef;

  private subscription: Subscription;

  constructor(private scrollService: ScrollService) {
    this.subscription = this.scrollService.scrollComponent$.subscribe((componentId: string) => {
      this.scrollToComponent(componentId);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  scrollToComponent(componentId: string) {
    let targetElement: HTMLElement | undefined;

    // Find the target element based on the provided identifier
    switch (componentId) {
      case 'contact':
        targetElement = this.contactElement.nativeElement;
        break;
      case 'equipment':
        targetElement = this.equipmentElement.nativeElement;
        break;
      case 'works':
        targetElement = this.worksElement.nativeElement;
        break;
      case 'about':
        targetElement = this.aboutElement.nativeElement;
        break;
      default:
        break;
    }

    // Scroll to the target element if found
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}



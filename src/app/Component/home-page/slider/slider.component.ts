import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms ease-in-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  slides = [
    { image: '../../../../assets/Images/2.jpg', alt: 'First slide' },
    { image: '../../../../assets/Images/1.jpg', alt: 'Second slide' },
    { image: '../../../../assets/Images/2.jpg', alt: 'Third slide' },
    { image: '../../../../assets/Images/1.jpg', alt: 'Third slide' }
    // Add more slides as needed with their respective image paths and alt text
  ];

  currentSlideIndex = 0;
  selectedImage='';

  ngOnInit() {
    this.selectedImage=this.slides[this.currentSlideIndex].image;
    this.startImageSlider();
  }


  startImageSlider() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  showSlide(index: number) {
    this.currentSlideIndex = index;
    // this.hideAllSlides();
  }



  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.selectedImage=this.slides[this.currentSlideIndex].image;
    // this.showSlide(this.currentSlideIndex);
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;

    this.selectedImage=this.slides[this.currentSlideIndex].image;
    console.log(this.selectedImage);

    // this.showSlide(this.currentSlideIndex);
  }
}

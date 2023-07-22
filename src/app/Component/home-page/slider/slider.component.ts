import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides = [
    { image: '../../../../assets/Images/2.jpg' },
    { image: '../../../../assets/Images/2.jpg' },
    { image: '../../../../assets/Images/2.jpg' }
    // Add more slides as needed with their respective image paths
  ];

  currentSlideIndex = 0;

  ngOnInit() {
    this.showSlide(this.currentSlideIndex);
  }

  showSlide(index: number) {
    this.currentSlideIndex = index;
  }

  nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.slides.length;
    this.showSlide(this.currentSlideIndex);
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentSlideIndex);
  }

}

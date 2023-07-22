import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
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
  }

  showSlide(index: number) {
    this.currentSlideIndex = index;
    // this.hideAllSlides();
  }

  hideAllSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.opacity = '0';
      slide.style.visibility = 'hidden';
    }

    const activeSlide = slides[this.currentSlideIndex] as HTMLElement;
    activeSlide.style.opacity = '1';
    activeSlide.style.visibility = 'visible';
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

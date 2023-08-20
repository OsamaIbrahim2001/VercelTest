import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/Models/slider';
import { SliderService } from 'src/app/Services/Slider/slider.service';

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
slider:Slider={
  id:0,
  imagesFile:[],
  images:'',
  text:''
}
constructor(private services:SliderService){}
slides:any[] = [];
  currentSlideIndex = 0;
  selectedImage='';

  ngOnInit() {
    this.getSlider();
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
    this.selectedImage=this.slides[this.currentSlideIndex];
    // this.showSlide(this.currentSlideIndex);
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;

    this.selectedImage=this.slides[this.currentSlideIndex];
    console.log(this.selectedImage);

    // this.showSlide(this.currentSlideIndex);
  }


  getSlider (){
    this.services.getSliderImage().subscribe({
      next:(value)=>{
        this.slider=value;
        this.slides=this.slider.images.split(",");
        this.selectedImage=this.slides[this.currentSlideIndex];
        console.log("Selected ==== ",this.selectedImage);

      }
    })
}
}

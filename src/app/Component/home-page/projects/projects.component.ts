import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
export class ProjectsComponent implements OnInit {

  projects = [
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      coverImage:'../../../../assets/Images/1.jpg',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
    images:['../../../../assets/Images/1.jpg','../../../../assets/Images/2.jpg','../../../../assets/Images/3.jpg','../../../../assets/Images/4.jpg','../../../../assets/Images/5.jpg']
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
      coverImage:'../../../../assets/Images/6.jpg',
      images:['../../../../assets/Images/6.jpg','../../../../assets/Images/7.jpg','../../../../assets/Images/8.jpg','../../../../assets/Images/9.jpg','../../../../assets/Images/10.jpg']
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
      coverImage:'../../../../assets/Images/11.jpg',
      images:['../../../../assets/Images/11.jpg','../../../../assets/Images/12.jpg','../../../../assets/Images/13.jpg','../../../../assets/Images/14.jpg','../../../../assets/Images/15.jpg']
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
      coverImage:'../../../../assets/Images/16.jpg',
      images:['../../../../assets/Images/16.jpg','../../../../assets/Images/17.jpg','../../../../assets/Images/18.jpg','../../../../assets/Images/19.jpg','../../../../assets/Images/20.jpg']
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
      coverImage:'../../../../assets/Images/21.jpg',
      images:['../../../../assets/Images/21.jpg','../../../../assets/Images/22.jpg','../../../../assets/Images/23.jpg','../../../../assets/Images/14.jpg','../../../../assets/Images/5.jpg']
    },
    // Add more projects as needed
  ];

  ngOnInit(): void {
    this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

    this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
    console.log("ButtonToArray",this.buttonArray);
  }

  selectedImage:number=0;
  totalCount: number = 11;
  pageNumber: number = 1;
  pageSize: number = 4;
  pageElement=0;
  buttonArray:number[]=[];

  originalImageSrc: string | undefined;


  resetImage(index:number) {
    this.projects[index].coverImage=this.projects[index].images[0];
    this.clearInterval();
  }


  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
    }
  }

  nextPage() {
    if (this.pageNumber * this.pageSize < this.totalCount) {
      this.pageNumber++;
    }
  }

  setPage(pnumber:number){
    this.pageNumber=pnumber;
  }

  prevTouchID=-1;
  currentIndex:number=0;
  intervalId:any;

  changeImage(index:number) {
    this.currentIndex=1;
    if(this.prevTouchID>=0){
        this.projects[this.prevTouchID].coverImage=this.projects[this.prevTouchID].images[0];
    }
    const images:string[]=this.projects[index].images;
    this.clearInterval();
   this.intervalId= setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % images.length;
      this.projects[index].coverImage=images[this.currentIndex];
    }, 2000);
  }


clearInterval(){
  if(this.intervalId){
    clearInterval(this.intervalId);
  }
}

  // nextSlide() {
  //   this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  //   this.selectedImage=this.slides[this.currentSlideIndex].image;
  //   // this.showSlide(this.currentSlideIndex);
  // }
}

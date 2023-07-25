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
      title: 'رصف طريق بجدة',
      coverImage:"../../../../assets/Images/رصف طريق/2.jpg",
      description:'رصف طريق بجدة رصف طريق بجدة',
     images:["../../../../assets/Images/رصف طريق/2.jpg",
     "../../../../assets/Images/رصف طريق/1.jpg",
     "../../../../assets/Images/رصف طريق/3.jpg",
     "../../../../assets/Images/رصف طريق/4.jpg",
     "../../../../assets/Images/رصف طريق/5.jpg"]
    },
    {
      id: 1,
      title: 'تشطيب شقة بالرياض',
      description: 'تشطيب شقة بالرياضتشطيب شقة بالرياض تشطيب شقة بالرياض',
      coverImage:"../../../../assets/Images/تشطيبات/2.jpg",
      images:["../../../../assets/Images/تشطيبات/2.jpg",
      "../../../../assets/Images/تشطيبات/1.jpg",
      "../../../../assets/Images/تشطيبات/3.jpg",
      "../../../../assets/Images/تشطيبات/4.jpg",
      "../../../../assets/Images/تشطيبات/5.jpg",
      ]
    },
    {
      id: 1,
      title: 'إنشاء برج بالرياض',
      description: 'إنشاء برج بالرياض إنشاء برج بالرياض إنشاء برج بالرياض',
      coverImage:"../../../../assets/Images/إنشاء مباني/2.jpg",
      images:["../../../../assets/Images/إنشاء مباني/2.jpg",
      "../../../../assets/Images/إنشاء مباني/1.jpg",
      "../../../../assets/Images/إنشاء مباني/3.jpg",
      "../../../../assets/Images/إنشاء مباني/4.jpg",
      "../../../../assets/Images/إنشاء مباني/5.jpg"]
    },
    {
      id: 1,
      title: 'إزالة الدهانات الخان',
      description: 'إزالة الدهانات الخان إزالة الدهانات الخان إزالة الدهانات الخان',
      coverImage:'../../../../assets/Images/ازالة الدهانات/2.jpg',
      images:['../../../../assets/Images/ازالة الدهانات/2.jpg',
      '../../../../assets/Images/ازالة الدهانات/1.jpg',
      '../../../../assets/Images/ازالة الدهانات/3.jpg',
      '../../../../assets/Images/ازالة الدهانات/4.jpg',
      '../../../../assets/Images/ازالة الدهانات/5.jpg']
    },
    {
      id: 1,
      title: 'قص خرسانة',
      description: 'قص خرسانة قص خرسانة قص خرسانة قص خرسانة',
      coverImage:"../../../../assets/Images/قص خرسانة/2.jpg",
      images:["../../../../assets/Images/قص خرسانة/2.jpg",
      "../../../../assets/Images/قص خرسانة/1.jpg",
      "../../../../assets/Images/قص خرسانة/3.jpg",
      "../../../../assets/Images/قص خرسانة/4.jpg",
      "../../../../assets/Images/قص خرسانة/5.jpg"
    ]
    },
    {
      id: 1,
      title: 'إزالة الصبغ',
      description: 'إزالة الصبغ إزالة الصبغ إزالة الصبغ',
      coverImage:"../../../../assets/Images/إزالة الصبغ/2.jpg",
      images:["../../../../assets/Images/إزالة الصبغ/2.jpg",
      "../../../../assets/Images/إزالة الصبغ/1.jpg",
      "../../../../assets/Images/إزالة الصبغ/3.jpg",
      "../../../../assets/Images/إزالة الصبغ/4.jpg",
      "../../../../assets/Images/إزالة الصبغ/5.jpg"]
    },
  ];

  ngOnInit(): void {
    this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

    this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
    console.log("ButtonToArray",this.buttonArray);
  }

  selectedImage:number=0;
  totalCount: number = 11;
  pageNumber: number = 1;
  pageSize: number = 5;
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
    this.prevTouchID=index;
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

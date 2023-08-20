import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Workes } from 'src/app/Models/workes';
import { ProjectsService } from 'src/app/Services/Projects/projects.service';

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

  projects:Workes[] = [];

  constructor(private services:ProjectsService){}
  ngOnInit(): void {
    this.getProjects();
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

getProjects(){
  this.services.getProjects(this.pageNumber,this.pageSize).subscribe({
    next:(value)=> {
      this.projects=value.data;
      console.log("Projects==========>>>>> ",this.projects);

      this.totalCount=value.totalCount;
      this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);
      this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
    },
  });
}
}

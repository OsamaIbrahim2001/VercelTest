import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/Models/about';
import { AboutService } from 'src/app/Services/About/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

about:About[]=[];

totalCount: number = 6;
pageNumber: number = 1;
pageSize: number = 6;
pageElement=0;
buttonArray:number[]=[];

ngOnInit(): void {

  this.getAbout();
  this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

  this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
  console.log("ButtonToArray",this.buttonArray);
}

constructor(private services:AboutService){}
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

getAbout(){
  this.services.getProjects(this.pageNumber,this.pageSize).subscribe({
    next:(value)=> {
      this.about=value.data;
      this.totalCount=value.totalCount;
      this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);
      this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
    },
  });
}
}

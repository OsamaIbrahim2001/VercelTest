import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  this.getAbout(this.pageNumber);
  this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

  this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
  console.log("ButtonToArray",this.buttonArray);
}

constructor(private services:AboutService,private router:Router){}
async previousPage() {
  if (this.pageNumber > 1) {
   await this.getAbout(this.pageNumber-1);
    this.pageNumber--;
  }
}

 async nextPage() {
  if (this.pageNumber * this.pageSize < this.totalCount) {
   await this.getAbout(this.pageNumber+1);
    this.pageNumber++;
  }
}

async setPage(pnumber:number){
await this.getAbout(pnumber);
this.pageNumber=pnumber;
}
descMob:string[]=[];
async getAbout(pNumber:number){
  this.services.getProjects(pNumber,this.pageSize).subscribe({
    next:(value)=> {
      this.about=value.data;
      for (let index = 0; index < this.about.length; index++) {
this.descMob[index]=this.about[index].description.length<=126?this.about[index].description:this.about[index].description.substring(0,126)+" ..."
      }
      this.totalCount=value.totalCount;
      this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);
      this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
    },
  });
}

detail(id:number,name:string){
  const encodedId = btoa(id.toString()); // Encode the number
  this.router.navigate(['/aboutDetails', name, encodedId]);
}
}

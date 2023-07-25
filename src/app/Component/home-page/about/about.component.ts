import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructionItems:any[]=
 [
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
  {
    name:'الانشاءات الخرسانية',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  },
]

totalCount: number = 11;
pageNumber: number = 1;
pageSize: number = 4;
pageElement=0;
buttonArray:number[]=[];

ngOnInit(): void {
  this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

  this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
  console.log("ButtonToArray",this.buttonArray);
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
}

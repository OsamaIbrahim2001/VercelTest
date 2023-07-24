import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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
]

totalCount: number = 11;
pageNumber: number = 1;
pageSize: number = 4;
pageElement=0;
buttonArray:number[]=[];
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

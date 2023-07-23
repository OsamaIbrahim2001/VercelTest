import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  projects = [
    // {
    //   id: 1,
    //   title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
    //   description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
    // },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
    },
    {
      id: 1,
      title: 'تطوير مركز فيرجينيا جامعة الاسكندرية',
      description: 'تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية تطوير مركز فيرجينيا جامعة الاسكندرية',
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

  changeImage(sImage:number){
    this.selectedImage=sImage;
    console.log("Image ==>> ",this.selectedImage++);
    console.log("Image ==>> ",this.selectedImage++);
    console.log("Image ==>> ",this.selectedImage++);
  }

  resetImage(num:number){
    this.selectedImage=0;
    console.log("Image ==>> ",this.selectedImage);
    console.log("Image ==>> ",num);
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

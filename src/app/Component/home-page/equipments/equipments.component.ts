import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/equipments';
import { EquipmentsService } from 'src/app/Services/Equipments/equipments.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  category:Category[]=[];

  constructor(private services:EquipmentsService){}

  ngOnInit(): void {
    this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

    this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
    console.log("ButtonToArray",this.buttonArray);

    this.getCategories();
  }


  getCategories(){
    this.services.getCategory(this.pageNumber,this.pageSize).subscribe({
      next:(value)=> {
        this.category=value.data;

        this.totalCount=value.totalCount;
        this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);
        this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
      },
    });
}

  totalCount: number = 11;
  pageNumber: number = 1;
  pageSize: number = 6;
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

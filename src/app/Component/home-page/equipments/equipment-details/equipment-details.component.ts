import { Component, OnInit } from '@angular/core';

interface Food {
  id:number;
  name:string;
  descripion:string;
  image:string;
  type:string;
  model:string;
}

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent{

  constructor(){
          this.changeSelection();
  }
  foods: Food[] = [
    {
      id:1,
      name:'منشار كهربائي',
      descripion:'منشار كهربائي منشار كهربائي منشار كهربائي منشار كهربائي',
      image:"../../../../../assets/Images/معدات/منشار/منشار كهربائي.jpg",
      model:'MN03',
      type:'منشار كهربائي'
    },
    {
      id:2,
      name:'منشار لحم',
      descripion:'منشار لحم منشار لحم منشار لحم منشار لحم منشار لحم',
      image:"../../../../../assets/Images/معدات/منشار/منشار لحم.png",
      model:'MN039',
      type:'منشار لحم'
    },
    {
      id:3,
      name:'منشار خشب ',
      descripion:'منشار خشب منشار خشب منشار خشب منشار خشب',
      image:"../../../../../assets/Images/معدات/منشار/منشار خشب.jpg",
      model:'MN015',
      type:'منشار خشب'
    },
    {
      id:4,
      name:'منشار خرسانة',
      descripion:'منشار خرسانة منشار خرسانة منشار خرسانة منشار خرسانة',
      image:"../../../../../assets/Images/معدات/منشار/منشار خرسانة.png",
      model:'MN04',
      type:'منشار خرسانة'
    },

  ];
  index: number=0;
equipment:Food={
  id:0,
  descripion:'',
  image:'',
  model:'',
  name:'',
  type:''
};
  changeSelection(){
    console.log("Index",this.index);

    this.equipment=this.foods[this.index];
  }


}

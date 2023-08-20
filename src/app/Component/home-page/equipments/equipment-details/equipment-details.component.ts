import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Equipments } from 'src/app/Models/equipments';
import { EquipmentsService } from 'src/app/Services/Equipments/equipments.service';


@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent {

  catID: any;
  index: number = 0;
  equipments: Equipments[] = [];
  category: Category = {
    id: 0,
    image: '',
    imageFile: null,
    name: ''
  }

  constructor(private services: EquipmentsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {

      this.catID = params.get('id');
      if (this.catID != 0) {
        this.services.getOneCategory(this.catID).subscribe({
          next: (value) => {
            this.category = value;
            this.getEquipments(this.catID);
          },
        });

      }
    });
  }


  // changeSelection(){
  //   console.log("Index",this.index);

  //   // this.equipment=this.foods[this.index];
  // }

  changeSelection() {
    // this.getEquipments(this.category[this.index].id);
  }

  // getCategories() {
  //   this.services.getAllCatEquipments().subscribe({
  //     next: (value) => {
  //       this.category = value;
  //     },
  //   });
  // }

  getEquipments(id: number) {
    this.services.getAllEquipmentsByCat(id).subscribe({
      next: (value) => {
        this.equipments = value;
      },
    });
  }

}

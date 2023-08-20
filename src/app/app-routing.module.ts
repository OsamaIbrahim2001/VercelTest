import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { EquipmentDetailsComponent } from './Component/home-page/equipments/equipment-details/equipment-details.component';

const routes: Routes = [
  {path : '' , redirectTo:'/homepage', pathMatch:'full'},
  {path : 'equipmentDetails/:id',component:EquipmentDetailsComponent},
  {path : '**' , component : HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

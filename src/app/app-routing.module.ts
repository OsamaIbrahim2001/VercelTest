import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { EquipmentDetailsComponent } from './Component/home-page/equipments/equipment-details/equipment-details.component';
import { AboutDetailsComponent } from './Component/home-page/about/about-details/about-details.component';
import { ProjectsComponent } from './Component/home-page/projects/projects.component';
import { ProjectDetailsComponent } from './Component/home-page/projects/project-details/project-details.component';


const routes: Routes = [
   {path : '' , redirectTo:'/homepage', pathMatch:'full'},
  {path : 'equipmentDetails/:id',component:EquipmentDetailsComponent},
  {path : 'aboutDetails/:name/:id',component:AboutDetailsComponent},
  {path : 'projectDetails/:id',component:ProjectDetailsComponent},
  {path : '**' , component : HomePageComponent},
];
const config:ExtraOptions={
  useHash:true
}

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

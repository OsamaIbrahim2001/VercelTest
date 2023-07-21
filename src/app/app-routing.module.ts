import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';

const routes: Routes = [
  {path : '' , redirectTo:'/homepage', pathMatch:'full'},
  {path : '**' , component : HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

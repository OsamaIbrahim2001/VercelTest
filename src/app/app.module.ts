import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { APP_BASE_HREF, CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './Component/home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { FormsModule } from '@angular/forms';



import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { ToastrModule } from 'ngx-toastr';
import { DatetimeFormatPipe } from './Pipes/datetime-format.pipe';
import { SliderComponent } from './Component/home-page/slider/slider.component';
import { AboutComponent } from './Component/home-page/about/about.component';
import { ProjectsComponent } from './Component/home-page/projects/projects.component';
import { EquipmentsComponent } from './Component/home-page/equipments/equipments.component';
import { EquipmentDetailsComponent } from './Component/home-page/equipments/equipment-details/equipment-details.component';
import { ContactComponent } from './Component/home-page/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './Component/home-page/card/card.component';
import { AboutDetailsComponent } from './Component/home-page/about/about-details/about-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProjectDetailsComponent } from './Component/home-page/projects/project-details/project-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DatetimeFormatPipe,
    SliderComponent,
    AboutComponent,
    ProjectsComponent,
    EquipmentsComponent,
    EquipmentDetailsComponent,
    ContactComponent,
    FooterComponent,
    CardComponent,
    AboutDetailsComponent,
    ProjectDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    CommonModule,
     // ToastrModule added
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:'/'},
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

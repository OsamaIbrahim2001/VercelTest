import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './Component/home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';



import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { ToastrModule } from 'ngx-toastr';
import { DatetimeFormatPipe } from './Pipes/datetime-format.pipe';
import { SliderComponent } from './Component/home-page/slider/slider.component';
import { AboutComponent } from './Component/home-page/about/about.component';
import { ProjectsComponent } from './Component/home-page/projects/projects.component';
import { EquipmentsComponent } from './Component/home-page/equipments/equipments.component';
import { EquipmentDetailsComponent } from './Component/home-page/equipments/equipment-details/equipment-details.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';






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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    CommonModule,
    ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-top-full-width',
        preventDuplicates: true,
      }),
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
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

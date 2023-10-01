import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/Models/slider';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  baseUrl:string=environment.url+"Slider/";
  constructor(private http:HttpClient) { }


  getSliderImage():Observable<Slider>{
    return this.http.get<Slider>(this.baseUrl+"getSliderImages");
  }
  }

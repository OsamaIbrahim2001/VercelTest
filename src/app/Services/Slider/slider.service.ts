import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/Models/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  baseUrl:string="http://localhost:5219/api/Slider/";
  constructor(private http:HttpClient) { }


  getSliderImage():Observable<Slider>{
    return this.http.get<Slider>(this.baseUrl+"getSliderImages");
  }
  }

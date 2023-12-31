import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workes } from 'src/app/Models/workes';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl:string=environment.url+"Work/";
  constructor(private http:HttpClient) { }

  getProjects(pageNumber: number, pageSize: number):Observable<any>{
    const params = new HttpParams()
    .set('pageNumber', pageNumber.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get(this.baseUrl+"getWork",{params});
  }

  getOneWork(id:number):Observable<Workes>{
    return this.http.get<Workes>(this.baseUrl+"getOneWork/"+id)
  }
}

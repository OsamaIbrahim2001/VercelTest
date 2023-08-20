import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from 'src/app/Models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  baseUrl:string="https://localhost:5001/api/About/";
  constructor(private http:HttpClient) { }

  addProject(project:any){
    return this.http.post(this.baseUrl+"addProject",project);
  }

  getProjects(pageNumber: number, pageSize: number):Observable<any>{
    const params = new HttpParams()
    .set('pageNumber', pageNumber.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get<About[]>(this.baseUrl+"getProjects",{params});
  }

  getProject(id:number){
    return this.http.get<About>(this.baseUrl+"getUpdateProject/"+id);
  }

}

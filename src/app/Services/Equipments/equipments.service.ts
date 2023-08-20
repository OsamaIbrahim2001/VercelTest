import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  baseUrl: string = "http://localhost:5219/api/EquipmentCategory/";
  baseUrlDetail: string = "http://localhost:5219/api/EquipmentDetails/";

  constructor(private http: HttpClient) {
  }
  getCategory(pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get(this.baseUrl + "getAllEquipments");
  }

  getOneCategory(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "getOneEquipment/" + id);
  }

  getAllCatEquipments(): Observable<any> {
    return this.http.get(this.baseUrl + "getAllCatEquipments");
  }

  getAllEquipmentsByCat(id: number): Observable<any> {
    return this.http.get(this.baseUrlDetail + "getByCatIDEquipment/" + id);
  }

  getOneEquipment(id: number): Observable<any> {
    return this.http.get(this.baseUrlDetail + "getEquipment/" + id);
  }
}

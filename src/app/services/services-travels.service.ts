import { Injectable } from '@angular/core';
import { ServicesTravels, ServicesTravelsRequestBody } from '../models/service-travel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesTravelsService {

  constructor(private http: HttpClient) { }

  createServicesTravels(data: ServicesTravelsRequestBody): Observable<any> { 
    const url = 'http://localhost:3000/viaje/service-travel';
    return this.http.post(url, data);
  }

  getServicesTravels(): Observable<ServicesTravels[]> {
    return this.http.get<ServicesTravels[]>(`http://localhost:3000/viaje/service-travel`);
  }

  deleteServicesTravels(serviceTravelID: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/viaje/service-travel/${serviceTravelID}`);
  }
}

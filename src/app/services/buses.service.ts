import { Injectable } from '@angular/core';
import { Buses, BusesRequestBody } from '../models/buses';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor(private http: HttpClient) { }

  createBuses(data: BusesRequestBody): Observable<any> { 
    const url = 'http://localhost:3000/viaje/buses';
    return this.http.post(url, data);
  }

  getBuses(): Observable<Buses[]> {
    return this.http.get<Buses[]>(`http://localhost:3000/transportes`);
  }

  deleteBuses(busesID: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/delete-transporte/${busesID}`);
  }

  getBus(busID: string): Observable<Buses> {
    return this.http.get<Buses>(`http://localhost:3000/transporte/${busID}`);
  }

  updateBus(busID: string, data: any): Observable<Buses> {
    return this.http.patch<Buses>(`http://localhost:3000/update-transporte/${busID}`,data);
  }
}

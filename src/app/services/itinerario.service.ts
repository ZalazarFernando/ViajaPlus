import { Injectable } from '@angular/core';
import { Itinerario, ItinerarioRequestBody } from '../models/itinerario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  constructor(private http: HttpClient) { }

  createReserva(data: ItinerarioRequestBody): Observable<any> { 
    const url = 'http://localhost:3000/viaje/itinerario';
    return this.http.post(url, data);
  }

  getReservas(): Observable<Itinerario[]> {
    return this.http.get<Itinerario[]>(`http://localhost:3000/viaje/itinerario`);
  }
}

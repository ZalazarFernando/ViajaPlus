import { Injectable } from '@angular/core';
import { Itinerario, ItinerarioRequestBody } from '../models/itinerario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  constructor(private http: HttpClient) { }

  // createReserva(data: ItinerarioRequestBody): Observable<any> { 
  //   const url = 'http://localhost:3000/viaje/reserva';
  //   return this.http.post(url, data);
  // }

  getItinerarios(): Observable<Itinerario[]> {
    return this.http.get<Itinerario[]>(`http://localhost:3000/itinerarios`);
  }

  deleteItinerario(itinerarioID: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/delete-itinerarios/${itinerarioID}`);
  }

}

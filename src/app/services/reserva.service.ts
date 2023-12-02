import { Injectable } from '@angular/core';
import { ReservaRequestBody } from '../models/reserva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  createReserva(data: ReservaRequestBody): Observable<any> { 
    const url = 'http://localhost:3000/viaje/reserva';
    return this.http.post(url, data);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';
import { Asiento } from '../models/asiento';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private http: HttpClient) { }

  getOpciones(origin: number, destination: number, date: string): Observable<Respuesta> {
    return this.http.get<Respuesta>(`http://localhost:3000/viaje/opciones?origin=${origin}&destination=${destination}&date=${date}`);
  }

  getAsientos(serviceID: number): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(`http://localhost:3000/viaje/asientos/${serviceID}`);
}
}
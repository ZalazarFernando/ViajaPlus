import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private http: HttpClient) { }

  getOpciones(origin: number, destination: number, date: string): Observable<Respuesta> {
    return this.http.get<Respuesta>(`http://localhost:3000/viaje/opciones?origin=${origin}&destination=${destination}&date=${date}`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getItinerarios(opciones: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/viaje/${opciones}`);
  }
}

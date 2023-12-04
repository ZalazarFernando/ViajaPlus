import { Time } from "@angular/common";

export interface ItinerarioRequestBody {
    horaPartida: Time;
    horaLlegada: Time;
    origen: number;
    destino: number;
    IDTramoOrigen: number;
    IDTramoDestino: number;
  }

  export interface Itinerario {
    horaPartida: Time;
    horaLlegada: Time;
    CiudadOrigen: string;
    CiudadDestino: string;
    IDCiudadOrigen: number;
    IDCiudadDestino: number;
}
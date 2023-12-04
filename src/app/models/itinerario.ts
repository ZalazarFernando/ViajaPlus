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
	IDItinerario: number;
	Distancia: number;
	IDServicio: number;
	Disponibilidad: boolean;
	FechaPartida: string;
	FechaLlegada: string;
	IDTramoOrigen: string;
	IDTramoDestino: string;
	NombreOrigen: string;
	NombreDestino: string;
	CostoServicio: number;
	IDTransporte: number;
	CalidadServicio: string;
}
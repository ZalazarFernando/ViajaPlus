import { Time } from "@angular/common";

export interface ServicesTravelsRequestBody {
    ID: number;
    calidad: string;
    disponibilidad: boolean;
    fechaPartida: Date;
    fechaLlegada: Date;
    horaPartida: Time;
    horaLlegada: Time;
    costo: number;
  }

  export interface ServicesTravels {
    ID: number;
    calidad: string;
    disponibilidad: boolean;
    fechaPartida: Date;
    fechaLlegada: Date;
    horaPartida: Time;
    horaLlegada: Time;
    costo: number;
}
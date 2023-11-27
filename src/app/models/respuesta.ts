import { Itinerario } from "./Itinerario";
import { Tramo } from "./tramo";

export interface Respuesta {
    itinerarios: Itinerario[];
    tramos: Tramo[];
  }
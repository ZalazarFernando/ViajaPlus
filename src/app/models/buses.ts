export interface BusesRequestBody {
    nroUnidad: number;
    tipoAtencion: string;
    categoria: string;
    pisos: number;
    situacion: string;
    costo: number;
  }

  export interface Buses {
    nroUnidad: number;
    tipoAtencion: string;
    categoria: string;
    pisos: number;
    situacion: string;
    costo: number;
}
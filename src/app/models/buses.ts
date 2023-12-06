export interface BusesRequestBody {
    nroUnidad: number;
    tipoAtencion: string;
    categoria: string;
    pisos: number;
    situacion: string;
    costo: number;
  }

export interface Buses {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  NroUnidad: number;
  Pisos: number;
  Situacion: boolean;
  CostoTransporte: string;
  Categoria: string;
  TipoAtencion: string;
}
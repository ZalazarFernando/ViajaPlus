export interface Itinerario {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    Disponibilidad: boolean;
    FechaPartida: string;
    FechaLlegada: string;
    CostoServicio: number;
  }
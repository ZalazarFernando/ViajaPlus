export interface ReservaRequestBody {
    nombre: string;
    apellido: string;
    dni: string;
    service: number;
    transporte: number;
    asiento: number;
    origen: number;
    destino: number;
    IDTramoOrigen: number;
    IDTramoDestino: number;
    Costo: number;
  }
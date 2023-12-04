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

  export interface Reserva {
    ID: number;
    Nombre: string;
    Apellido: string;
    DNI: string;
    Estado: string;
    Costo: number;
    ID_Asiento: number;
    ID_Transporte: number;
    CiudadOrigen: string;
    CiudadDestino: string;
    IDCiudadOrigen: number;
    IDCiudadDestino: number;
}
export interface Asiento {
    IDAsiento: number;
    Disponibilidad: boolean;
    Nro_Unidad: number;
    Pisos: number;
    Situacion: boolean;
    Costo_Transporte: number;
    Categoria: string;
    Tipo_Atencion: string;
}


export interface AsientoEstado {
    id: number;
    estado: 'disponible' | 'no-disponible' | 'seleccionado';
  }
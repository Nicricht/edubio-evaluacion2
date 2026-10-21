export interface Oferta {
  id: number;
  codigo: string;
  carrera: string;
  grupoComparacion: string;
  institucion: string;
  sede: string;
  area: string;
  modalidad: string;
  jornada: string;
  duracion: string;
  matricula: number;
  arancel: number;
  imagen: string;
  cupos: number;
  cupoCritico: number | null;
}

export type NuevaOferta = Omit<Oferta, "id">;

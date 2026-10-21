import { OFERTAS_BASE } from "@/data/ofertasBase";
import type { NuevaOferta, Oferta } from "@/types/oferta";

/**
 * Módulo independiente que simula la fuente de datos (CRUD en memoria).
 * Patrón: Repository/Service — la interfaz nunca accede a los datos directamente.
 */
let ofertas: Oferta[] = OFERTAS_BASE.map((o) => ({ ...o }));

export function reiniciarOfertas(): void {
  ofertas = OFERTAS_BASE.map((o) => ({ ...o }));
}

export function listarOfertas(): Oferta[] {
  return ofertas.map((o) => ({ ...o }));
}

export function obtenerOferta(id: number): Oferta | undefined {
  const oferta = ofertas.find((o) => o.id === id);
  return oferta ? { ...oferta } : undefined;
}

export function crearOferta(datos: NuevaOferta): Oferta {
  const id = ofertas.reduce((max, o) => Math.max(max, o.id), 0) + 1;
  const nueva: Oferta = { ...datos, id };
  ofertas = [...ofertas, nueva];
  return { ...nueva };
}

export function actualizarOferta(id: number, cambios: Partial<NuevaOferta>): Oferta | undefined {
  let actualizada: Oferta | undefined;
  ofertas = ofertas.map((o) => {
    if (o.id !== id) return o;
    actualizada = { ...o, ...cambios, id };
    return actualizada;
  });
  return actualizada ? { ...actualizada } : undefined;
}

export function eliminarOferta(id: number): boolean {
  const largo = ofertas.length;
  ofertas = ofertas.filter((o) => o.id !== id);
  return ofertas.length < largo;
}

/** Primera oferta de cada grupo indicado (usado por la página principal). */
export function obtenerDestacadas(grupos: string[]): Oferta[] {
  return grupos
    .map((g) => ofertas.find((o) => o.grupoComparacion === g))
    .filter((o): o is Oferta => Boolean(o))
    .map((o) => ({ ...o }));
}

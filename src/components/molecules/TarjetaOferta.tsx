import type { Oferta } from "@/types/oferta";
import { formatearPrecio } from "@/utils/formato";
import { Boton } from "@/components/atoms/Boton";
import { Etiqueta } from "@/components/atoms/Etiqueta";

interface TarjetaOfertaProps {
  oferta: Oferta;
}

export function TarjetaOferta({ oferta }: TarjetaOfertaProps) {
  return (
    <article className="card h-100 tarjeta-oferta">
      <img src={oferta.imagen} alt={oferta.carrera} className="card-img-top oferta-imagen" loading="lazy" />
      <div className="card-body d-flex flex-column">
        <div className="mb-3">
          <Etiqueta texto={oferta.grupoComparacion} />
        </div>
        <h3 className="h5 card-title fw-bold">{oferta.carrera}</h3>
        <p className="mb-1">{oferta.institucion}</p>
        <p className="mb-1">
          <strong>Sede:</strong> {oferta.sede}
        </p>
        <p className="mb-3">
          <strong>Arancel:</strong> {formatearPrecio(oferta.arancel)}
        </p>
        <div className="d-flex flex-wrap gap-2 mt-auto">
          <Boton href={`/detalle/${oferta.id}`}>Ver detalle</Boton>
          <Boton variante="claro" href={`/catalogo?carrera=${encodeURIComponent(oferta.grupoComparacion)}`}>
            Comparar alternativas
          </Boton>
        </div>
      </div>
    </article>
  );
}

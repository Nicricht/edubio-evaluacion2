import type { Oferta } from "@/types/oferta";
import { Boton } from "@/components/atoms/Boton";
import { EncabezadoSeccion } from "@/components/molecules/EncabezadoSeccion";
import { TarjetaOferta } from "@/components/molecules/TarjetaOferta";

interface OfertasDestacadasProps {
  ofertas: Oferta[];
}

export function OfertasDestacadas({ ofertas }: OfertasDestacadasProps) {
  return (
    <section className="seccion py-5">
      <div className="container">
        <EncabezadoSeccion
          titulo="Ofertas académicas destacadas"
          descripcion="Revisa algunas alternativas y entra al catálogo para comparar instituciones."
        />
        {ofertas.length === 0 ? (
          <p className="text-muted">No hay ofertas destacadas disponibles.</p>
        ) : (
          <div className="row g-4">
            {ofertas.map((o) => (
              <div className="col-12 col-md-6 col-lg-4" key={o.id}>
                <TarjetaOferta oferta={o} />
              </div>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-center mt-4">
          <Boton variante="secundario" href="/catalogo">
            Ver todas las ofertas
          </Boton>
        </div>
      </div>
    </section>
  );
}

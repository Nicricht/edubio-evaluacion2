import { Boton } from "@/components/atoms/Boton";

export function Hero() {
  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <h1 className="display-5 fw-bold mb-3">Encuentra la carrera que mejor se adapta a ti</h1>
            <p className="lead mb-4">
              Explora ofertas académicas, revisa sus características y compara alternativas entre instituciones de
              Educación Superior de la Región del Biobío.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Boton href="/catalogo">Explorar carreras</Boton>
              <Boton variante="secundario" href="/registro">
                Crear cuenta
              </Boton>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="hero-imagen">
              <img src="/img/general/hero-home.jpg" alt="Estudiantes de Educación Superior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

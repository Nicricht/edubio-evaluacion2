import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { OfertasDestacadas } from "@/components/organisms/OfertasDestacadas";
import { SeccionVideo } from "@/components/organisms/SeccionVideo";
import { Footer } from "@/components/organisms/Footer";
import { obtenerDestacadas } from "@/services/ofertasService";

const GRUPOS_DESTACADOS = ["Ingeniería en Informática", "Enfermería", "Ingeniería Comercial"];

export default function App() {
  const destacadas = obtenerDestacadas(GRUPOS_DESTACADOS);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OfertasDestacadas ofertas={destacadas} />
        <SeccionVideo videoId="OorkqA3RuFg" titulo="Cómo saber qué carrera elegir" />
      </main>
      <Footer />
    </>
  );
}

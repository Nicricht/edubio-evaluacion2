import { EncabezadoSeccion } from "@/components/molecules/EncabezadoSeccion";

interface SeccionVideoProps {
  videoId: string;
  titulo: string;
}

export function SeccionVideo({ videoId, titulo }: SeccionVideoProps) {
  return (
    <section className="seccion py-5">
      <div className="container">
        <EncabezadoSeccion
          titulo="Conoce más sobre la elección de una carrera"
          descripcion="Este contenido complementa la información disponible en la plataforma."
        />
        <div className="ratio ratio-16x9 video-edubio">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

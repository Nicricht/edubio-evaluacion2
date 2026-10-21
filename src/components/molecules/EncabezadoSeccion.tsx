interface EncabezadoSeccionProps {
  titulo: string;
  descripcion?: string;
}

export function EncabezadoSeccion({ titulo, descripcion }: EncabezadoSeccionProps) {
  return (
    <header className="mb-4">
      <h2 className="titulo-seccion">{titulo}</h2>
      {descripcion && <p className="descripcion-seccion">{descripcion}</p>}
    </header>
  );
}

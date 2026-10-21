interface EtiquetaProps {
  texto: string;
}

export function Etiqueta({ texto }: EtiquetaProps) {
  return <span className="badge etiqueta-edubio">{texto}</span>;
}

import type { ReactNode } from "react";

export type VarianteBoton = "primario" | "secundario" | "claro";

interface BotonProps {
  children: ReactNode;
  variante?: VarianteBoton;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Boton({ children, variante = "primario", href, onClick, type = "button" }: BotonProps) {
  const clase = `btn boton boton-${variante}`;
  if (href) {
    return (
      <a href={href} className={clase}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={clase} onClick={onClick}>
      {children}
    </button>
  );
}

import { useState } from "react";
import { Boton } from "@/components/atoms/Boton";

export interface EnlaceNav {
  texto: string;
  href: string;
}

export const ENLACES_NAV: EnlaceNav[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Carreras", href: "/catalogo" },
  { texto: "Novedades", href: "/novedades" },
  { texto: "Nosotros", href: "/nosotros" },
  { texto: "Contacto", href: "/contacto" },
  { texto: "Comparar", href: "/comparar" },
  { texto: "Mapa", href: "/mapa" },
];

interface NavbarProps {
  enlaces?: EnlaceNav[];
}

export function Navbar({ enlaces = ENLACES_NAV }: NavbarProps) {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-edubio">
      <div className="container">
        <a href="/" className="navbar-brand logo">
          EduBío 360
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menuPrincipal"
          aria-expanded={abierto}
          aria-label="Abrir menú"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav id="menuPrincipal" aria-label="Navegación principal" className={`navbar-collapse ${abierto ? "d-block" : "d-none"} d-lg-flex`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {enlaces.map((e) => (
              <li className="nav-item" key={e.href}>
                <a className="nav-link" href={e.href}>
                  {e.texto}
                </a>
              </li>
            ))}
            <li className="nav-item py-2 py-lg-0">
              <Boton href="/login">Iniciar sesión</Boton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

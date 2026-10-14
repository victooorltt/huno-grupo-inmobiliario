import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 text-zinc-600">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Brand Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="HuNo Grupo Inmobiliario"
                width={140}
                height={48}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs">
              Tu agencia inmobiliaria de confianza en Gijón. Gestión integral, asesoramiento profesional y compromiso en cada operación.
            </p>
          </div>

          {/* Column 2: Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/inmuebles/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Inmuebles
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/servicios/servicios-al-propietario/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Servicios al propietario
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/asesoramiento-financiero/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Asesoramiento financiero
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/valoracion-profesional/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Valoración profesional
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/servicio-de-reformas/"
                  className="hover:text-zinc-900 transition-colors duration-150"
                >
                  Servicio de reformas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-zinc-400 mt-1 shrink-0" aria-hidden="true" />
                <span>Adosinda 15, Gijón, 33202 Asturias</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
                <a
                  href="tel:678530312"
                  className="hover:text-zinc-900 transition-colors duration-150 font-medium"
                >
                  678 53 03 12
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hunogestioninmobiliaria@gmail.com"
                  className="hover:text-zinc-900 transition-colors duration-150 break-all"
                >
                  hunogestioninmobiliaria@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: Copyright & legal links */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} HuNo Grupo Inmobiliario. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/aviso-legal/"
              className="hover:text-zinc-800 transition-colors duration-150"
            >
              Aviso legal
            </Link>
            <Link
              href="/politica-privacidad/"
              className="hover:text-zinc-800 transition-colors duration-150"
            >
              Política de privacidad
            </Link>
            <Link
              href="/politica-cookies/"
              className="hover:text-zinc-800 transition-colors duration-150"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

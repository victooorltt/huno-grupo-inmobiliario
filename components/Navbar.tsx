'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

interface ServiceItem {
  title: string;
  href: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Servicios al propietario',
    href: '/servicios/servicios-al-propietario/',
    description: 'Gestión integral para la venta o alquiler de su inmueble con total tranquilidad.',
  },
  {
    title: 'Asesoramiento financiero',
    href: '/servicios/asesoramiento-financiero/',
    description: 'Estudio de viabilidad y gestión hipotecaria con las mejores condiciones del mercado.',
  },
  {
    title: 'Valoración profesional',
    href: '/servicios/valoracion-profesional/',
    description: 'Tasación rigurosa basada en el mercado real de Gijón y Asturias.',
  },
  {
    title: 'Servicio de reformas',
    href: '/servicios/servicio-de-reformas/',
    description: 'Adecuación y reformas completas para maximizar el valor de cada espacio.',
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Handle click outside desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const isServiciosActive = pathname.startsWith('/servicios');

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200/80 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo as-is in a plain <img> (no container/bg/rounded) */}
          <Link href="/" className="inline-flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="HuNo Grupo Inmobiliario"
              width={130}
              height={45}
              className="h-10 sm:h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive('/') && pathname === '/'
                  ? 'text-[#FF0000] font-semibold'
                  : 'text-zinc-700 hover:text-zinc-900'
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/vender-piso-gijon/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                pathname === '/vender-piso-gijon/' || pathname === '/vender-piso-gijon'
                  ? 'text-[#FF0000] font-semibold'
                  : 'text-zinc-700 hover:text-zinc-900'
              }`}
            >
              Vender
            </Link>

            {/* Servicios Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  isServiciosActive
                    ? 'text-[#FF0000] font-semibold'
                    : 'text-zinc-700 hover:text-zinc-900'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-label="Desplegar menú de servicios"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-xl bg-white border border-zinc-200 shadow-lg p-2 z-50 animate-in fade-in-0 duration-100">
                  <div className="space-y-1">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block p-2.5 rounded-lg transition-colors duration-150 ${
                          pathname === service.href
                            ? 'bg-zinc-50 text-[#FF0000]'
                            : 'hover:bg-zinc-50 text-zinc-800'
                        }`}
                      >
                        <div className="text-sm font-medium">{service.title}</div>
                        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/inmuebles/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive('/inmuebles')
                  ? 'text-[#FF0000] font-semibold'
                  : 'text-zinc-700 hover:text-zinc-900'
              }`}
            >
              Inmuebles
            </Link>

            <Link
              href="/nosotros/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive('/nosotros')
                  ? 'text-[#FF0000] font-semibold'
                  : 'text-zinc-700 hover:text-zinc-900'
              }`}
            >
              Nosotros
            </Link>

            <Link
              href="/contacto/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive('/contacto')
                  ? 'text-[#FF0000] font-semibold'
                  : 'text-zinc-700 hover:text-zinc-900'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Phone CTA button on right */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:678530312"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#FF0000] hover:bg-[#d90000] rounded-xl transition-colors duration-150 shadow-xs"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>678 53 03 12</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:678530312"
              className="inline-flex items-center justify-center p-2 text-[#FF0000] hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Llamar a HuNo Grupo Inmobiliario"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú principal'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-base font-medium ${
              pathname === '/' ? 'text-[#FF0000] font-semibold' : 'text-zinc-800'
            }`}
          >
            Inicio
          </Link>

          <Link
            href="/vender-piso-gijon/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-base font-medium ${
              pathname === '/vender-piso-gijon/' || pathname === '/vender-piso-gijon'
                ? 'text-[#FF0000] font-semibold'
                : 'text-zinc-800'
            }`}
          >
            Vender
          </Link>

          {/* Mobile Servicios Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className={`flex items-center justify-between w-full py-2 text-base font-medium text-left ${
                isServiciosActive ? 'text-[#FF0000] font-semibold' : 'text-zinc-800'
              }`}
              aria-label="Abrir submenú de servicios"
            >
              <span>Servicios</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-150 ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 border-l-2 border-zinc-200 space-y-2 mt-1 mb-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 text-sm ${
                      pathname === service.href
                        ? 'text-[#FF0000] font-medium'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/inmuebles/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-base font-medium ${
              isActive('/inmuebles') ? 'text-[#FF0000] font-semibold' : 'text-zinc-800'
            }`}
          >
            Inmuebles
          </Link>

          <Link
            href="/nosotros/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-base font-medium ${
              isActive('/nosotros') ? 'text-[#FF0000] font-semibold' : 'text-zinc-800'
            }`}
          >
            Nosotros
          </Link>

          <Link
            href="/contacto/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-base font-medium ${
              isActive('/contacto') ? 'text-[#FF0000] font-semibold' : 'text-zinc-800'
            }`}
          >
            Contacto
          </Link>

          <div className="pt-3 border-t border-zinc-200">
            <a
              href="tel:678530312"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-[#FF0000] hover:bg-[#d90000] rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar: 678 53 03 12</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;

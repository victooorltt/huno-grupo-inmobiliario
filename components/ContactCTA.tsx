import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ContactCTA({
  title = 'HuNo Grupo Inmobiliario le asesora y le acompaña',
  subtitle = 'Estamos a su disposición para resolver cualquier duda y ayudarle a tomar la mejor decisión con su inmueble en Gijón y Asturias.',
  className = '',
}: ContactCTAProps) {
  return (
    <section className={`bg-red-50/70 border-t border-red-100/80 py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 leading-snug">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-150 shadow-xs hover:shadow-md"
            >
              <span>Contactar con nosotros</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-sm text-zinc-800">
              <a
                href="tel:678530312"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-150 font-semibold"
              >
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>678 53 03 12</span>
              </a>

              <a
                href="mailto:hunogestioninmobiliaria@gmail.com"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-150 font-medium"
              >
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>hunogestioninmobiliaria@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;

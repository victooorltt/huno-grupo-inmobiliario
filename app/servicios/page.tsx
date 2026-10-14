import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { ShieldCheck, Landmark, Calculator, Hammer, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios Inmobiliarios Integrales | HuNo Grupo Inmobiliario',
  description:
    'Descubra todos los servicios inmobiliarios de HuNo Grupo Inmobiliario en Gijón y Asturias: servicios al propietario, asesoramiento financiero, valoración profesional gratuita y reformas.',
};

const SERVICES_LIST = [
  {
    title: 'Servicios al Propietario',
    href: '/servicios/servicios-al-propietario/',
    icon: ShieldCheck,
    description:
      'Le garantizamos la gestión en la venta de su inmueble de una forma profesional, segura e inteligente. Le acompañaremos y guiaremos en todo el proceso de venta, con el único objetivo de garantizar la satisfacción del resultado final de la venta.',
    actionText: 'Conocer servicios al propietario',
  },
  {
    title: 'Asesoramiento Financiero',
    href: '/servicios/asesoramiento-financiero/',
    icon: Landmark,
    description:
      'Estudios de viabilidad financiera y financiación adaptada a sus necesidades. Trabajamos con diferentes entidades bancarias para ayudarle a obtener la hipoteca óptima y cancelar préstamos o cargas existentes.',
    actionText: 'Ver asesoramiento financiero',
  },
  {
    title: 'Valoración Profesional Gratuita',
    href: '/servicios/valoracion-profesional/',
    icon: Calculator,
    description:
      'Informe personalizado y profesional de su inmueble sin compromiso, en base a las características del mismo y los testigos de referencia, aconsejándole el precio más adecuado de venta o alquiler.',
    actionText: 'Solicitar valoración gratuita',
  },
  {
    title: 'Servicio de Reformas',
    href: '/servicios/servicio-de-reformas/',
    icon: Hammer,
    description:
      'Proyectos de reforma de inmuebles y obra nueva bajo un equipo cualificado de arquitectos, decoradores y constructores. Presupuestos sin compromiso y materiales de primera calidad.',
    actionText: 'Descubrir servicio de reformas',
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        variant="gradient"
        imageSrc="/images/servicios-propietario.webp"
        imageAlt="Servicios HuNo Grupo Inmobiliario"
        title={
          <>
            Servicios inmobiliarios <span className="text-accent">integrales</span>
          </>
        }
        subtitle="Soluciones especializadas para propietarios, compradores e inversores en Gijón y Asturias con el máximo rigor profesional y cercanía."
      />

      {/* Grid of 4 Services */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              ¿En qué podemos ayudarle?
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Acompañamos cada fase de su operación inmobiliaria con soluciones a medida y un equipo dedicado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES_LIST.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.href}
                  className="bg-white rounded-2xl p-8 lg:p-10 border border-zinc-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-base text-zinc-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-[#d90000] transition-colors"
                    >
                      <span>{service.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

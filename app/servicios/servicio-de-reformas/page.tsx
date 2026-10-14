import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { CheckCircle2, Paintbrush, HardHat, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicio de Reformas y Proyectos Urbanísticos | HuNo Grupo Inmobiliario',
  description:
    'Reformas y proyectos urbanísticos en Gijón y Asturias con HuNo Grupo Inmobiliario. Reformas integrales, obra nueva y adecuación con arquitectos, decoradores y materiales de primera calidad.',
};

export default function ServicioDeReformasPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        variant="gradient"
        imageSrc="/images/servicio-reformas.webp"
        imageAlt="Servicio de Reformas HuNo"
        imagePosition="right center"
        minHeight="min-h-[520px] lg:min-h-[620px]"
        contentMaxWidth="max-w-xl lg:max-w-[580px]"
        overlay={
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-35% to-white/20 md:from-white md:via-white/80 md:via-30% md:to-transparent md:to-54%"
            aria-hidden="true"
          />
        }
        title={
          <>
            <span className="block sm:whitespace-nowrap">Reformas y proyectos</span>
            <span className="block sm:whitespace-nowrap text-accent">urbanísticos</span>
          </>
        }
        subtitle="Su proyecto hecho realidad con el mejor equipo profesional de arquitectos, decoradores y especialistas."
      />

      {/* Block 1: Reformas y proyectos urbanísticos */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Reformas y proyectos{' '}
                <span className="text-accent">urbanísticos</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
                En HuNo Grupo Inmobiliario realizamos proyectos de reforma de inmuebles y obra
                nueva, bajo un equipo profesional de arquitectos, decoradores y profesionales
                de la construcción. Nos adaptamos a sus necesidades y presupuesto, ya sea una
                obra nueva o una reforma de viviendas, oficinas, edificios…etc.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Equipo técnico cualificado:</strong>{' '}
                    Arquitectos, aparejadores y constructores con amplia experiencia en ejecución de obras.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Paintbrush className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Interiorismo y acabados de calidad:</strong>{' '}
                    Decoración y materiales de primera línea adaptados a su estilo y confort.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Máxima seriedad y presupuesto cerrado:</strong>{' '}
                    Trato personalizado, cumplimiento estricto de plazos y presupuestos sin compromiso.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-150 shadow-xs hover:shadow-md"
                >
                  <span>Solicitar presupuesto sin compromiso</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md bg-zinc-100">
                <img
                  src="/images/reformas-proyectos.webp"
                  alt="Proyectos de reforma y obra nueva HuNo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Su proyecto hecho realidad */}
      <section className="py-16 lg:py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
              Su proyecto hecho realidad
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Confíe en un proceso transparente, con seguimiento continuo de obra y acabados excepcionales para su vivienda o negocio en Asturias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900">Equipo multidisciplinar</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Arquitectos, decoradores y constructores experimentados para resolver cada detalle
                técnico y estético de su reforma.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900">Materiales de primera calidad</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Selección cuidada de proveedores y acabados para garantizar durabilidad, eficiencia
                energética y el mejor confort.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900">Presupuestos sin compromiso</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Transparencia absoluta en partidas presupuestarias, plazos de ejecución y trato
                personalizado de principio a fin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

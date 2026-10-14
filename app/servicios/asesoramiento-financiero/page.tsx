import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { CheckCircle2, Home, KeyRound, Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asesoramiento Financiero | HuNo Grupo Inmobiliario',
  description:
    'Estudios de viabilidad financiera y financiación adaptada a sus necesidades. Asesoramiento financiero de confianza en Gijón y Asturias con HuNo Grupo Inmobiliario.',
};

export default function AsesoramientoFinancieroPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        variant="gradient"
        imageSrc="/images/asesoramiento-financiero.webp"
        imageAlt="Asesoramiento Financiero HuNo"
        imagePosition="right center"
        minHeight="min-h-[520px] lg:min-h-[620px]"
        contentMaxWidth="max-w-xl lg:max-w-[580px]"
        overlay={
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/75 md:bg-gradient-to-r md:from-white md:via-white/80 md:via-30% md:to-transparent md:to-54%"
            aria-hidden="true"
          />
        }
        title={
          <>
            <span className="block sm:whitespace-nowrap">Asesoramiento financiero</span>
            <span className="block sm:whitespace-nowrap text-accent">de confianza</span>
          </>
        }
        subtitle="Estudios de viabilidad financiera y financiación a su medida para hacer realidad su proyecto inmobiliario."
      />

      {/* Block 1: Le asesoramos en su búsqueda de financiación */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text & Value Points */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Le asesoramos en su búsqueda{' '}
                <span className="text-accent">de financiación</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
                En HuNo Grupo Inmobiliario, para garantizar el éxito de una operación de
                compraventa, realizamos un estudio previo de viabilidad financiera. Le ayudamos
                a encontrar la mejor forma de financiación o a cancelar préstamos, hipotecas o
                cargas existentes sobre el inmueble.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Estudio de viabilidad personalizado:</strong>{' '}
                    Analizamos la capacidad financiera real para asegurar operaciones viables y sin contratiempos.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Gestión con entidades bancarias:</strong>{' '}
                    Colaboramos con las principales entidades financieras para pymes y particulares en hipotecas, préstamos, avales y subrogaciones.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Las mejores condiciones sin sorpresas:</strong>{' '}
                    Le ayudamos a obtener la hipoteca idónea, adaptada a su presupuesto y con absoluta transparencia.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-150 shadow-xs hover:shadow-md"
                >
                  <span>Solicitar estudio financiero</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/inmuebles/"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
                >
                  <span>Ver inmuebles disponibles</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </Link>
              </div>
            </div>

            {/* Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md bg-zinc-100">
                <img
                  src="/images/busqueda-financiacion.webp"
                  alt="Estudio y asesoramiento financiero en HuNo Grupo Inmobiliario"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Nuestra Oferta Inmobiliaria */}
      <section className="py-16 lg:py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Nuestra Oferta Inmobiliaria
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Inmuebles seleccionados en venta y alquiler con el respaldo de nuestro asesoramiento financiero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Venta de Inmuebles */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Venta de Inmuebles</h3>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  Chalets, pisos, casas de pueblo y fincas en Gijón, Somiedo, Oviedo y toda Asturias,
                  con estudio económico y viabilidad hipotecaria asegurada.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <Link
                  href="/inmuebles/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-[#d90000] transition-colors"
                >
                  <span>Ver inmuebles en venta</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Alquiler de Inmuebles */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Alquiler de Inmuebles</h3>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  Gestión integral para propietarios e inquilinos con análisis de solvencia riguroso y
                  contratos adaptados a la normativa vigente.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <Link
                  href="/inmuebles/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-[#d90000] transition-colors"
                >
                  <span>Ver inmuebles en alquiler</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Viviendas */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Viviendas</h3>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  Encuentre la vivienda que mejor encaje con su proyecto vital y cuente con nosotros para
                  obtener las mejores condiciones de financiación del mercado.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <Link
                  href="/inmuebles/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-[#d90000] transition-colors"
                >
                  <span>Consultar catálogo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

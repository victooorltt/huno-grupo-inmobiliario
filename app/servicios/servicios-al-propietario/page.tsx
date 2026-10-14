import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { PROPERTIES } from '@/lib/properties';
import { ShieldCheck, FileText, Users, ArrowRight, Bed, Bath, Maximize2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios al Propietario | HuNo Grupo Inmobiliario',
  description:
    'Venda su inmueble con HuNo Grupo Inmobiliario. Le acompañamos durante todo el proceso de venta con un servicio profesional, cercano y orientado a conseguir el mejor resultado en Gijón y Asturias.',
};

export default function ServiciosAlPropietarioPage() {
  const featuredProperties = PROPERTIES.slice(0, 3);

  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        variant="gradient"
        imageSrc="/images/servicios-propietario.webp"
        imageAlt="Servicios al Propietario HuNo"
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
            <span className="block sm:whitespace-nowrap">Venda su inmueble con</span>
            <span className="block sm:whitespace-nowrap text-accent">HuNo Grupo Inmobiliario</span>
          </>
        }
        subtitle="Le acompañamos durante todo el proceso de venta con un servicio profesional, cercano y orientado a conseguir el mejor resultado."
      />

      {/* Block 1: Venda seguro y venda de forma inteligente */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text & Value Points */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Venda seguro y venda{' '}
                <span className="text-accent">de forma inteligente</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
                Somos una agencia inmobiliaria profesional, nuestro objetivo es ofrecerle el mejor
                servicio, que usted pueda vender su inmueble, sin problemas, en un tiempo adecuado y
                con un precio óptimo.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Asesoramiento legal continuo:</strong>{' '}
                    Le asesoraremos legalmente en todo momento para garantizar su total tranquilidad.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Análisis riguroso de demandantes:</strong>{' '}
                    Analizaremos a los demandantes para asegurar compradores solventes y visitas efectivas.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">Precio óptimo de venta:</strong>{' '}
                    Le aconsejaremos sobre el precio de venta en función a sus características, la zona, la oferta existente y sus necesidades reales de tiempo.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center gap-4">
                <Link
                  href="/servicios/valoracion-profesional/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-150 shadow-xs hover:shadow-md"
                >
                  <span>Solicitar valoración profesional</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contacto/"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
                >
                  <span>Consultar con un asesor</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </Link>
              </div>
            </div>

            {/* Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md bg-zinc-100">
                <img
                  src="/images/venda-seguro.webp"
                  alt="Venda su inmueble seguro y de forma inteligente con HuNo Grupo Inmobiliario"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: 2-column cards */}
      <section className="py-16 lg:py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
                  Gestión profesional de la venta de su inmueble
                </h3>
                <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                  Le acompañaremos en todas las fases de la venta de sus inmuebles, desde el informe
                  inicial del inmueble, la gestión documental, el asesoramiento legal, la
                  comercialización del inmueble, mediante la publicidad con nuestros demandantes, el
                  anuncio en portales, la colaboración con otras agencias inmobiliarias que tengan
                  nuestro mismo código ético.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
                  Control de visitas y cierre de la operación
                </h3>
                <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                  Nos ocuparemos del análisis de los potenciales compradores y del control de las
                  visitas, le ayudaremos en los procesos de negociación, gestionando las ofertas de
                  los demandantes, las condiciones propuestas y todos los problemas que se planteen.
                  Acompañaremos al vendedor en todo momento, gestionando con la notaría y la entidad
                  financiera toda la documentación requerida y solucionando los problemas. Le
                  asesoraremos sobre los diferentes impuestos que deberá pagar posterior a la venta,
                  como el de Plusvalía, IAJD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Nuestra Oferta Inmobiliaria */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
                Nuestra Oferta Inmobiliaria: Descubra nuestros inmuebles
              </h2>
            </div>
            <Link
              href="/inmuebles/"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-[#d90000] transition-colors"
            >
              <span>Ver todos los inmuebles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <article
                key={property.id}
                className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={property.featuredImage}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-accent text-white rounded-md shadow-xs">
                      {property.category}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-semibold bg-white/95 text-zinc-800 rounded-md backdrop-blur-xs shadow-xs">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1.5 text-sm font-bold bg-white text-zinc-900 rounded-lg shadow-sm">
                      {property.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 line-clamp-1 group-hover:text-accent transition-colors">
                      {property.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
                    <div className="flex items-center gap-4">
                      {property.rooms > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-zinc-400" />
                          {property.rooms} hab.
                        </span>
                      )}
                      {property.baths > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-zinc-400" />
                          {property.baths} baños
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-zinc-400" />
                        {property.size}
                      </span>
                    </div>

                    <Link
                      href={`/inmuebles/${property.slug}/`}
                      className="font-medium text-accent hover:underline inline-flex items-center gap-1"
                    >
                      <span>Detalles</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

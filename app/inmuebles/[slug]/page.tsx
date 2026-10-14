import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Ruler,
  Info,
  ArrowRight,
  Share2,
} from 'lucide-react';
import { PROPERTIES, Property } from '@/lib/properties';
import { ContactCTA } from '@/components/ContactCTA';
import { PropertyGallery } from '@/components/PropertyGallery';
import { PropertyContactSidebar } from '@/components/PropertyContactSidebar';
import { InmuebleCard } from '@/components/InmuebleCard';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return [
    { slug: 'chalet-somiedo' },
    { slug: 'chalet-para-reformar-somiedo' },
    { slug: 'piso-centro-oviedo' },
    { slug: 'piso-en-el-coto' },
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const property = PROPERTIES.find((p) => p.slug === params.slug);

  if (!property) {
    return {
      title: 'Inmueble no encontrado | HuNo Grupo Inmobiliario',
    };
  }

  return {
    title: `${property.title} | HuNo Grupo Inmobiliario`,
    description: `${property.title} en ${property.location}. Precio: ${property.price}. Superficie: ${property.size}.`,
    openGraph: {
      title: `${property.title} - ${property.price}`,
      description: `${property.title} en ${property.location}.`,
      images: [property.featuredImage],
    },
  };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = PROPERTIES.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const otherProperties = PROPERTIES.filter((p) => p.slug !== property.slug);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs */}
      <nav
        aria-label="Migas de pan"
        className="border-b border-zinc-200 bg-zinc-50/50 py-3.5"
      >
        <div className="mx-auto max-w-6xl px-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-zinc-500">
            <li>
              <Link
                href="/"
                className="hover:text-accent transition-colors font-medium text-zinc-600"
              >
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            </li>
            <li>
              <Link
                href="/inmuebles/"
                className="hover:text-accent transition-colors font-medium text-zinc-600"
              >
                Inmuebles
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            </li>
            <li className="font-semibold text-zinc-900 truncate max-w-xs sm:max-w-md">
              {property.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. Top Header */}
      <header className="border-b border-zinc-200 py-8 lg:py-10 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md">
                  {property.category}
                </span>
                <span className="bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md">
                  {property.type}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Ref: {property.id}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                {property.title}
              </h1>

              <div className="mt-3 flex items-center gap-2 text-sm sm:text-base text-zinc-600">
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="flex md:flex-col items-baseline md:items-end justify-between md:justify-start gap-2 pt-2 border-t md:border-t-0 border-zinc-100">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                Precio de venta
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">
                {property.price}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Content Container: Gallery + 2-Column Section */}
      <main className="py-8 lg:py-12">
        <div className="mx-auto max-w-6xl px-6">
          {/* Image Gallery */}
          <div className="mb-10 lg:mb-12">
            <PropertyGallery images={property.images} title={property.title} />
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* Left Column (Content) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Specs Row */}
              <section aria-labelledby="specs-heading">
                <h2 id="specs-heading" className="sr-only">
                  Características principales
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 bg-zinc-50 border border-zinc-200 rounded-2xl">
                  {/* Bedrooms */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-2xs">
                      <Bed className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Habitaciones</p>
                      <p className="text-sm sm:text-base font-bold text-zinc-900">
                        {property.rooms > 0
                          ? `${property.rooms} ${property.rooms === 1 ? 'hab.' : 'habs.'}`
                          : 'Consultar'}
                      </p>
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-2xs">
                      <Bath className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Baños</p>
                      <p className="text-sm sm:text-base font-bold text-zinc-900">
                        {property.baths > 0
                          ? `${property.baths} ${property.baths === 1 ? 'baño' : 'baños'}`
                          : 'Consultar'}
                      </p>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-2xs">
                      <Ruler className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Superficie</p>
                      <p className="text-sm sm:text-base font-bold text-zinc-900">
                        {property.size}
                      </p>
                    </div>
                  </div>

                  {/* Location / City */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500 font-medium">Zona</p>
                      <p className="text-sm sm:text-base font-bold text-zinc-900 truncate">
                        {property.city}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Full Description split into paragraphs */}
              <section aria-labelledby="description-heading" className="space-y-4">
                <h2
                  id="description-heading"
                  className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3"
                >
                  Descripción del inmueble
                </h2>

                <div className="pt-2 text-zinc-700 space-y-4 leading-relaxed">
                  {property.description.map((paragraph, index) => {
                    const isAllUpper =
                      paragraph.length > 5 &&
                      paragraph.length < 90 &&
                      paragraph === paragraph.toUpperCase() &&
                      !paragraph.includes('PVP');

                    if (isAllUpper) {
                      return (
                        <h3
                          key={index}
                          className="font-bold text-base sm:text-lg text-zinc-900 pt-3 tracking-wide"
                        >
                          {paragraph}
                        </h3>
                      );
                    }

                    if (paragraph.startsWith('•')) {
                      return (
                        <p key={index} className="pl-4 font-medium text-zinc-800">
                          {paragraph}
                        </p>
                      );
                    }

                    return (
                      <p key={index} className="text-base text-zinc-700 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Important Legal Notice */}
                <div className="mt-8 p-4 sm:p-5 bg-zinc-50 border-l-4 border-accent rounded-r-xl rounded-l-xs flex items-start gap-3">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                    En el precio no se incluyen transmisiones patrimoniales, notaría y registro.
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column (Sticky Agent Sidebar) */}
            <div className="lg:col-span-1">
              <PropertyContactSidebar
                propertyTitle={property.title}
                propertySlug={property.slug}
                propertyPrice={property.price}
              />
            </div>
          </div>
        </div>
      </main>

      {/* 4. Bottom Section: "Otros inmuebles que le pueden interesar" */}
      {otherProperties.length > 0 && (
        <section className="py-16 lg:py-20 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                  Otros inmuebles que le pueden interesar
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  Descubra más opciones inmobiliarias disponibles en nuestra cartera.
                </p>
              </div>
              <Link
                href="/inmuebles/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-accent transition-colors"
              >
                <span>Ver todos los inmuebles</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherProperties.map((otherProp) => (
                <InmuebleCard key={otherProp.id} property={otherProp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Contact CTA */}
      <ContactCTA />
    </div>
  );
}

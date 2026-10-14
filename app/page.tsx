import Link from 'next/link';
import {
  MapPin,
  Home,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  FileText,
  Landmark,
  KeyRound,
  Bed,
  Bath,
  Square,
  Star,
  Building2,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { tokens } from '@/lib/tokens';
import { PROPERTIES } from '@/lib/properties';

const SERVICES = [
  {
    title: 'Servicios al Propietario',
    description:
      'Acompañamiento integral en la venta y alquiler de su inmueble con máxima difusión, filtros de solvencia y gestión completa de visitas y documentación.',
    href: '/servicios/servicios-al-propietario/',
    icon: KeyRound,
    image: '/images/servicio-propietario-card.webp',
  },
  {
    title: 'Valoraciones Inmobiliarias',
    description:
      'Estudio riguroso del mercado actual para fijar el precio óptimo y maximizar la rentabilidad de su inmueble con criterio técnico y realista.',
    href: '/servicios/valoracion-profesional/',
    icon: TrendingUp,
    image: '/images/servicio-valoracion-card.webp',
  },
  {
    title: 'Tramitación de Herencia',
    description:
      'Asesoramiento especializado en la gestión y tramitación de herencias y sucesiones inmobiliarias, facilitando todos los trámites legales y fiscales.',
    href: '/servicios/servicios-al-propietario/',
    icon: FileText,
    image: '/images/servicio-herencia-card.webp',
  },
  {
    title: 'Seguros de Impagos',
    description:
      'Protección y tranquilidad para el alquiler de su propiedad con cobertura jurídica completa y garantía en el cobro de rentas.',
    href: '/servicios/servicios-al-propietario/',
    icon: ShieldCheck,
    image: '/images/servicio-seguros-card.webp',
  },
  {
    title: 'Gestiones de Hipotecas',
    description:
      'Asesoramiento financiero a medida para conseguir las mejores condiciones hipotecarias con entidades bancarias de primer nivel.',
    href: '/servicios/asesoramiento-financiero/',
    icon: Landmark,
    image: '/images/servicio-hipotecas-card.webp',
  },
];

const EDITORIAL_OFFERS = [
  {
    title: 'Venta de Inmuebles',
    description:
      'Descubra nuestra oferta inmobiliaria de pisos, casas, fincas y locales, si no encuentra lo que desea llámenos.',
    icon: Building2,
  },
  {
    title: 'Alquiler de Inmuebles',
    description:
      'Le ofrecemos pisos, casas, fincas y locales de calidad de larga y media temporada adaptado a sus necesidades.',
    icon: KeyRound,
  },
  {
    title: 'Viviendas',
    description:
      'HuNo Grupo Inmobiliario tenemos la vivienda de sus sueños, adaptada a sus necesidades y en las mejores zonas.',
    icon: Home,
  },
];

const REVIEWS = [
  {
    author: 'Marian PF',
    rating: 5,
    text: 'No podemos estar más agradecidas por el trato y la profesionalidad recibida. Todo el proceso fue ágil, claro y perfectamente organizado. Han superado nuestras expectativas y los recomendamos al 100%. ¡Gracias equipo!',
  },
  {
    author: 'Amador Gomez',
    rating: 5,
    text: 'Un auténtico placer haber sido cliente suyo. Un asesoramiento excepcional, cercano y profesional, acompañandonos en todo el proceso. Muchas Gracias tanto a Javi como a Natalia. Ha sido un placer',
  },
  {
    author: 'Arturo Enamorado',
    rating: 5,
    text: 'Seriedad, eficacia, asesorando en todos los aspectos y un trato excelente. Contando las cosas como son y con claridad. Fue la mejor decisión q tomé al poner mi propiedad en sus manos. Muchas gracias Hugo y Natalia!',
  },
];

const FEATURED_PROPERTIES = [
  PROPERTIES[0], // Chalet en Somiedo
  PROPERTIES[2], // Piso en el centro de Oviedo
  PROPERTIES[3], // Piso en venta en El Coto (Gijón)
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Block */}
      <PageHero
        variant="overlay"
        imageSrc="/images/hero-home.webp"
        imageAlt="HuNo Grupo Inmobiliario en Gijón"
        minHeight="min-h-[480px] lg:min-h-[560px]"
        overlay={
          <>
            {/* Neutral soft radial gradient: centered protection behind text, clear and natural on lateral edges to restore photo depth and building color */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0.58)_45%,_rgba(255,255,255,0.20)_75%,_rgba(255,255,255,0.06)_100%)]"
              aria-hidden="true"
            />
            {/* Subtle vertical fade for header and bottom transition */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40"
              aria-hidden="true"
            />
          </>
        }
        title={
          <span className="flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-600 uppercase mb-3">
              HuNo Grupo Inmobiliario
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.14]">
              Tu inmobiliaria de{' '}
              <br className="hidden sm:inline" />
              <span className="text-accent">confianza en Gijón</span>
            </span>
          </span>
        }
        subtitle={
          <span>
            Te acompañamos en la venta o alquiler de tu inmueble en Gijón,{' '}
            <br className="hidden md:inline" />
            ofreciéndote un servicio cercano, personalizado y profesional en cada paso.
          </span>
        }
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/inmuebles/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors duration-150"
          >
            <span>Ver inmuebles</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contacto/"
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-zinc-900 bg-white/95 hover:bg-white border border-zinc-300 hover:border-zinc-400 rounded-xl transition-colors duration-150 shadow-xs"
          >
            <span>Contactar</span>
          </Link>
        </div>

        {/* Benefits row centered beneath buttons with improved contrast */}
        <div className="mt-10 pt-8 border-t border-zinc-300 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-semibold text-zinc-900">
          <div className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Gijón</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Home className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Venta &amp; Alquiler</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Gestión Legal</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Asesoramiento</span>
          </div>
        </div>
      </PageHero>

      {/* 2. Block 2: Nuestros Servicios */}
      <section className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              HuNo Grupo Inmobiliario le asesora y le acompaña
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Servicios profesionales y de calidad, sin letra pequeña, tanto para propietarios como para demandantes. Gran oferta de pisos, casas, fincas y locales.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {SERVICES.map((service) => {
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group flex flex-col bg-white border border-zinc-200/90 hover:border-zinc-300 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-zinc-950 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-sm font-semibold text-zinc-900 group-hover:text-accent transition-colors">
                      <span>Más información</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Block 3: Inmuebles Destacados */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                Inmuebles Destacados
              </h2>
              <p className="mt-2 text-base text-zinc-600">
                Selección de propiedades en Gijón y Asturias con total transparencia y garantía.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <Link
                key={property.id}
                href={`/inmuebles/${property.slug}/`}
                className="group flex flex-col bg-white border border-zinc-200/90 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={property.featuredImage}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-lg text-zinc-900 shadow-2xs">
                    {property.type}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-accent">
                        {property.price}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        {property.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base sm:text-lg font-bold text-zinc-950 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {property.title}
                    </h3>

                    <div className="mt-2.5 flex items-center gap-1.5 text-sm text-zinc-600">
                      <MapPin className="w-4 h-4 shrink-0 text-zinc-400" aria-hidden="true" />
                      <span className="truncate">{property.location}</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs sm:text-sm text-zinc-600 font-medium">
                    {property.rooms > 0 ? (
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                        <span>{property.rooms} {property.rooms === 1 ? 'hab.' : 'habs.'}</span>
                      </span>
                    ) : (
                      <span className="text-zinc-400">Consultar</span>
                    )}

                    {property.baths > 0 && (
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                        <span>{property.baths} {property.baths === 1 ? 'baño' : 'baños'}</span>
                      </span>
                    )}

                    <span className="flex items-center gap-1.5">
                      <Square className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                      <span>{property.size}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Block 4: Nuestra Oferta Inmobiliaria */}
      <section className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headline, 3 points, single CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                  HuNo Grupo Inmobiliario
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
                  Nuestra Oferta <span className="text-accent">Inmobiliaria</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                  Gran oferta inmobiliaria de pisos, casas, fincas y locales. Le asesoramos en todas las fases de compra, con garantía y profesionalidad.
                </p>

                {/* The 3 Offer Points */}
                <div className="mt-8 space-y-3.5">
                  {EDITORIAL_OFFERS.map((offer) => {
                    const Icon = offer.icon;
                    return (
                      <div
                        key={offer.title}
                        className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-4 hover:border-zinc-300 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-2xs mt-0.5">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                            {offer.title}
                          </h3>
                          <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                            {offer.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Single Central Action Link */}
              <div className="mt-8">
                <Link
                  href="/inmuebles/"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs hover:shadow-md transition-all duration-150 w-full sm:w-auto"
                >
                  <span>Descubra nuestros inmuebles</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm border border-zinc-200/90">
                <img
                  src="/images/oferta-inmobiliaria.webp"
                  alt="Oferta inmobiliaria HuNo en Asturias"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Block 5: Opiniones de nuestros clientes */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Opiniones de nuestros clientes
            </h2>
            <div className="mt-3 flex items-center gap-3 text-sm text-zinc-700">
              <div className="flex text-amber-400" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-zinc-900">Google 5.0</span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-600">Reseñas reales verificadas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.author}
                className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col justify-between hover:shadow-xs transition-shadow duration-150"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-5" aria-hidden="true">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-zinc-700 text-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm">{review.author}</p>
                    <p className="text-xs text-zinc-500">Reseña en Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

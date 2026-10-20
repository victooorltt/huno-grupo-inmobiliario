import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  Award,
  Calculator,
  ArrowRight,
  Phone,
  MessageCircle,
  FileCheck,
  Camera,
  Users,
  CheckCircle2,
  ChevronDown,
  Building2,
  Scale,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { ValuationForm } from '@/components/ValuationForm';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Vender Piso en Gijón | HuNo Grupo Inmobiliario - Venta Rápida y Segura',
  description:
    '¿Quiere vender su piso o casa en Gijón? Le garantizamos valoración profesional gratuita, filtro de compradores solventes, gestión legal completa y venta al mejor precio de mercado.',
};

const CARDS = [
  {
    title: 'Valoración Real de Mercado',
    description:
      'Estudiamos compraventas reales escrituradas en su zona de Gijón para fijar el precio óptimo que atraiga compradores solventes sin quemar el inmueble.',
    image: '/images/vender-valoracion-card.webp',
  },
  {
    title: 'Reportaje y Difusión Multicanal',
    description:
      'Fotografía profesional de interiores, planos y publicación destacada en Idealista, Fotocasa y nuestra cartera directa de compradores e inversores.',
    image: '/images/vender-reportaje-card.webp',
  },
  {
    title: 'Filtro Riguroso de Compradores',
    description:
      'Comprobamos la solvencia económica y viabilidad hipotecaria de cada interesado antes de concertar visitas. Cero curiosos ni pérdidas de tiempo.',
    image: '/images/vender-filtro-card.webp',
  },
  {
    title: 'Gestión Legal, Herencias y Notaría',
    description:
      'Redacción rigurosa de contratos de arras, tramitación de herencias, plusvalías y certificados hasta la firma definitiva en notaría.',
    image: '/images/vender-notaria-card.webp',
  },
];

const ADVANTAGES = [
  {
    title: 'Trato directo con la gerencia',
    description:
      'En HuNo su inmueble no pasa de mano en mano entre comerciales novatos. Natalia Arto gestiona y supervisa personalmente cada operación de principio a fin.',
    icon: Award,
  },
  {
    title: 'Filtro financiero previo',
    description:
      'Evitamos visitas innecesarias de curiosos. Evaluamos previamente la capacidad de pago y preaprobación de hipoteca de cada demandante.',
    icon: ShieldCheck,
  },
  {
    title: 'Especialistas en herencias y situaciones complejas',
    description:
      'Si la vivienda proviene de una herencia, proindiviso o tiene cargas registrales, nuestro equipo legal y fiscal se encarga de dejar todo regularizado.',
    icon: FileCheck,
  },
  {
    title: 'Transparencia sin letra pequeña',
    description:
      'Honorarios claros y pactados desde el primer día. Comunicación constante tras cada visita con informes reales de la evolución del mercado.',
    icon: CheckCircle2,
  },
];

const FAQS = [
  {
    q: '¿Cuánto tiempo se suele tardar en vender un piso en Gijón?',
    a: 'Con una valoración adecuada a precios reales de mercado y un reportaje fotográfico profesional, el plazo medio de venta en Gijón suele situarse entre 30 y 90 días. Fijar un precio inflado al inicio es el principal motivo por el que muchos inmuebles se estancan.',
  },
  {
    q: '¿La valoración de mi vivienda tiene algún coste o compromiso?',
    a: 'No, la valoración profesional de HuNo Grupo Inmobiliario es 100% gratuita y sin ningún tipo de compromiso. Le entregaremos un informe detallado con testigos reales de venta en su barrio.',
  },
  {
    q: '¿Qué ocurre si el inmueble proviene de una herencia con varios herederos?',
    a: 'Es una de nuestras principales especialidades. Nos encargamos de coordinar la documentación, la aceptación de herencia, el cálculo de la plusvalía municipal y la mediación entre herederos para que la venta se complete de forma ordenada y sin conflictos.',
  },
  {
    q: '¿Qué documentación necesito para poner la vivienda a la venta?',
    a: 'Inicialmente solo requerimos la copia de la escritura de propiedad (o nota simple) y el DNI de los titulares. Nosotros le ayudamos a tramitar el Certificado de Eficiencia Energética, la cédula de habitabilidad y los certificados de comunidad y deuda cero.',
  },
  {
    q: '¿Cómo garantizan que solo visiten mi casa compradores solventes?',
    a: 'Realizamos un estudio previo de viabilidad financiera y precalificación hipotecaria a través de nuestro departamento financiero antes de concertar cualquier visita a su propiedad.',
  },
];

export default function VenderPisoGijonPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* 1. Hero Section */}
      <PageHero
        variant="gradient"
        imageSrc="/images/venda-seguro.webp"
        imageAlt="Vender piso en Gijón con HuNo Grupo Inmobiliario"
        imagePosition="right center"
        minHeight="min-h-[520px] lg:min-h-[620px]"
        contentMaxWidth="max-w-xl lg:max-w-[580px]"
        overlay={
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/75 md:bg-gradient-to-r md:from-white md:via-white/85 md:via-30% md:to-transparent md:to-55%"
            aria-hidden="true"
          />
        }
        title={
          <>
            <span className="block sm:whitespace-nowrap">Venda su piso en Gijón</span>
            <span className="block sm:whitespace-nowrap text-accent">al mejor precio de mercado</span>
          </>
        }
        subtitle="Acompañamos a propietarios en cada etapa: valoración rigurosa, reportaje profesional, filtro financiero de compradores y gestión legal completa de principio a fin."
      >
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#valoracion"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors duration-150"
          >
            <Calculator className="w-4 h-4" aria-hidden="true" />
            <span>Valorar mi vivienda gratis</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="tel:678530312"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-zinc-900 bg-white/95 hover:bg-white border border-zinc-300 hover:border-zinc-400 rounded-xl transition-colors duration-150 shadow-xs"
          >
            <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Llamar a HuNo</span>
          </a>
        </div>

        {/* 3 Pillars beneath buttons */}
        <div className="mt-10 pt-8 border-t border-zinc-300/80 flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-zinc-900">
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>Valoración gratuita en 24-48h</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>Gestión legal y herencias</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>Filtro de solvencia previo</span>
          </div>
        </div>
      </PageHero>

      {/* 2. Interactive Valuation Section */}
      <section id="valoracion" className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200 scroll-mt-20`}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Solicite la valoración profesional de su inmueble
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Complete los datos básicos de su vivienda y nuestros asesores le entregarán un informe personalizado basado en testigos reales de venta en su zona de Gijón.
            </p>
          </div>

          {/* Embed Valuation Form */}
          <ValuationForm />
        </div>
      </section>

      {/* 3. The 4 Cards Method (with individual generated photographs) */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              El Método HuNo
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Cómo vendemos su vivienda
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Un sistema probado durante más de dos décadas en Gijón, diseñado para conseguir el mejor precio de mercado y evitar pérdidas de tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col bg-white border border-zinc-200/90 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all duration-300"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950 group-hover:text-accent transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Differentiators: 2-Column with large image on right */}
      <section className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: 4 key advantages */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                Por qué elegir HuNo
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                La tranquilidad de vender <span className="text-accent">con expertos</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                La diferencia entre vender con éxito o sufrir meses de incertidumbre está en el rigor legal, el filtro de compradores y la atención personalizada de la gerencia.
              </p>

              <div className="mt-8 space-y-4">
                {ADVANTAGES.map((adv) => {
                  const Icon = adv.icon;
                  return (
                    <div
                      key={adv.title}
                      className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 flex items-start gap-4 hover:border-zinc-300 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shrink-0 shadow-2xs mt-0.5">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                          {adv.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm border border-zinc-200/90 bg-zinc-100">
                <img
                  src="/images/oferta-inmobiliaria.webp"
                  alt="Venta de inmuebles con HuNo en Asturias"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Agent / Trust Card: Natalia Arto */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xs">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
              {/* Agent Photo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-accent/30 shadow-md shrink-0 bg-zinc-100">
                <img
                  src="/NataliaArto.jpg"
                  alt="Natalia Arto - Gerencia HuNo Grupo Inmobiliario"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio & Direct Contacts */}
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Gerencia · HuNo Grupo Inmobiliario
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
                  Natalia Arto
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Asesoramiento directo y personalizado para propietarios en Gijón y Asturias. Gestión integral de venta, estudio de viabilidad, resolución de herencias y acompañamiento profesional sin intermediarios.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 border-t border-zinc-100">
                  <a
                    href="tel:678530312"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Llamar: 678 53 03 12</span>
                  </a>

                  <a
                    href="https://wa.me/34678530312?text=Hola%20Natalia,%20le%20contacto%20porque%20estoy%20interesado/a%20en%20vender%20mi%20vivienda%20en%20Gij%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp directo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section: 2-Column with image & collapsible accordion */}
      <section className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, help card, and agency image */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                  Dudas Comunes
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                  Preguntas frecuentes de propietarios
                </h2>
                <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                  Todo lo que necesita saber antes de poner su piso o casa a la venta en Gijón. Transparencia absoluta desde el primer día.
                </p>
              </div>

              {/* Photo of agency consultation */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm bg-zinc-100">
                <img
                  src="/images/nosotros-agencia.webp"
                  alt="Asesoramiento inmobiliario en Gijón"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quick direct assistance card */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-zinc-900">¿Tiene alguna duda específica?</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Llámenos sin compromiso</p>
                </div>
                <a
                  href="tel:678530312"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-2xs transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>678 53 03 12</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Collapsible Accordion */}
            <div className="lg:col-span-7 space-y-3.5">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-zinc-200/90 bg-white overflow-hidden transition-all duration-200 open:shadow-xs open:border-zinc-300"
                  open={index === 0}
                >
                  <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden text-base sm:text-lg font-bold text-zinc-950 group-hover:text-accent transition-colors">
                    <span className="pr-4">{faq.q}</span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 group-open:bg-red-50 group-open:border-red-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-zinc-500 group-open:text-accent group-open:rotate-180 transition-transform duration-200" />
                    </div>
                  </summary>
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <ContactCTA
        title="¿Preparado para dar el primer paso con su inmueble?"
        subtitle="Hablemos hoy mismo sobre su vivienda en Gijón. Le asesoraremos con honestidad, rigor y sin ningún compromiso."
      />
    </div>
  );
}

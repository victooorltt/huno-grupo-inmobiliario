import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  Award,
  KeyRound,
  Calculator,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  FileCheck,
  Camera,
  Users,
  CheckCircle2,
  HelpCircle,
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

const STEPS = [
  {
    step: '01',
    title: 'Valoración Real de Mercado',
    description:
      'Analizamos datos de compraventas reales escrituradas en su zona de Gijón. Fijamos un precio competitivo para maximizar el beneficio sin quemar el inmueble.',
    icon: TrendingUp,
  },
  {
    step: '02',
    title: 'Reportaje y Difusión Multicanal',
    description:
      'Realizamos un reportaje fotográfico profesional, redactamos descripciones atractivas y posicionamos su vivienda de forma destacada en los principales portales.',
    icon: Camera,
  },
  {
    step: '03',
    title: 'Filtro Riguroso de Compradores',
    description:
      'Estudiamos la viabilidad financiera e hipotecaria de cada interesado antes de concertar visitas. Solo visitas de compradores reales con solvencia acreditada.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Gestión Legal, Herencias y Notaría',
    description:
      'Redactamos contratos de arras con total seguridad jurídica, resolvemos trámites de herencias o plusvalías y le acompañamos hasta la firma notarial.',
    icon: Scale,
  },
];

const ADVANTAGES = [
  {
    title: 'Trato directo con la gerencia',
    description:
      'En HuNo su inmueble no pasa de mano en mano entre comerciales novatos. Natalia Arto gestiona y supervisa personalmente cada operación.',
    icon: Award,
  },
  {
    title: 'Filtro financiero previo',
    description:
      'Evitamos visitas innecesarias de curiosos. Evaluamos previamente la capacidad de compra y preaprobación de hipoteca de cada demandante.',
    icon: ShieldCheck,
  },
  {
    title: 'Especialistas en herencias y trámites complejos',
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
    a: 'Con una valoración adecuada a precios reales de mercado y un buen reportaje fotográfico, el plazo medio de venta en Gijón suele situarse entre 30 y 90 días. Fijar un precio inflado al inicio es el principal motivo por el que muchos inmuebles se estancan.',
  },
  {
    q: '¿La valoración de mi vivienda tiene algún coste o compromiso?',
    a: 'No, la valoración profesional de HuNo Grupo Inmobiliario es 100% gratuita y sin ningún tipo de compromiso. Le entregaremos un informe detallado con testigos reales de venta en su barrio.',
  },
  {
    q: '¿Qué ocurre si el inmueble proviene de una herencia con varios herederos?',
    a: 'Es una de nuestras principales especialidades. Nos encargamos de coordinar la documentación, la aceptación de herencia, el cálculo de la plusvalía municipal y la mediación entre herederos para que la venta se complete de forma ordenada y pacífica.',
  },
  {
    q: '¿Qué documentación necesito para poner la vivienda a la venta?',
    a: 'Inicialmente solo requerimos la copia de la escritura de propiedad (o nota simple) y el DNI de los titulares. Nosotros le ayudamos a tramitar el Certificado de Eficiencia Energética, la cédula de habitabilidad y los certificados de comunidad y deuda cero.',
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
            <span>Llamar a Natalia Arto</span>
          </a>
        </div>

        {/* 4 Pillars beneath buttons */}
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

      {/* 2. Step 1: Interactive Valuation Form Section */}
      <section id="valoracion" className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200 scroll-mt-20`}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Paso 1 · Sin compromiso
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
              Solicite la valoración profesional de su inmueble
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Complete los datos básicos de su vivienda y nuestros asesores le entregarán un informe personalizado basado en el mercado real de Gijón y Asturias.
            </p>
          </div>

          {/* Embed Valuation Form */}
          <ValuationForm />
        </div>
      </section>

      {/* 3. The 4 Steps Method */}
      <section className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              El Método HuNo
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Cómo vendemos su vivienda en 4 pasos
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Un sistema transparente, riguroso y probado durante más de dos décadas en Gijón, diseñado para vender al mejor precio y evitar dolores de cabeza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200/90 flex flex-col justify-between hover:border-zinc-300 hover:shadow-xs transition-all duration-150"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-black text-accent font-mono tracking-tight">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-accent shadow-2xs">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Sell with HuNo vs Other Agencies */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Diferenciales
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Por qué los propietarios eligen HuNo Grupo Inmobiliario
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              La diferencia entre vender con tranquilidad o sufrir meses de incertidumbre está en la experiencia, la cercanía y el rigor legal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ADVANTAGES.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs flex items-start gap-5 hover:border-zinc-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                      {adv.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Direct Agent / Trust Card: Natalia Arto */}
      <section className={`${tokens.sectionSpacing} bg-white border-b border-zinc-200`}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xs">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
              {/* Agent Photo */}
              <div className="w-24 h-24 sm:w-28 sm:sm:h-28 rounded-full overflow-hidden border-2 border-accent/30 shadow-md shrink-0 bg-white">
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
                <blockquote className="mt-4 text-sm sm:text-base text-zinc-700 italic leading-relaxed border-l-2 border-accent/40 pl-4 my-4">
                  &ldquo;Vender una propiedad es una de las decisiones más importantes de su vida. Mi compromiso personal es asesorarle con la máxima honestidad y rigor, protegiendo su patrimonio como si fuera el mío propio.&rdquo;
                </blockquote>

                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 border-t border-zinc-200">
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

      {/* 6. FAQ Section */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Dudas Comunes
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Preguntas frecuentes de propietarios
            </h2>
            <p className="mt-3 text-base text-zinc-600 max-w-xl mx-auto">
              Todo lo que necesita saber antes de poner su piso a la venta en Gijón.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs"
              >
                <div className="flex items-start gap-3.5">
                  <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

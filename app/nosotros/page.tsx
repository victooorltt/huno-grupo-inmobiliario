import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UserCheck,
  Scale,
  Camera,
  Landmark,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | HuNo Grupo Inmobiliario en Gijón',
  description:
    'Conozca a HuNo Grupo Inmobiliario: más de dos décadas de experiencia inmobiliaria en Gijón y Asturias. Servicio personalizado, asesoramiento legal y transparencia garantizada.',
};

const FEATURES = [
  {
    title: 'Gestión Personalizada',
    description:
      'HuNo Grupo Inmobiliario le garantiza un trato personalizado, con un asesor profesional que estudie sus necesidades, para ofrecerle las mejores propuestas para el buen fin de los servicios contratados.',
    icon: UserCheck,
  },
  {
    title: 'Asesoramiento Legal',
    description:
      'En todas las fases, como la revisión nota simple, estudios de cargas, creación de contratos en base a la legislación vigente, análisis de las formas de pago y muchos otros aspectos.',
    icon: Scale,
  },
  {
    title: 'Publicidad Garantizada',
    description:
      'Le ofrecemos un completo reportaje fotográfico y la publicación de su inmueble en portales inmobiliarios y red de colaboradores para conseguir una máxima difusión.',
    icon: Camera,
  },
  {
    title: 'Estudio Financiero',
    description:
      'Nuestros asesores le realizarán un estudio de viabilidad financiera, para aconsejarle de su capacidad de compra y de las posibilidades de financiación del mercado.',
    icon: Landmark,
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <PageHero
        variant="gradient"
        imageSrc="/images/nosotros-hero.webp"
        imageAlt="Sobre HuNo Grupo Inmobiliario"
        imagePosition="right center"
        minHeight="min-h-[520px] lg:min-h-[620px]"
        contentMaxWidth="max-w-xl lg:max-w-[510px]"
        overlay={
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-35% to-white/10 md:from-white md:via-white/85 md:via-28% md:to-transparent md:to-50%"
            aria-hidden="true"
          />
        }
        title={
          <>
            <span className="block sm:whitespace-nowrap">HuNo Grupo Inmobiliario</span>
            <span className="block sm:whitespace-nowrap text-accent">Su agencia de confianza</span>
          </>
        }
        subtitle="Le ofrecemos un servicio personalizado y adaptado a sus necesidades. Más de dos décadas de experiencia a su servicio en Asturias."
      />

      {/* Block 1: Bienvenidos a HuNo Grupo Inmobiliario */}
      <section className={`${tokens.sectionSpacing} border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Bienvenidos a{' '}
                <span className="text-accent">HuNo Grupo Inmobiliario</span>
              </h2>

              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed">
                <p>
                  En HuNo Grupo Inmobiliario representamos más de dos décadas de
                  experiencia en el sector inmobiliario de Asturias. Nacemos de una
                  ilusión compartida por ofrecer la máxima garantía, cercanía y
                  transparencia, priorizando siempre los intereses de quienes confían en
                  nosotros para hacer realidad sus proyectos inmobiliarios.
                </p>

                <p>
                  No solo intermediamos propiedades; construimos relaciones
                  duraderas basadas en la confianza, el rigor jurídico y el trato
                  personalizado. Le acompañamos en cada etapa del proceso con
                  profesionalismo, para que su decisión sea segura y satisfactoria.
                </p>
              </div>

              {/* 4 Core Value Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs">
                  <p className="text-xl font-bold text-zinc-950">Más de 20 años</p>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium leading-relaxed">
                    De experiencia en el mercado inmobiliario asturiano
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs">
                  <p className="text-xl font-bold text-zinc-950">100% Transparencia</p>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium leading-relaxed">
                    Sin letra pequeña ni sorpresas en cada gestión documental
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs">
                  <p className="text-xl font-bold text-zinc-950">Trato Humano</p>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium leading-relaxed">
                    Asesoramiento cercano y a la medida de sus metas reales
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-2xs">
                  <p className="text-xl font-bold text-zinc-950">Cobertura Integral</p>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium leading-relaxed">
                    Pisos, casas, chalets, fincas y locales en Gijón y Asturias
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-150 shadow-xs hover:shadow-md"
                >
                  <span>Contactar con nosotros</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md bg-zinc-100">
                <img
                  src="/images/nosotros-agencia.webp"
                  alt="Sede de HuNo Grupo Inmobiliario en Gijón"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Servicio personalizado y asesoramiento legal. HuNo GRUPO INMOBILIARIO en Gijón */}
      <section className={`${tokens.sectionSpacing} bg-zinc-50 border-b border-zinc-200`}>
        <div className={tokens.container}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
              Servicio personalizado y asesoramiento legal
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Ponemos a su disposición nuestro equipo de profesionales para garantizar la máxima seguridad, tranquilidad y rentabilidad en cada gestión inmobiliaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared CTA component */}
      <ContactCTA />
    </div>
  );
}

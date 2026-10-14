import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { InmueblesCatalog } from '@/components/InmueblesCatalog';
import { PROPERTIES } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Inmuebles en Asturias | HuNo Grupo Inmobiliario',
  description:
    'Descubra nuestra oferta inmobiliaria de pisos, casas, fincas y locales en Gijón, Oviedo y Somiedo. HuNo Grupo Inmobiliario le asesora y le acompaña.',
};

export default function InmueblesPage() {
  return (
    <div>
      {/* 1. Page Hero */}
      <PageHero
        variant="overlay"
        imageSrc="/images/inmuebles-hero.webp"
        imageAlt="Inmuebles en Asturias"
        align="center"
        minHeight="min-h-[520px] lg:min-h-[620px]"
        contentMaxWidth="max-w-2xl"
        subtitleClassName="text-zinc-900 font-medium text-base sm:text-lg lg:text-xl max-w-xl mx-auto"
        overlay={
          <>
            {/* Global gentle contrast wash to let photo details and vibrant colors shine */}
            <div
              className="absolute inset-0 bg-white/20"
              aria-hidden="true"
            />
            {/* Soft, diffused radial glow behind centered H1 + subtitle for flawless legibility without visible boxes */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,_rgba(255,255,255,0.92)_0%,_rgba(255,255,255,0.72)_40%,_rgba(255,255,255,0)_80%)] pointer-events-none"
              aria-hidden="true"
            />
          </>
        }
        title={
          <>
            Inmuebles en <span className="text-accent">Asturias</span>
          </>
        }
        subtitle="Descubra nuestra oferta de pisos, casas y fincas en Gijón, Oviedo y toda Asturias."
      />

      {/* 2. Interactive Filter Bar, Count & Property Cards Grid */}
      <InmueblesCatalog properties={PROPERTIES} />

      {/* 3. Contact CTA */}
      <ContactCTA />
    </div>
  );
}

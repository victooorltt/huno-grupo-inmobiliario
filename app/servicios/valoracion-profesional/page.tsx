import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactCTA } from '@/components/ContactCTA';
import { ValuationForm } from '@/components/ValuationForm';

export const metadata: Metadata = {
  title: 'Valoración Profesional Gratuita | HuNo Grupo Inmobiliario',
  description:
    'Le valoramos su inmueble de forma gratuita y sin compromiso en Gijón y Asturias. Informe personalizado y profesional basado en mercado real y testigos de referencia.',
};

export default function ValoracionProfesionalPage() {
  return (
    <div className="bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        variant="gradient"
        imageSrc="/images/valoracion-profesional.webp"
        imageAlt="Valoración Profesional HuNo"
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
            <span className="block sm:whitespace-nowrap">Le valoramos su inmueble</span>
            <span className="block sm:whitespace-nowrap text-accent">de forma gratuita</span>
          </>
        }
        subtitle="Informe personalizado y profesional basado en el mercado real y testigos de referencia, sin ningún compromiso."
      />

      {/* Block 1: Interactive Valuation Form */}
      <section className="py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Solicite la valoración de su inmueble
            </h2>
            <p className="mt-3 text-base text-zinc-600 max-w-2xl mx-auto">
              Complete los siguientes datos y nuestro equipo le entregará un estudio pormenorizado
              adaptado a la realidad del mercado actual.
            </p>
          </div>

          <ValuationForm />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

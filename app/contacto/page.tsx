import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageCircle,
  Building2,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Contacto | HuNo Grupo Inmobiliario en Gijón',
  description:
    'Contacte con HuNo Grupo Inmobiliario. Estamos en C/ Adosinda 15, Gijón. Teléfono: 678 53 03 12. Asesoramiento inmobiliario profesional y personalizado.',
};

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <PageHero
        variant="overlay"
        imageSrc="/images/contacto-hero.webp"
        imageAlt="Contacto HuNo Grupo Inmobiliario"
        minHeight="min-h-[520px] lg:min-h-[620px]"
        title={
          <>
            Contacta con <span className="text-accent">nosotros</span>
          </>
        }
        subtitle="Díganos lo que necesita, estaremos encantados de ayudarle, le ofrecemos un servicio profesional y legal en todas nuestras gestiones."
      />

      {/* Main 2-Column Section (Form + Contact Details) */}
      <section className={tokens.sectionSpacing}>
        <div className={tokens.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details & Map Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Information Card */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200">
                  <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 leading-tight">
                      HuNo Grupo Inmobiliario
                    </h2>
                    <p className="text-xs text-zinc-500">
                      ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL
                    </p>
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-4 text-sm">
                  {/* Dirección */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-600 mt-0.5">
                      <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        Dirección
                      </p>
                      <p className="font-medium text-zinc-900 mt-0.5">
                        Adosinda 15 Gijon, 33202 (Asturias)
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-600 mt-0.5">
                      <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        Teléfono
                      </p>
                      <a
                        href="tel:678530312"
                        className="font-medium text-zinc-900 hover:text-accent transition-colors mt-0.5 block"
                      >
                        678 53 03 12
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-600 mt-0.5">
                      <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:hunogestioninmobiliaria@gmail.com"
                        className="font-medium text-zinc-900 hover:text-accent transition-colors break-all mt-0.5 block"
                      >
                        hunogestioninmobiliaria@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-600 mt-0.5">
                      <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        Atención al cliente
                      </p>
                      <p className="font-medium text-zinc-900 mt-0.5">
                        Lunes a Viernes: 9:30 – 14:00 | 16:30 – 20:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-6 border-t border-zinc-200 space-y-2.5">
                  <a
                    href="tel:678530312"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-accent hover:bg-[#d90000] rounded-xl transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Llamar ahora</span>
                  </a>

                  <a
                    href="https://wa.me/34678530312?text=Hola,%20le%20contacto%20desde%20la%20p%C3%A1gina%20web%20de%20HuNo%20Grupo%20Inmobiliario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Contactar por WhatsApp</span>
                  </a>

                  <a
                    href="mailto:hunogestioninmobiliaria@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                    <span>Enviar email</span>
                  </a>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="p-4 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                    <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span>C/ Adosinda 15, Gijón</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Calle+Adosinda+15,+33202+Gijon,+Asturias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-[#d90000]"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>

                <div className="relative w-full h-64 bg-zinc-100">
                  <iframe
                    title="Ubicación HuNo Grupo Inmobiliario en Gijón"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.828551717282!2d-5.6560416!3d43.5358056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367c828d54c0e9%3A0x6b53db933f7aa3c0!2sC.%20Adosinda%2C%2015%2C%2033202%20Gij%C3%B3n%2C%20Asturias!5e0!3m2!1ses!2ses!4v1713000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

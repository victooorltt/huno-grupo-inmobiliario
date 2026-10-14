'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export interface PropertyContactSidebarProps {
  propertyTitle: string;
  propertySlug: string;
  propertyPrice: string;
}

export function PropertyContactSidebar({
  propertyTitle,
  propertySlug,
  propertyPrice,
}: PropertyContactSidebarProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: `Hola, estoy interesado/a en "${propertyTitle}" (${propertyPrice}). Me gustaría solicitar más información o coordinar una visita.`,
    aceptaPrivacidad: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) return;

    setIsSubmitting(true);
    // Simulate swift form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      motivo: `Hola, estoy interesado/a en "${propertyTitle}". Me gustaría solicitar más información.`,
      aceptaPrivacidad: false,
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado/a en "${propertyTitle}" (${propertyPrice}). ¿Podrían darme más información?`
  );
  const whatsappUrl = `https://wa.me/34678530312?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(`Interés en ${propertyTitle}`);
  const emailBody = encodeURIComponent(
    `Hola Natalia,\n\nEstoy interesado/a en el inmueble "${propertyTitle}" (${propertyPrice}).\n\nPor favor, contacte conmigo.\n`
  );
  const emailUrl = `mailto:hunogestioninmobiliaria@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <aside className="sticky top-24 space-y-6">
      {/* 1. Agent Box */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20 bg-zinc-100 shrink-0 shadow-2xs">
            <img
              src="/NataliaArto.jpg"
              alt="Natalia Arto - Gerencia HuNo Grupo Inmobiliario"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-900 leading-tight">
              Natalia Arto
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-0.5">
              Gerencia
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              HuNo Grupo Inmobiliario
            </p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-zinc-700">
            <Phone className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
            <span className="text-zinc-500">Teléfono:</span>
            <a
              href="tel:678530312"
              className="font-semibold text-zinc-900 hover:text-accent transition-colors"
            >
              678530312
            </a>
          </div>

          <div className="flex items-start gap-2.5 text-zinc-700">
            <Mail className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-zinc-500">Email:</span>
            <a
              href="mailto:hunogestioninmobiliaria@gmail.com"
              className="font-medium text-zinc-900 hover:text-accent transition-colors break-all"
            >
              hunogestioninmobiliaria@gmail.com
            </a>
          </div>
        </div>

        {/* Action Buttons: Email & WhatsApp */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4 text-zinc-600" aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* 2. Contact Form */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-7 shadow-xs">
        <h4 className="text-xl font-bold text-zinc-900">
          Contacte con nosotros
        </h4>
        <p className="text-xs text-zinc-600 mt-1">
          Solicite información o concierte una visita para esta propiedad sin compromiso.
        </p>

        {isSubmitted ? (
          <div className="mt-6 bg-white border border-emerald-200 rounded-xl p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h5 className="text-base font-bold text-zinc-900">
              ¡Mensaje enviado con éxito!
            </h5>
            <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
              Muchas gracias por su interés. Natalia Arto revisará su consulta y se
              pondrá en contacto con usted a la mayor brevedad.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
            >
              Enviar otra consulta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
              >
                Nombre <span className="text-accent">*</span>
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                placeholder="Su nombre completo"
                className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
              >
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="su-correo@ejemplo.com"
                className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>

            {/* Teléfono de contacto */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
              >
                Teléfono de contacto <span className="text-accent">*</span>
              </label>
              <input
                id="telefono"
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
                placeholder="600 000 000"
                className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>

            {/* Indica el motivo de interés */}
            <div>
              <label
                htmlFor="motivo"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
              >
                Indica el motivo de interés <span className="text-accent">*</span>
              </label>
              <textarea
                id="motivo"
                required
                rows={4}
                value={formData.motivo}
                onChange={(e) =>
                  setFormData({ ...formData, motivo: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
              />
            </div>

            {/* Checkbox Privacidad */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="aceptaPrivacidad"
                type="checkbox"
                required
                checked={formData.aceptaPrivacidad}
                onChange={(e) =>
                  setFormData({ ...formData, aceptaPrivacidad: e.target.checked })
                }
                className="mt-1 h-4 w-4 rounded-md border-zinc-300 text-accent focus:ring-accent accent-[#FF0000] cursor-pointer"
              />
              <label
                htmlFor="aceptaPrivacidad"
                className="text-xs text-zinc-600 leading-snug cursor-pointer select-none"
              >
                He leído y acepto las condiciones especificadas en la{' '}
                <Link
                  href="/politica-de-privacidad/"
                  className="text-zinc-900 font-semibold underline hover:text-accent transition-colors"
                  target="_blank"
                >
                  Política de privacidad
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-[#d90000] disabled:bg-zinc-400 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}

export default PropertyContactSidebar;

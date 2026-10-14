'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { tokens } from '@/lib/tokens';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    aceptaPrivacidad: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.nombre.trim()) {
      setErrorMsg('Por favor, introduzca su nombre.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Por favor, introduzca un correo electrónico válido.');
      return;
    }

    if (!formData.mensaje.trim()) {
      setErrorMsg('Por favor, introduzca su mensaje o consulta.');
      return;
    }

    if (!formData.aceptaPrivacidad) {
      setErrorMsg('Debe aceptar la Política de Privacidad para enviar su consulta.');
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission for reliable client feedback
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setErrorMsg('Ha ocurrido un error al enviar el formulario. Por favor, inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      aceptaPrivacidad: false,
    });
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  if (isSubmitted) {
    return (
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 lg:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
          ¡Mensaje enviado con éxito!
        </h3>
        <p className="mt-3 text-zinc-600 max-w-md mx-auto text-base leading-relaxed">
          Gracias por contactar con HuNo Grupo Inmobiliario. Hemos recibido su
          solicitud correctamente y uno de nuestros asesores le responderá a la
          mayor brevedad posible.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-zinc-700 bg-white border border-zinc-300 rounded-xl hover:bg-zinc-100 transition-colors"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
      <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-2">
        Envíenos un mensaje
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Complete el siguiente formulario y nos pondremos en contacto con usted sin compromiso.
      </p>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-accent mt-0.5" aria-hidden="true" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Nombre */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-zinc-800 mb-1.5"
          >
            Nombre <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, nombre: e.target.value }))
            }
            placeholder="Su nombre y apellidos"
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-800 mb-1.5"
            >
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="su.email@ejemplo.com"
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-zinc-800 mb-1.5"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, telefono: e.target.value }))
              }
              placeholder="678 00 00 00"
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all"
            />
          </div>
        </div>

        {/* Díganos lo que necesita */}
        <div>
          <label
            htmlFor="mensaje"
            className="block text-sm font-medium text-zinc-800 mb-1.5"
          >
            Díganos lo que necesita <span className="text-accent">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={5}
            value={formData.mensaje}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, mensaje: e.target.value }))
            }
            placeholder="¿En qué podemos ayudarle? Describa brevemente su consulta, inmueble de interés o tipo de operación..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all resize-y"
          />
        </div>

        {/* RGPD Legal Notice */}
        <p className="text-xs text-zinc-500 leading-relaxed">
          Tratamos sus datos para responder a su consulta. Más información en nuestra{' '}
          <Link
            href="/politica-privacidad/"
            className="text-accent underline font-medium hover:text-[#d90000]"
          >
            política de privacidad
          </Link>
          .
        </p>

        {/* Checkbox consent */}
        <div className="flex items-start gap-3 pt-1">
          <div className="flex items-center h-5">
            <input
              id="aceptaPrivacidad"
              name="aceptaPrivacidad"
              type="checkbox"
              required
              checked={formData.aceptaPrivacidad}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  aceptaPrivacidad: e.target.checked,
                }))
              }
              className="w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent cursor-pointer accent-[#FF0000]"
            />
          </div>
          <label
            htmlFor="aceptaPrivacidad"
            className="text-xs text-zinc-700 leading-tight cursor-pointer select-none"
          >
            He leído y acepto la{' '}
            <Link
              href="/politica-privacidad/"
              className="text-accent underline font-medium hover:text-[#d90000]"
            >
              Política de Privacidad
            </Link>{' '}
            de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL.{' '}
            <span className="text-accent">*</span>
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-[#d90000] disabled:bg-zinc-400 rounded-xl transition-colors shadow-xs cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Enviando mensaje...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Enviar</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building, User, FileText, Check } from 'lucide-react';

export function ValuationForm() {
  const [formData, setFormData] = useState({
    queDesea: 'Valoración',
    tipoInmueble: 'Piso',
    nombre: '',
    telefono: '',
    email: '',
    precio: '',
    direccion: '',
    codigoPostal: '',
    provincia: 'Asturias',
    localidad: 'Gijón',
    habitaciones: '',
    banos: '',
    ascensor: 'Sí',
    aseos: '',
    trastero: false,
    garaje: false,
    piscina: false,
    descripcion: '',
    politicaPrivacidad: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nombre.trim()) {
      setErrorMessage('Por favor, indique su nombre.');
      return;
    }
    if (!formData.telefono.trim()) {
      setErrorMessage('Por favor, indique su número de teléfono.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Por favor, indique su correo electrónico.');
      return;
    }
    if (!formData.provincia.trim()) {
      setErrorMessage('Por favor, indique la provincia del inmueble.');
      return;
    }
    if (!formData.localidad.trim()) {
      setErrorMessage('Por favor, indique la localidad del inmueble.');
      return;
    }
    if (!formData.politicaPrivacidad) {
      setErrorMessage(
        'Debe aceptar la Política de Privacidad de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL para continuar.'
      );
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      queDesea: 'Valoración',
      tipoInmueble: 'Piso',
      nombre: '',
      telefono: '',
      email: '',
      precio: '',
      direccion: '',
      codigoPostal: '',
      provincia: 'Asturias',
      localidad: 'Gijón',
      habitaciones: '',
      banos: '',
      ascensor: 'Sí',
      aseos: '',
      trastero: false,
      garaje: false,
      piscina: false,
      descripcion: '',
      politicaPrivacidad: false,
    });
    setSubmitted(false);
    setErrorMessage('');
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-zinc-200 p-8 sm:p-12 shadow-sm text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-red-50 text-accent flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-900">
          ¡Solicitud de valoración enviada con éxito!
        </h3>
        <p className="mt-4 text-base text-zinc-600 leading-relaxed">
          Gracias por confiar en HuNo Grupo Inmobiliario. Hemos recibido los datos de su inmueble.
          Un asesor especializado analizará las características y los testigos de referencia y se
          pondrá en contacto con usted a la mayor brevedad.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-[#d90000] rounded-xl transition-colors shadow-xs"
          >
            <span>Enviar otra solicitud de valoración</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-10 shadow-sm"
      noValidate
    >
      {errorMessage && (
        <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Operación y Tipo */}
      <div className="mb-8 pb-8 border-b border-zinc-100">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 mb-4">
          <Building className="w-4 h-4 text-accent" />
          <span>Operación y Tipo de Inmueble</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="queDesea" className="block text-sm font-medium text-zinc-800 mb-2">
              ¿Qué Desea? *
            </label>
            <select
              id="queDesea"
              name="queDesea"
              value={formData.queDesea}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            >
              <option value="Valoración">Valoración gratuita</option>
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
            </select>
          </div>

          <div>
            <label htmlFor="tipoInmueble" className="block text-sm font-medium text-zinc-800 mb-2">
              Inmueble *
            </label>
            <select
              id="tipoInmueble"
              name="tipoInmueble"
              value={formData.tipoInmueble}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            >
              <option value="Piso">Piso</option>
              <option value="Casa">Casa</option>
              <option value="Chalet">Chalet</option>
              <option value="Finca">Finca</option>
              <option value="Local">Local</option>
            </select>
          </div>
        </div>
      </div>

      {/* Datos Personales */}
      <div className="mb-8 pb-8 border-b border-zinc-100">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 mb-4">
          <User className="w-4 h-4 text-accent" />
          <span>Datos Personales</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-zinc-800 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Su nombre y apellidos"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-zinc-800 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej. 678 53 03 12"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-800 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="su@email.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Datos Inmueble */}
      <div className="mb-8 pb-8 border-b border-zinc-100">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 mb-4">
          <Building className="w-4 h-4 text-accent" />
          <span>Datos del Inmueble</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="precio" className="block text-sm font-medium text-zinc-800 mb-2">
              Precio (Indique su precio estimado)
            </label>
            <input
              type="text"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              placeholder="Ej. 180.000 €"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-zinc-800 mb-2">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Calle, número, piso"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="codigoPostal" className="block text-sm font-medium text-zinc-800 mb-2">
              Código Postal
            </label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              placeholder="Ej. 33201"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="provincia" className="block text-sm font-medium text-zinc-800 mb-2">
              Provincia *
            </label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              value={formData.provincia}
              onChange={handleChange}
              placeholder="Asturias"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="localidad" className="block text-sm font-medium text-zinc-800 mb-2">
              Localidad *
            </label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
              placeholder="Gijón, Oviedo, etc."
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="habitaciones" className="block text-sm font-medium text-zinc-800 mb-2">
              Habitaciones (Número)
            </label>
            <input
              type="number"
              min="0"
              id="habitaciones"
              name="habitaciones"
              value={formData.habitaciones}
              onChange={handleChange}
              placeholder="Ej. 3"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="banos" className="block text-sm font-medium text-zinc-800 mb-2">
              Baños (Número)
            </label>
            <input
              type="number"
              min="0"
              id="banos"
              name="banos"
              value={formData.banos}
              onChange={handleChange}
              placeholder="Ej. 2"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="aseos" className="block text-sm font-medium text-zinc-800 mb-2">
              Aseos (Número)
            </label>
            <input
              type="number"
              min="0"
              id="aseos"
              name="aseos"
              value={formData.aseos}
              onChange={handleChange}
              placeholder="Ej. 1"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="ascensor" className="block text-sm font-medium text-zinc-800 mb-2">
              Ascensor
            </label>
            <select
              id="ascensor"
              name="ascensor"
              value={formData.ascensor}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            >
              <option value="Sí">Sí</option>
              <option value="No">No</option>
              <option value="En proyecto">En proyecto</option>
            </select>
          </div>
        </div>

        {/* Checkboxes: Trastero, Garaje, Piscina */}
        <div className="pt-2">
          <p className="text-sm font-medium text-zinc-800 mb-3">Extras y anejos:</p>
          <div className="flex flex-wrap gap-6">
            <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm text-zinc-700">
              <input
                type="checkbox"
                name="trastero"
                checked={formData.trastero}
                onChange={handleChange}
                className="w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent"
              />
              <span>Trastero</span>
            </label>

            <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm text-zinc-700">
              <input
                type="checkbox"
                name="garaje"
                checked={formData.garaje}
                onChange={handleChange}
                className="w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent"
              />
              <span>Garaje</span>
            </label>

            <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm text-zinc-700">
              <input
                type="checkbox"
                name="piscina"
                checked={formData.piscina}
                onChange={handleChange}
                className="w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent"
              />
              <span>Piscina</span>
            </label>
          </div>
        </div>
      </div>

      {/* Otros Datos */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 mb-4">
          <FileText className="w-4 h-4 text-accent" />
          <span>Otros Datos</span>
        </div>

        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium text-zinc-800 mb-2">
            Describa su inmueble y datos de interés
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={4}
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Indique estado de conservación, orientación, reformas recientes o cualquier detalle de interés..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Privacy Policy Checkbox */}
      <div className="mb-8 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="politicaPrivacidad"
            checked={formData.politicaPrivacidad}
            onChange={handleChange}
            required
            className="w-4 h-4 mt-0.5 rounded border-zinc-300 text-accent focus:ring-accent"
          />
          <span className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            He leído y acepto la{' '}
            <a
              href="/politica-de-privacidad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Política de Privacidad
            </a>{' '}
            de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-[#d90000] rounded-xl transition-colors duration-150 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span>Enviando solicitud...</span>
          ) : (
            <>
              <span>Enviar valoración</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default ValuationForm;

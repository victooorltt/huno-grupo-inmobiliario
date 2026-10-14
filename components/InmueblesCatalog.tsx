'use client';

import { useState, useMemo } from 'react';
import { Search, RotateCcw, SlidersHorizontal, MapPin, Building, Home, Euro, X } from 'lucide-react';
import type { Property } from '@/lib/properties';
import { InmuebleCard } from './InmuebleCard';

export interface InmueblesCatalogProps {
  properties: Property[];
}

const CITIES = ['Todas', 'Gijón', 'Oviedo', 'Somiedo'];
const TYPES = ['Todos', 'Chalet', 'Piso', 'Finca'];
const DEFAULT_MAX_PRICE = 250000;
const MIN_PRICE = 20000;

export function InmueblesCatalog({ properties }: InmueblesCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [selectedType, setSelectedType] = useState('Todos');
  const [maxPrice, setMaxPrice] = useState<number>(DEFAULT_MAX_PRICE);

  const isFiltered =
    searchTerm.trim() !== '' ||
    selectedCity !== 'Todas' ||
    selectedType !== 'Todos' ||
    maxPrice < DEFAULT_MAX_PRICE;

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCity('Todas');
    setSelectedType('Todos');
    setMaxPrice(DEFAULT_MAX_PRICE);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // 1. Keyword search (title, location, city, type)
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const matchesQuery =
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.city.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query);

        if (!matchesQuery) return false;
      }

      // 2. City filter
      if (selectedCity !== 'Todas') {
        const matchesCity =
          property.city.toLowerCase() === selectedCity.toLowerCase() ||
          property.location.toLowerCase().includes(selectedCity.toLowerCase());
        if (!matchesCity) return false;
      }

      // 3. Type filter
      if (selectedType !== 'Todos') {
        const matchesType = property.type
          .toLowerCase()
          .includes(selectedType.toLowerCase());
        if (!matchesType) return false;
      }

      // 4. Max price filter
      if (maxPrice < DEFAULT_MAX_PRICE) {
        if (property.priceNum > maxPrice) return false;
      }

      return true;
    });
  }, [properties, searchTerm, selectedCity, selectedType, maxPrice]);

  const formattedMaxPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(maxPrice);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Filter Bar (Bostak style) */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between gap-4 pb-5 border-b border-zinc-200/80 mb-6">
            <div className="flex items-center gap-2 text-zinc-900 font-semibold text-base sm:text-lg">
              <SlidersHorizontal className="w-5 h-5 text-accent" aria-hidden="true" />
              <span>Filtros de búsqueda</span>
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-600 hover:text-accent transition-colors"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>Restablecer filtros</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Keyword search input */}
            <div>
              <label
                htmlFor="search-input"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-2"
              >
                Búsqueda
              </label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="search-input"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Título, zona o palabra..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                    aria-label="Borrar búsqueda"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* 2. Ciudad filter */}
            <div>
              <label
                htmlFor="city-select"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-2"
              >
                Ciudad
              </label>
              <div className="relative">
                <MapPin
                  className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors cursor-pointer appearance-none"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city === 'Todas' ? 'Todas las ciudades' : city}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* 3. Tipo filter */}
            <div>
              <label
                htmlFor="type-select"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-2"
              >
                Tipo de Inmueble
              </label>
              <div className="relative">
                <Building
                  className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <select
                  id="type-select"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors cursor-pointer appearance-none"
                >
                  {TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type === 'Todos' ? 'Todos los tipos' : type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* 4. Precio máximo (slider + label) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="price-slider"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-600"
                >
                  Precio Máximo
                </label>
                <span className="text-xs font-bold text-accent">
                  {maxPrice >= DEFAULT_MAX_PRICE ? 'Sin límite' : formattedMaxPrice}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="price-slider"
                  type="range"
                  min={MIN_PRICE}
                  max={DEFAULT_MAX_PRICE}
                  step={5000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF0000]"
                />
              </div>
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                <span>20.000 €</span>
                <span>250.000 €+</span>
              </div>
            </div>
          </div>

          {/* Quick Filter Badges Row */}
          <div className="mt-6 pt-5 border-t border-zinc-200/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-zinc-500 mr-1">Filtros rápidos:</span>
            {CITIES.filter((c) => c !== 'Todas').map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(selectedCity === city ? 'Todas' : city)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCity === city
                    ? 'bg-accent text-white shadow-xs'
                    : 'bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100'
                }`}
              >
                {city}
              </button>
            ))}
            {TYPES.filter((t) => t !== 'Todos').map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(selectedType === type ? 'Todos' : type)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-accent text-white shadow-xs'
                    : 'bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Count indicator */}
        <div className="mt-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <div className="font-semibold text-zinc-900 flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
            <span>
              Mostrando {filteredProperties.length}{' '}
              {filteredProperties.length === 1 ? 'inmueble' : 'inmuebles'}
            </span>
          </div>

          {isFiltered && (
            <div className="text-xs text-zinc-500">
              Filtros activos:{' '}
              {[
                searchTerm && `"${searchTerm}"`,
                selectedCity !== 'Todas' && selectedCity,
                selectedType !== 'Todos' && selectedType,
                maxPrice < DEFAULT_MAX_PRICE && `Hasta ${formattedMaxPrice}`,
              ]
                .filter(Boolean)
                .join(' · ')}
            </div>
          )}
        </div>

        {/* Properties Grid or Empty State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <InmuebleCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-12 text-center max-w-xl mx-auto my-8">
            <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-accent mx-auto mb-4">
              <Home className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">
              No hemos encontrado inmuebles
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              No hay propiedades que coincidan con los criterios de búsqueda actuales.
              Pruebe a modificar los filtros o restablecer la búsqueda para ver todas las
              propiedades disponibles.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-[#d90000] rounded-xl transition-colors shadow-xs"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>Restablecer filtros</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default InmueblesCatalog;

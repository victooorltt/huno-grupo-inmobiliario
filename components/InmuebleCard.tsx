import Link from 'next/link';
import { Bed, Bath, Ruler, MapPin } from 'lucide-react';
import type { Property } from '@/lib/properties';

export interface InmuebleCardProps {
  property: Property;
  className?: string;
}

export function InmuebleCard({ property, className = '' }: InmuebleCardProps) {
  return (
    <Link
      href={`/inmuebles/${property.slug}/`}
      className={`group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-200 ${className}`}
    >
      {/* Property Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        <img
          src={property.featuredImage}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-white/95 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md text-zinc-800 shadow-xs">
            {property.type}
          </span>
          <span className="bg-zinc-900/90 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
            {property.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-xs font-medium text-zinc-700 px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
          <MapPin className="w-3 h-3 text-accent shrink-0" aria-hidden="true" />
          <span className="truncate max-w-[200px]">{property.city}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-accent">
              {property.price}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
            {property.title}
          </h3>

          {/* Location detail */}
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-zinc-500">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Specs Meta Row with Bed, Bath, Ruler */}
        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600 font-medium">
          <span className="flex items-center gap-1.5" title="Habitaciones">
            <Bed className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
            <span>
              {property.rooms > 0
                ? `${property.rooms} ${property.rooms === 1 ? 'hab.' : 'habs.'}`
                : 'Consultar'}
            </span>
          </span>

          <span className="flex items-center gap-1.5" title="Baños">
            <Bath className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
            <span>
              {property.baths > 0
                ? `${property.baths} ${property.baths === 1 ? 'baño' : 'baños'}`
                : 'Consultar'}
            </span>
          </span>

          <span className="flex items-center gap-1.5" title="Superficie construida">
            <Ruler className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
            <span>{property.size}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default InmuebleCard;

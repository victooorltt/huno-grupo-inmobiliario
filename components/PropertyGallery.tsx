'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

export interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = images.length;
  if (total === 0) return null;

  const currentImage = images[selectedIndex] || images[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Large Main Display */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 group">
        <img
          src={currentImage}
          alt={`${title} - Foto ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-200 select-none cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        />

        {/* Counter Badge */}
        <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
          Foto {selectedIndex + 1} de {total}
        </div>

        {/* Fullscreen Button */}
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="absolute bottom-4 right-4 bg-zinc-900/80 hover:bg-zinc-900 backdrop-blur-xs text-white p-2 rounded-lg shadow-sm transition-colors"
          aria-label="Ver a pantalla completa"
          title="Ver a pantalla completa"
        >
          <Expand className="w-4 h-4" />
        </button>

        {/* Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {total > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((img, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <button
                key={`${img}-${idx}`}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`relative shrink-0 w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-150 ${
                  isActive
                    ? 'border-accent ring-2 ring-accent/30 scale-102 opacity-100'
                    : 'border-zinc-200 opacity-60 hover:opacity-100 hover:border-zinc-400'
                }`}
                aria-label={`Ver foto ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-zinc-800/80 transition-colors z-50"
            aria-label="Cerrar vista completa"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={`${title} - Foto ${selectedIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl select-none"
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-1.5 rounded-full">
              {selectedIndex + 1} / {total}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyGallery;

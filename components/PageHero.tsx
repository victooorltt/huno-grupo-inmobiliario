import React from 'react';

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'overlay' | 'gradient';
  imagePosition?: string;
  minHeight?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  className?: string;
  overlay?: React.ReactNode;
  contentMaxWidth?: string;
}

export function PageHero({
  title,
  subtitle,
  subtitleClassName,
  imageSrc,
  imageAlt = 'HuNo Grupo Inmobiliario',
  variant = 'overlay',
  imagePosition = 'center',
  minHeight = 'min-h-[380px] lg:min-h-[460px]',
  align,
  children,
  className = '',
  overlay,
  contentMaxWidth,
}: PageHeroProps) {
  const isGradient = variant === 'gradient';
  const effectiveAlign = align || (isGradient ? 'left' : 'center');
  const maxWidthClass = contentMaxWidth || 'max-w-3xl';

  return (
    <section
      className={`relative w-full overflow-hidden flex items-center border-b border-zinc-200 ${minHeight} ${className}`}
    >
      {/* Background Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          fetchPriority="high"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${
            imagePosition.startsWith('object-') ? imagePosition : ''
          }`}
          style={
            !imagePosition.startsWith('object-')
              ? { objectPosition: imagePosition }
              : undefined
          }
        />
      )}

      {/* Overlay layers matching requested specifications */}
      {overlay ? (
        overlay
      ) : isGradient ? (
        // variant="gradient": full-width photo behind with left-to-right fade
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-40% to-white/20 md:from-white md:via-white/80 md:via-30% md:to-transparent md:to-58%"
          aria-hidden="true"
        />
      ) : (
        // variant="overlay": full-width photo behind with subtle white overlay
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/70"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24 w-full">
        <div
          className={`${maxWidthClass} ${
            effectiveAlign === 'center'
              ? 'mx-auto text-center'
              : 'text-left'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-4 text-base sm:text-lg lg:text-xl leading-relaxed ${
                subtitleClassName || 'text-zinc-700'
              } ${contentMaxWidth ? 'max-w-full' : 'max-w-2xl lg:max-w-3xl'} ${
                effectiveAlign === 'center' ? 'mx-auto' : ''
              }`}
            >
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export default PageHero;

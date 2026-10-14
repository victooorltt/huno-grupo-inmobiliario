import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Política de Cookies | HuNo Grupo Inmobiliario',
  description:
    'Información sobre el uso de cookies en el sitio web de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL (HuNo Grupo Inmobiliario).',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header banner */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-12 lg:py-16">
        <div className={tokens.container}>
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-accent mb-4 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Política de Cookies
            </h1>
            <p className="mt-3 text-base text-zinc-600">
              Información clara y transparente sobre el uso de dispositivos de almacenamiento y recuperación de datos (cookies) en nuestro sitio web.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={`${tokens.sectionSpacing}`}>
        <div className={tokens.container}>
          <div className="max-w-3xl space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                1. ¿Qué es una cookie?
              </h2>
              <p>
                Una cookie es un pequeño archivo de texto que un sitio web descarga en su navegador cuando accede a determinadas páginas. Las cookies permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y facilitar una navegación más fluida y personalizada.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                2. ¿Qué tipos de cookies utiliza este sitio web?
              </h2>
              <div className="space-y-4">
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
                  <h3 className="font-bold text-zinc-900 mb-1">
                    Cookies técnicas y estrictamente necesarias
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen, tales como controlar el tráfico y la comunicación de datos, identificar la sesión o recordar elementos de un formulario. Al ser imprescindibles para el funcionamiento técnico de la web, no requieren consentimiento previo.
                  </p>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
                  <h3 className="font-bold text-zinc-900 mb-1">
                    Cookies de personalización o preferencias
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios (por ejemplo, el idioma o la zona geográfica).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                3. Cookies de terceros
              </h2>
              <p>
                Este sitio web puede utilizar servicios de terceros (como mapas interactivos de Google Maps o tipografías optimizadas) que pueden instalar cookies técnicas para la visualización del mapa de localización de nuestras oficinas en C/ Adosinda 15, Gijón.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                4. ¿Cómo configurar o deshabilitar las cookies?
              </h2>
              <p className="mb-3">
                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador o dispositivo móvil:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.
                </li>
                <li>
                  <strong>Apple Safari:</strong> Preferencias &gt; Privacidad.
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                5. Actualización de la política de cookies
              </h2>
              <p>
                ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Aviso Legal | HuNo Grupo Inmobiliario',
  description:
    'Aviso Legal y datos identificativos de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL (HuNo Grupo Inmobiliario), titular del sitio web.',
};

export default function AvisoLegalPage() {
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
              Aviso Legal
            </h1>
            <p className="mt-3 text-base text-zinc-600">
              Información de cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
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
                1. Datos identificativos del titular
              </h2>
              <p className="mb-3">
                En cumplimiento del deber de información contemplado en el artículo 10 de la vigente Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos de la entidad titular del sitio web:
              </p>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 space-y-2 text-sm">
                <p>
                  <strong className="text-zinc-900">Razón social:</strong> ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL
                </p>
                <p>
                  <strong className="text-zinc-900">Nombre comercial:</strong> HuNo Grupo Inmobiliario
                </p>
                <p>
                  <strong className="text-zinc-900">Domicilio profesional:</strong> Calle Adosinda 15, 33202 Gijón (Asturias)
                </p>
                <p>
                  <strong className="text-zinc-900">Teléfono de contacto:</strong>{' '}
                  <a href="tel:678530312" className="text-accent hover:underline">
                    678 53 03 12
                  </a>
                </p>
                <p>
                  <strong className="text-zinc-900">Correo electrónico:</strong>{' '}
                  <a href="mailto:hunogestioninmobiliaria@gmail.com" className="text-accent hover:underline">
                    hunogestioninmobiliaria@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-zinc-900">Actividad:</strong> Servicios de intermediación inmobiliaria, compraventa, arrendamiento, asesoramiento legal y financiero vinculado a inmuebles.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                2. Objeto y ámbito de aplicación
              </h2>
              <p>
                El presente sitio web tiene como finalidad facilitar información acerca de los servicios inmobiliarios prestados por HuNo Grupo Inmobiliario, así como mostrar inmuebles en venta o alquiler y posibilitar la solicitud de información o asesoramiento por parte de usuarios y clientes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                3. Condiciones de uso
              </h2>
              <p>
                El acceso y navegación por este sitio web atribuye la condición de usuario, implicando la aceptación plena y sin reservas de las disposiciones incluidas en este Aviso Legal en el momento en que se acceda a la web. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios de conformidad con la ley, la buena fe, el orden público y las buenas costumbres.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                4. Propiedad intelectual e industrial
              </h2>
              <p>
                Todos los contenidos del sitio web, incluyendo textos, marcas comerciales, logotipos, imágenes, fotografías, diseño gráfico, código fuente y software son titularidad de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL o de terceros que han autorizado expresamente su uso, estando protegidos por las leyes de propiedad intelectual e industrial españolas e internacionales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                5. Exclusión de garantías y responsabilidad
              </h2>
              <p>
                ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por fallos técnicos o interrupciones en el servicio, ni de la exactitud de los datos que hayan sido facilitados por terceros propietarios respecto a los inmuebles anunciados, sin perjuicio de la diligencia habitual aplicada en su verificación.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                6. Legislación aplicable y jurisdicción
              </h2>
              <p>
                Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, siendo competentes para la resolución de todos los conflictos derivados los Juzgados y Tribunales de la ciudad de Gijón (Asturias).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Política de Privacidad | HuNo Grupo Inmobiliario',
  description:
    'Información detallada sobre el tratamiento de datos personales por parte de ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL (HuNo Grupo Inmobiliario) de conformidad con el RGPD y la LOPDGDD.',
};

export default function PoliticaPrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="mt-3 text-base text-zinc-600">
              Cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
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
                1. Responsable del tratamiento de sus datos
              </h2>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 space-y-2 text-sm">
                <p>
                  <strong className="text-zinc-900">Identidad:</strong> ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL (&quot;HuNo Grupo Inmobiliario&quot;)
                </p>
                <p>
                  <strong className="text-zinc-900">Dirección postal:</strong> Calle Adosinda 15, 33202 Gijón (Asturias)
                </p>
                <p>
                  <strong className="text-zinc-900">Correo electrónico:</strong>{' '}
                  <a href="mailto:hunogestioninmobiliaria@gmail.com" className="text-accent hover:underline">
                    hunogestioninmobiliaria@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-zinc-900">Teléfono:</strong>{' '}
                  <a href="tel:678530312" className="text-accent hover:underline">
                    678 53 03 12
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                2. Finalidad del tratamiento
              </h2>
              <p className="mb-3">
                Tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Gestionar la respuesta a las consultas, dudas o solicitudes de información realizadas a través del formulario de contacto o vías telefónicas/electrónicas.
                </li>
                <li>
                  Prestar los servicios de intermediación inmobiliaria solicitados (compra, venta, alquiler, valoración o reformas de inmuebles).
                </li>
                <li>
                  Cumplir con las obligaciones legales y tributarias derivadas de la relación contractual o precontractual.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                3. Legitimación para el tratamiento
              </h2>
              <p>
                La base legal para el tratamiento de sus datos es el <strong>consentimiento expreso</strong> del interesado al rellenar y enviar los formularios de contacto, así como la <strong>ejecución de medidas precontractuales o de un contrato de prestación de servicios inmobiliarios</strong> en caso de encargo profesional.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                4. Conservación de los datos
              </h2>
              <p>
                Los datos personales facilitados se conservarán durante el tiempo necesario para responder a la consulta o mientras se mantenga la relación profesional, y con posterioridad durante los plazos legalmente exigidos para la atención de posibles responsabilidades derivadas de la legislación vigente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                5. Destinatarios de cesiones o transferencias
              </h2>
              <p>
                Los datos no se cederán a terceros ajenos a la actividad inmobiliaria encomendada, salvo obligación legal expresa o cuando resulte imprescindible para la formalización del encargo (notarías, registros de la propiedad, entidades bancarias colaboradoras para tramitación hipotecaria o administraciones públicas). No se realizan transferencias internacionales de datos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                6. Derechos de las personas interesadas
              </h2>
              <p className="mb-3">
                Cualquier persona tiene derecho a obtener confirmación sobre si en ARTO Y NOVOA GESTION DE PATRIMONIO E INVERSIONES SL estamos tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acceder a sus datos personales.</li>
                <li>Solicitar la rectificación de los datos inexactos.</li>
                <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                <li>Solicitar la limitación de su tratamiento en determinadas circunstancias.</li>
                <li>Oponerse al tratamiento de sus datos.</li>
                <li>Solicitar la portabilidad de los datos.</li>
              </ul>
              <p className="mt-4">
                Puede ejercer sus derechos dirigiendo un escrito a la dirección postal arriba indicada o mediante correo electrónico a{' '}
                <a href="mailto:hunogestioninmobiliaria@gmail.com" className="text-accent underline font-medium">
                  hunogestioninmobiliaria@gmail.com
                </a>
                , acompañando fotocopia de su DNI o documento equivalente para verificar su identidad. Asimismo, tiene derecho a reclamar ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica (www.aepd.es).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

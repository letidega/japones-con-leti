import { Link } from 'react-router-dom';

export function Premium() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
      <section className="text-center mb-24 max-w-3xl mx-auto">
        <h1 className="font-display-lg text-5xl md:text-6xl text-on-background mb-6 font-bold">Tu camino hacia la fluidez, a tu propio ritmo.</h1>
        <p className="font-body-lg text-lg text-on-surface-variant mb-12">
            Descubre planes diseñados para acompañarte en cada paso de tu aprendizaje. Desde los fundamentos más simples hasta la inmersión profunda en la cultura japonesa, encuentra el espacio perfecto para tu estudio.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant flex flex-col h-full">
          <div className="mb-8">
            <span className="font-label-sm text-sm font-bold bg-surface-variant text-on-surface-variant px-4 py-1.5 rounded-full border border-outline-variant inline-block mb-4">Básico</span>
            <h2 className="font-headline-md text-3xl font-bold text-on-background mb-2">Gratuito</h2>
            <p className="font-body-md text-base text-on-surface-variant h-12">El primer paso perfecto para conocer nuestra metodología.</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow font-body-md text-base text-on-background">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span>Acceso a lecciones introductorias N5</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span>Ejercicios básicos interactivos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span>Materiales de autoestudio en PDF</span>
            </li>
          </ul>
          <Link to="/login" className="w-full inline-block text-center bg-transparent border border-outline text-on-surface font-label-sm text-sm font-bold py-3 rounded-lg hover:bg-surface-variant transition-colors mt-auto">
            Comenzar Gratis
          </Link>
        </div>

        <div className="bg-primary-container rounded-2xl p-8 border border-primary relative shadow-sm flex flex-col h-full transform md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-sm text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
            Más Popular
          </div>
          <div className="mb-8 mt-2">
            <span className="font-label-sm text-sm font-bold bg-surface text-on-surface px-4 py-1.5 rounded-full border border-outline-variant inline-block mb-4">Estudiante</span>
            <h2 className="font-headline-md text-3xl font-bold text-on-background mb-2">15€ <span className="font-body-md text-base text-on-surface-variant font-normal">/ mes</span></h2>
            <p className="font-body-md text-base text-on-surface-variant h-12">Para quienes buscan constancia y soporte en su aprendizaje.</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow font-body-md text-base text-on-background">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              <span><strong>Todo lo del plan Básico</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              <span>Acceso completo a todos los niveles (N5-N3)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              <span>Soporte de profesores (Respuestas en 24h)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              <span>Talleres grupales en vivo (1 al mes)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              <span>Acceso parcial a la biblioteca literaria</span>
            </li>
          </ul>
          <Link to="/login" className="w-full inline-block text-center bg-primary text-on-primary font-label-sm text-sm font-bold py-3 rounded-lg hover:bg-on-tertiary-fixed-variant transition-colors mt-auto">
            Suscribirse Mensual
          </Link>
        </div>

        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant flex flex-col h-full">
          <div className="mb-8">
           <span className="font-label-sm text-sm font-bold bg-surface-variant text-on-surface-variant px-4 py-1.5 rounded-full border border-outline-variant inline-block mb-4">Zen</span>
           <h2 className="font-headline-md text-3xl font-bold text-on-background mb-2">150€ <span className="font-body-md text-base text-on-surface-variant font-normal">/ año</span></h2>
           <p className="font-body-md text-base text-on-surface-variant h-12">Compromiso a largo plazo con beneficios exclusivos.</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow font-body-md text-base text-on-background">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span><strong>Todo lo del plan Estudiante</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span>2 meses gratis (ahorro de 30€)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span>Revisión individual de caligrafía trimestral</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">check_circle</span>
              <span>Acceso ilimitado a toda la biblioteca literaria</span>
            </li>
          </ul>
          <Link to="/login" className="w-full inline-block text-center bg-transparent border border-outline text-on-surface font-label-sm text-sm font-bold py-3 rounded-lg hover:bg-surface-variant transition-colors mt-auto">
             Suscribirse Anual
          </Link>
        </div>
      </div>

      <section className="mt-32 max-w-3xl mx-auto">
        <h3 className="font-title-sm text-xl font-bold text-center mb-8 text-on-background">Preguntas Frecuentes</h3>
        <div className="space-y-4">
          <div className="border-b border-outline-variant pb-4">
            <h4 className="font-body-md text-base font-bold text-on-background mb-2">¿Puedo cambiar de plan más adelante?</h4>
            <p className="font-body-md text-base text-on-surface-variant">Sí, puedes actualizar o pausar tu suscripción en cualquier momento desde tu área privada.</p>
          </div>
          <div className="border-b border-outline-variant pb-4">
            <h4 className="font-body-md text-base font-bold text-on-background mb-2">¿Cómo funcionan los talleres en vivo?</h4>
            <p className="font-body-md text-base text-on-surface-variant">Se realizan a través de videollamada, centrándose en temas específicos como gramática avanzada o cultura. Quedan grabados para los miembros Premium.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

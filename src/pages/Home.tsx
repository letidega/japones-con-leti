import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden px-8 py-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ36S0EmCPgJbtOlOv6g2CZMiJat43wwVU3gjOxu-SENgyq5LSrWKOEZkivX6D9EqJpJTKKon_vKXeb1Ii0VBHTUhN1T_aU_DrmGegL3Z1ku7HyonDSbacBlbM1UAFwEGYf_TTCnGdqFb7xeaiJWD5vGTBU5WgWaif9mtzZvoCq7WRbYddmILvcse6JAXmmkRWlBkE9BqR4qIFiaEACFaGhY90zhVvaBeOvAeXwI-TvgwGx4Zf2zYFxCxZfpIBD5Gpn3MQQHTlBKU"
            alt="Subtle japanese paper texture background"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-1 rounded-full border border-outline text-on-surface-variant font-label-sm text-sm mb-4">
            Estudio Independiente
          </span>
          <h1 className="font-display-lg text-5xl md:text-6xl text-on-background max-w-3xl mx-auto font-bold tracking-tight">
            Aprende japonés a tu ritmo, con calma y armonía
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">
            Un método de autoestudio diseñado para adultos digitales que buscan claridad sin abrumarse. Sumérgete en un entorno de aprendizaje minimalista.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/login" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-sm text-sm hover:bg-surface-tint transition-colors w-full sm:w-auto font-bold">
              Crea tu cuenta gratuita
            </Link>
            <Link to="/courses" className="border border-outline text-on-surface px-8 py-3 rounded-full font-label-sm text-sm hover:bg-surface-variant transition-colors w-full sm:w-auto text-center font-bold">
              Explorar cursos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-3xl font-bold text-on-background">El Método</h2>
            <p className="font-body-md text-base text-on-surface-variant mt-2">Un enfoque diferente para mentes serenas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-xl p-8 border border-outline-variant flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[48px] text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                menu_book
              </span>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-2">Sin vídeos</h3>
              <p className="font-body-md text-base text-on-surface-variant">
                Enfócate en la lectura y la comprensión profunda. Eliminamos las distracciones visuales para que conectes directamente con el texto.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 border border-outline-variant flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[48px] text-primary mb-4">
                touch_app
              </span>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-2">Ejercicios interactivos</h3>
              <p className="font-body-md text-base text-on-surface-variant">
                Practica con elegancia. Interfaces limpias que responden suavemente a tus interacciones, reforzando la memoria muscular y cognitiva.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 border border-outline-variant flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[48px] text-primary mb-4">
                support_agent
              </span>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-2">Acompañamiento docente</h3>
              <p className="font-body-md text-base text-on-surface-variant">
                No estás solo en el silencio. Soporte guiado cuando lo necesitas, resolviendo dudas con claridad y paciencia infinita.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-md text-3xl font-bold text-on-background">Comienza tu viaje</h2>
            <p className="font-body-md text-base text-on-surface-variant mt-2">Fundamentos estructurados paso a paso.</p>
          </div>
          <Link to="/courses" className="hidden md:flex items-center gap-2 text-primary font-label-sm text-sm hover:text-on-surface transition-colors font-bold">
            Ver todos
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/courses/sakura" className="group cursor-pointer bg-surface-container rounded-xl overflow-hidden border border-transparent hover:border-outline-variant transition-all duration-300 block text-left">
            <div className="h-48 relative overflow-hidden bg-primary-container">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="font-display-lg text-[120px] text-primary">五</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-[12px] font-bold">Principiante</span>
                <span className="text-on-surface-variant text-sm font-body-md">JLPT N5</span>
              </div>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-2 group-hover:text-primary transition-colors">SAKURA (桜)</h3>
              <p className="font-body-md text-base text-on-surface-variant mb-4">
                Domina hiragana, katakana y la gramática base esencial para la supervivencia diaria en Japón.
              </p>
            </div>
          </Link>
          <Link to="/courses/michi" className="group cursor-pointer bg-surface-container rounded-xl overflow-hidden border border-transparent hover:border-outline-variant transition-all duration-300 block text-left">
            <div className="h-48 relative overflow-hidden bg-secondary-container">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="font-display-lg text-[120px] text-secondary">四</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-[12px] font-bold">Intermedio Básico</span>
                <span className="text-on-surface-variant text-sm font-body-md">JLPT N4</span>
              </div>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-2 group-hover:text-primary transition-colors">MICHI (道)</h3>
              <p className="font-body-md text-base text-on-surface-variant mb-4">
                Amplía tu vocabulario y aprende a expresar intenciones, suposiciones y matices emocionales.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-md text-3xl font-bold text-on-background text-center mb-16">Voces serenas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-8 rounded-xl border border-outline-variant">
              <span className="material-symbols-outlined text-primary/40 text-[32px] mb-2 font-bold">format_quote</span>
              <p className="font-body-md text-base text-on-surface mb-4 italic">
                "La ausencia de videos me obligó a concentrarme en la lectura. Siento que por primera vez estoy absorbiendo los kanjis en lugar de solo mirarlos."
              </p>
              <div className="font-label-sm text-sm text-on-surface-variant font-bold">
                — Elena M., Estudiante N5
              </div>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-outline-variant">
              <span className="material-symbols-outlined text-primary/40 text-[32px] mb-2 font-bold">format_quote</span>
              <p className="font-body-md text-base text-on-surface mb-4 italic">
                "El diseño de la plataforma transmite una paz inmensa. Es mi momento de desconexión al final del día. Un método verdaderamente elegante."
              </p>
              <div className="font-label-sm text-sm text-on-surface-variant font-bold">
                — Carlos R., Estudiante N4
              </div>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-outline-variant">
              <span className="material-symbols-outlined text-primary/40 text-[32px] mb-2 font-bold">format_quote</span>
              <p className="font-body-md text-base text-on-surface mb-4 italic">
                "Las explicaciones de Leti son claras como el agua. Nunca me he sentido perdida, incluso en los temas gramaticales más áridos."
              </p>
              <div className="font-label-sm text-sm text-on-surface-variant font-bold">
                — Sofía T., Área Premium
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-inverse-surface text-inverse-on-surface flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-16 z-10">
            <h2 className="font-headline-md text-3xl font-bold mb-4">
              Descubre la belleza de la literatura japonesa
            </h2>
            <p className="font-body-lg text-lg text-inverse-on-surface/80 mb-8">
              Textos bilingües seleccionados, anotados meticulosamente para enriquecer tu vocabulario mientras disfrutas de relatos clásicos y contemporáneos.
            </p>
            <Link to="/literature" className="inline-block border border-inverse-on-surface text-inverse-on-surface px-6 py-2 rounded-full font-label-sm text-sm hover:bg-inverse-on-surface hover:text-inverse-surface transition-colors font-bold">
              Explorar Biblioteca
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-full absolute md:relative right-0 opacity-40 md:opacity-100">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3ymHqOe9Tsk--EhyWeNEG6Cp_uMck70ptVsIVpgefoQtGBZjHrONrfdvPJvpky4tVAk_v9U5IBB0-4NZxOsXpZs3sBsEkM__U2nPKRgm1oJYFvQCV-C8ruzZYuRTR0XLLrj7urpiCPf6dZEka8l4bG0A01DwgUDCjAXcj6-290W6m7wW5JzCJtPrdaT4nN6SNrj88Vl50-n6rBgTS9BinAcQtIMQIfjd-hVlIr96xm8Ta3LviZp7zWeq0ImGBhbkySZulUsFbNg"
              alt="Libro abierto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function Dashboard() {
  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full">
      <aside className="hidden lg:flex flex-col bg-[#FDF9F3] dark:bg-zinc-900 w-64 border-r border-[#EAD7D7] dark:border-zinc-800 fixed left-0 top-[73px] h-[calc(100vh-73px)] overflow-y-auto z-40">
        <div className="p-6 border-b border-[#EAD7D7] dark:border-zinc-800">
          <h2 className="font-serif font-bold text-[#2F2F2F] dark:text-zinc-100 text-lg">Curso Actual</h2>
          <p className="text-sm text-[#2F2F2F]/60">N5 - Principiante</p>
        </div>
        <nav className="flex-1 py-4">
          <a className="flex items-center gap-3 px-6 py-3 text-[#2F2F2F] dark:text-zinc-100 bg-[#F7EFF1]/50 font-bold border-l-4 border-primary transition-transform duration-200 font-serif text-base" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            Lecciones
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-[#2F2F2F]/70 dark:text-zinc-400 hover:bg-[#F7EFF1]/50 dark:hover:bg-zinc-800/50 transition-transform duration-200 font-serif text-base" href="#">
            <span className="material-symbols-outlined">translate</span>
            Vocabulario
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-[#2F2F2F]/70 dark:text-zinc-400 hover:bg-[#F7EFF1]/50 dark:hover:bg-zinc-800/50 transition-transform duration-200 font-serif text-base" href="#">
            <span className="material-symbols-outlined">edit</span>
            Caligrafía
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-[#2F2F2F]/70 dark:text-zinc-400 hover:bg-[#F7EFF1]/50 dark:hover:bg-zinc-800/50 transition-transform duration-200 font-serif text-base" href="#">
            <span className="material-symbols-outlined">description</span>
            Notas
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-[#2F2F2F]/70 dark:text-zinc-400 hover:bg-[#F7EFF1]/50 dark:hover:bg-zinc-800/50 transition-transform duration-200 font-serif text-base" href="#">
            <span className="material-symbols-outlined">group</span>
            Comunidad
          </a>
        </nav>
      </aside>

      <main className="flex-1 lg:ml-64 p-8 md:p-12 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <section className="md:col-span-8 bg-surface-container rounded-xl p-8 flex items-center gap-8 border border-outline-variant/30">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-outline-variant bg-surface-dim">
                <span className="material-symbols-outlined text-[48px] m-6 text-primary">person</span>
            </div>
            <div className="flex-1">
              <h1 className="font-headline-md text-3xl font-semibold text-on-surface mb-1">Konnichiwa, María</h1>
              <p className="font-body-md text-base text-on-surface-variant mb-4">Tu progreso hacia la fluidez es constante como el fluir de un río.</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-surface-dim rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%] rounded-full"></div>
                </div>
                <span className="font-label-sm text-sm font-bold text-primary">65% Global</span>
              </div>
            </div>
          </section>

          <section className="md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-outline-variant/30 flex flex-col justify-center">
            <h3 className="font-title-sm text-xl font-medium text-on-surface mb-4">Estadísticas</h3>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                <span className="font-body-md text-base">Racha de estudio</span>
              </div>
              <span className="font-label-sm text-sm font-bold text-primary">12 días</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
                <span className="font-body-md text-base">Lecciones esta semana</span>
              </div>
              <span className="font-label-sm text-sm font-bold text-primary">5 / 7</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">stars</span>
                <span className="font-body-md text-base">Puntos acumulados</span>
              </div>
              <span className="font-label-sm text-sm font-bold text-primary">450 pt</span>
            </div>
          </section>

          <section className="md:col-span-7 bg-surface-container rounded-xl p-10 border border-outline-variant/30">
            <h2 className="font-headline-md text-2xl text-on-surface mb-6 border-b border-outline-variant pb-2 font-semibold">Cursos Activos</h2>
            <div className="flex flex-col gap-6">
              <div className="group cursor-pointer">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="inline-block px-2 py-1 bg-outline-variant/20 rounded-full font-label-sm text-[10px] text-on-surface-variant mb-1 font-bold">N5 - Principiante</span>
                    <h4 className="font-title-sm text-[18px] text-on-surface group-hover:text-primary transition-colors font-medium">Fundamentos Gramaticales</h4>
                  </div>
                  <span className="font-label-sm text-sm font-bold text-on-surface-variant">80%</span>
                </div>
                <div className="h-1.5 bg-surface-dim rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%] rounded-full"></div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="inline-block px-2 py-1 bg-outline-variant/20 rounded-full font-label-sm text-[10px] text-on-surface-variant mb-1 font-bold">Kanji</span>
                    <h4 className="font-title-sm text-[18px] text-on-surface group-hover:text-primary transition-colors font-medium">Los primeros 100 caracteres</h4>
                  </div>
                  <span className="font-label-sm text-sm font-bold text-on-surface-variant">45%</span>
                </div>
                <div className="h-1.5 bg-surface-dim rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="md:col-span-5 bg-surface-container-low rounded-xl p-10 border border-outline-variant/30 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[150px]">auto_awesome</span>
            </div>
            <h2 className="font-headline-md text-2xl text-on-surface mb-6 border-b border-outline-variant pb-2 relative z-10 font-semibold">Logros Recientes</h2>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-surface-variant/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[24px]">filter_vintage</span>
                </div>
                <span className="font-label-sm text-sm font-bold text-on-surface mb-1">Sakura</span>
                <span className="font-body-md text-[12px] text-on-surface-variant">Primer curso completado</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-surface-variant/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
                </div>
                <span className="font-label-sm text-sm font-bold text-on-surface mb-1">Grulla</span>
                <span className="font-body-md text-[12px] text-on-surface-variant">7 días seguidos</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-surface-variant/50 transition-colors opacity-50 grayscale">
                <div className="w-12 h-12 rounded-full bg-surface-dim text-outline flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[24px]">landscape</span>
                </div>
                <span className="font-label-sm text-sm font-bold text-on-surface mb-1">Fuji</span>
                <span className="font-body-md text-[12px] text-on-surface-variant">Nivel N4 alcanzado</span>
              </div>
            </div>
          </section>

          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <section className="md:col-span-2 bg-surface-container rounded-xl p-6 border border-outline-variant/30 flex items-center gap-6">
              <div className="w-16 h-16 rounded-lg bg-primary-container text-primary flex flex-col items-center justify-center shrink-0">
                <span className="font-label-sm text-[12px] uppercase font-bold">Oct</span>
                <span className="font-title-sm text-[24px] font-bold">14</span>
              </div>
              <div>
                <h4 className="font-title-sm text-xl font-medium text-on-surface mb-1">Taller en Vivo: Partículas Esenciales</h4>
                <p className="font-body-md text-base text-on-surface-variant text-sm mb-2">Mañana, 18:00 hrs (Hora Madrid)</p>
                <a className="font-label-sm text-sm font-bold text-primary hover:underline underline-offset-4" href="#">Añadir al calendario</a>
              </div>
            </section>
            
            <section className="md:col-span-1 bg-surface-variant rounded-xl p-6 border border-outline-variant/30 flex flex-col justify-center items-center text-center hover:bg-surface-dim transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant mb-2 group-hover:scale-110 transition-transform duration-300">support_agent</span>
              <h4 className="font-title-sm text-xl font-medium text-on-surface mb-1">¿Necesitas ayuda?</h4>
              <p className="font-body-md text-[12px] text-on-surface-variant">Contacta con soporte docente</p>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

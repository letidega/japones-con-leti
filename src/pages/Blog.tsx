export function Blog() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-24 flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-2xl bg-surface-container-low p-16 rounded-3xl border border-outline-variant/50 shadow-sm">
        <span className="material-symbols-outlined text-6xl text-primary mb-6" style={{fontVariationSettings: "'FILL' 0"}}>edit_note</span>
        <h1 className="font-display-lg text-4xl md:text-5xl font-bold text-on-background mb-4">Blog en construcción</h1>
        <p className="font-body-lg text-lg text-on-surface-variant mb-8">
            Pronto compartiremos historias sobre cultura, filosofía del aprendizaje y reflexiones sobre el hermoso camino de aprender japonés. Vuelve más adelante.
        </p>
        <button onClick={() => window.alert('Te has suscrito correctamente a la newsletter.')} className="bg-primary hover:bg-on-surface text-on-primary font-label-sm text-sm font-bold px-8 py-3 rounded-full transition-colors duration-300 border border-transparent">
          Suscribirse a la newsletter
        </button>
      </div>
    </main>
  );
}

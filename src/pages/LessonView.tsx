import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export function LessonView() {
  const { lessonId } = useParams();
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkCompletion() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from('progreso')
        .select('completada')
        .eq('usuario_id', user.id)
        .eq('leccion_id', lessonId)
        .maybeSingle();

      if (data?.completada) {
        setCompleted(true);
      }
      setLoading(false);
    }
    checkCompletion();
  }, [lessonId]);

  const handleComplete = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Debes iniciar sesión para guardar tu progreso");
      return;
    }

    const { error } = await supabase
      .from('progreso')
      .upsert({
        usuario_id: user.id,
        leccion_id: lessonId,
        completada: true,
        fecha: new Date().toISOString()
      }, {
        onConflict: 'usuario_id,leccion_id'
      });

    if (error) {
      console.error("Error saving progress:", error);
    } else {
      setCompleted(true);
    }
  };

  return (
    <main className="flex-1 w-full pt-12 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-8 text-on-surface-variant font-label-sm text-sm font-bold uppercase tracking-wider">
        <span className="inline-block px-3 py-1 border border-outline rounded-full text-on-surface bg-surface">N5</span>
        <span className="text-outline">•</span>
        <span>Unidad 1</span>
      </div>

      <header className="mb-16">
        <h1 className="font-display-lg text-4xl md:text-5xl font-bold text-on-surface mb-6">Lección 1: Hiragana y Saludos</h1>
        <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
          Bienvenidos al inicio de nuestro viaje. El japonés, al igual que el pincel sobre el papel, requiere paciencia y suavidad. Hoy daremos nuestros primeros pasos conociendo los trazos fundamentales del Hiragana y las palabras que abren puertas: los saludos cotidianos.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-6 border-b border-surface-variant pb-2">El Arte del Hiragana</h2>
        <p className="font-body-md text-base text-on-surface-variant mb-8">
          El Hiragana (ひらがな) es el silabario nativo de Japón. Sus formas redondeadas evocan la caligrafía clásica. Comenzaremos con las cinco vocales esenciales, que forman la base de todos los demás sonidos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {['あ', 'い', 'う', 'え', 'お'].map((char, i) => (
            <div key={char} className="bg-surface-container rounded-xl p-6 flex flex-col items-center justify-center border border-outline-variant hover:border-outline transition-colors group">
              <span className="font-display-lg text-5xl font-bold text-on-surface mb-2 group-hover:scale-110 transition-transform">{char}</span>
              <span className="font-label-sm text-sm font-bold text-on-surface-variant">{['a', 'i', 'u', 'e', 'o'][i]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-secondary-container rounded-xl p-8 md:p-12 border border-outline-variant relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-6xl">edit</span>
        </div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="material-symbols-outlined text-on-secondary-container">book_4</span>
          <h3 className="font-title-sm text-xl font-medium text-on-secondary-container m-0">Apunte Gramatical: El sufijo -desu</h3>
        </div>
        <div className="font-body-md text-base text-on-surface-variant space-y-4 relative z-10">
          <p>
            En japonés, es común terminar las oraciones afirmativas con <strong>です (desu)</strong>. Esto añade un nivel de cortesía estándar (teineigo), esencial cuando hablamos con desconocidos o en situaciones formales.
          </p>
          <div className="bg-surface/50 rounded-lg p-4 border border-outline-variant mt-4">
            <p className="font-headline-md text-xl font-medium mb-1">わたしは レティ <strong>です</strong>。</p>
            <p className="font-body-md text-base italic text-on-surface-variant">Watashi wa Reti <strong>desu</strong>.</p>
            <p className="font-body-md text-sm font-bold mt-2 uppercase tracking-wide text-primary">Yo soy Leti.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-6 border-b border-surface-variant pb-2">Práctica Serenade</h2>
        <p className="font-body-md text-base text-on-surface-variant mb-8">
          Selecciona el saludo correcto para la mañana. Tómate tu tiempo.
        </p>
        <div className="space-y-4">
          {[
            { jp: "こんにちは", ro: "Konnichiwa" },
            { jp: "おはようございます", ro: "Ohayou gozaimasu" },
            { jp: "こんばんは", ro: "Konbanwa" }
          ].map((ex) => (
            <label key={ex.jp} className="flex items-center p-4 border border-outline-variant rounded-lg hover:border-primary hover:bg-surface-container transition-all cursor-pointer group">
              <input className="text-primary focus:ring-primary h-5 w-5 mr-4 border-outline" name="exercise1" type="radio" />
              <div className="flex-1">
                <span className="font-display-lg text-xl font-medium block mb-1">{ex.jp}</span>
                <span className="font-body-md text-sm font-bold text-on-surface-variant">{ex.ro}</span>
              </div>
            </label>
          ))}
        </div>
      </section>

      <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link to="/dashboard" className="font-label-sm text-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver al panel
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleComplete} 
            disabled={completed || loading} 
            className={`font-label-sm text-sm font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2 shadow-sm ${completed ? 'bg-secondary text-white' : 'bg-primary text-on-primary hover:bg-surface-tint'}`}
          >
            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            {completed ? '¡Completado!' : 'Marcar como completada'}
          </button>
        </div>
      </div>
    </main>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardStats } from "../types";

export function Dashboard() {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const userId = "00000000-0000-0000-0000-000000000000"; // Dummy ID for guest/initial testing

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const response = await fetch(`/api/user/dashboard/${userId}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex-grow flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const stats = data?.stats || { completedLessons: 0, globalProgress: 0, achievements: [] };
  const activeCourses = data?.activeCourses || [];

  const navItems = [
    { id: "dashboard", label: "Panel Principal", icon: "dashboard" },
    { id: "lecciones", label: "Lecciones", icon: "menu_book" },
    { id: "vocabulario", label: "Vocabulario", icon: "translate" },
    { id: "gramatica", label: "Gramática", icon: "architecture" },
    { id: "caligrafia", label: "Caligrafía", icon: "edit" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "lecciones":
        return (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="mb-4">
              <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-2">Tus Lecciones</h2>
              <p className="text-on-surface-variant italic">Continúa donde lo dejaste en tus cursos activos.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCourses.map((course) => (
                <div key={course.id} className="bg-surface-container rounded-xl p-6 border border-outline-variant/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 rounded text-[10px] text-primary font-bold">{course.nivel}</span>
                    <h3 className="font-title-sm text-lg font-medium">{course.titulo}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">play_circle</span>
                        Lección 1: Hiragana
                      </span>
                      <Link to="/lessons/l1" className="text-primary font-bold hover:underline">Continuar</Link>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">lock</span>
                        Lección 2: Saludos
                      </span>
                      <span className="text-outline text-[12px]">Bloqueado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "vocabulario":
        return (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="mb-4">
              <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-2">Banco de Vocabulario</h2>
              <p className="text-on-surface-variant">Palabras esenciales para tu nivel actual (N5).</p>
            </header>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { jp: "ねこ", ro: "Neko", es: "Gato", type: "Sustantivo" },
                { jp: "いぬ", ro: "Inu", es: "Perro", type: "Sustantivo" },
                { jp: "みず", ro: "Mizu", es: "Agua", type: "Sustantivo" },
                { jp: "たべる", ro: "Taberu", es: "Comer", type: "Verbo" },
                { jp: "みる", ro: "Miru", es: "Ver / Mirar", type: "Verbo" },
                { jp: "せんせい", ro: "Sensei", es: "Maestro", type: "Sustantivo" },
                { jp: "さくら", ro: "Sakura", es: "Cerezo", type: "Sustantivo" },
                { jp: "にほん", ro: "Nihon", es: "Japón", type: "Sustantivo" },
              ].map((item, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 flex flex-col items-center text-center group hover:bg-primary-container/30 transition-colors">
                  <span className="text-3xl font-bold text-on-surface mb-1 group-hover:scale-110 transition-transform">{item.jp}</span>
                  <span className="text-sm font-bold text-primary mb-2 uppercase tracking-tighter">{item.ro}</span>
                  <span className="text-base text-on-surface-variant border-t border-outline-variant/20 pt-2 w-full">{item.es}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "gramatica":
        return (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="mb-4">
              <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-2">Apuntes de Gramática</h2>
              <p className="text-on-surface-variant">Estructuras y partículas fundamentales.</p>
            </header>
            <div className="space-y-6">
              {[
                { part: "は (Wa)", desc: "Marcador de Tema. Indica de qué estamos hablando.", ex: "Watashi wa Maria desu (Yo soy María)." },
                { part: "が (Ga)", desc: "Marcador de Sujeto. Enfatiza el sujeto que realiza la acción.", ex: "Neko ga imasu (Hay un gato)." },
                { part: "の (No)", desc: "Marcador de Posesión o Pertenencia.", ex: "Watashi no hon (Mi libro)." },
                { part: "を (Wo)", desc: "Marcador de Objeto Directo.", ex: "Mizu wo nomu (Beber agua)." },
              ].map((item, i) => (
                <div key={i} className="bg-surface-container rounded-xl p-6 border-l-4 border-primary shadow-sm">
                  <h4 className="font-title-sm text-xl font-bold text-on-surface mb-2">{item.part}</h4>
                  <p className="text-on-surface-variant mb-4">{item.desc}</p>
                  <div className="bg-surface/50 p-3 rounded italic text-sm text-primary">
                    <span className="font-bold not-italic">Ejemplo:</span> {item.ex}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "caligrafia":
        return (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="mb-4">
              <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-2">Taller de Caligrafía</h2>
              <p className="text-on-surface-variant">El arte de escribir con equilibrio y fluidez.</p>
            </header>
            <div className="bg-secondary-container/20 rounded-2xl p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-title-sm text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                  La Regla del Orden de Trazos
                </h3>
                <ul className="space-y-3 text-on-surface-variant">
                  <li className="flex gap-3 items-start"><span className="text-primary font-bold">1.</span> De izquierda a derecha.</li>
                  <li className="flex gap-3 items-start"><span className="text-primary font-bold">2.</span> De arriba hacia abajo.</li>
                  <li className="flex gap-3 items-start"><span className="text-primary font-bold">3.</span> Horizontal antes que vertical.</li>
                  <li className="flex gap-3 items-start"><span className="text-primary font-bold">4.</span> El centro antes que los lados en caracteres simétricos.</li>
                </ul>
              </div>
              <div className="w-48 h-48 bg-white rounded-xl border border-outline-variant flex items-center justify-center relative group">
                <span className="text-[120px] font-serif text-on-surface/10 absolute inset-0 flex items-center justify-center">永</span>
                <span className="text-2xl font-bold text-primary animate-pulse">Próximamente</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in duration-500">
            <section className="md:col-span-8 bg-surface-container rounded-xl p-8 flex items-center gap-8 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-outline-variant bg-surface-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-primary">person</span>
              </div>
              <div className="flex-1">
                <h1 className="font-headline-md text-3xl font-semibold text-on-surface mb-1">Konnichiwa, María</h1>
                <p className="font-body-md text-base text-on-surface-variant mb-4">Tu progreso hacia la fluidez es constante como el fluir de un río.</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-surface-dim rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${stats.globalProgress}%` }}></div>
                  </div>
                  <span className="font-label-sm text-sm font-bold text-primary">{stats.globalProgress}% Global</span>
                </div>
              </div>
            </section>

            <section className="md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-outline-variant/30 flex flex-col justify-center shadow-sm">
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-4">Estadísticas</h3>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                  <span className="font-body-md text-base">Racha de estudio</span>
                </div>
                <span className="font-label-sm text-sm font-bold text-primary">0 días</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                  <span className="font-body-md text-base">Lecciones completadas</span>
                </div>
                <span className="font-label-sm text-sm font-bold text-primary">{stats.completedLessons}</span>
              </div>
            </section>

            <section className="md:col-span-7 bg-surface-container rounded-xl p-10 border border-outline-variant/30 shadow-sm">
              <h2 className="font-headline-md text-2xl text-on-surface mb-6 border-b border-outline-variant pb-2 font-semibold">Cursos Activos</h2>
              <div className="flex flex-col gap-6">
                {activeCourses.map((course) => (
                  <div key={course.id} className="group cursor-pointer">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-outline-variant/20 rounded-full font-label-sm text-[10px] text-on-surface-variant mb-1 font-bold">{course.nivel}</span>
                        <h4 className="font-title-sm text-[18px] text-on-surface group-hover:text-primary transition-colors font-medium">{course.titulo}</h4>
                      </div>
                      <span className="font-label-sm text-sm font-bold text-on-surface-variant">50%</span>
                    </div>
                    <div className="h-1.5 bg-surface-dim rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[50%] rounded-full"></div>
                    </div>
                  </div>
                ))}
                {activeCourses.length === 0 && (
                  <div className="text-center py-4">
                    <p className="text-on-surface-variant italic">No tienes cursos activos todavía. ¡Explora el catálogo!</p>
                    <Link to="/courses" className="text-primary font-bold mt-2 inline-block">Ver Catálogo</Link>
                  </div>
                )}
              </div>
            </section>

            <section className="md:col-span-5 bg-surface-container-low rounded-xl p-10 border border-outline-variant/30 relative overflow-hidden shadow-sm">
              <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[150px]">auto_awesome</span>
              </div>
              <h2 className="font-headline-md text-2xl text-on-surface mb-6 border-b border-outline-variant pb-2 relative z-10 font-semibold">Logros Recientes</h2>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {stats.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-surface-variant/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-[24px]">stars</span>
                    </div>
                    <span className="font-label-sm text-sm font-bold text-on-surface mb-1">{achievement}</span>
                  </div>
                ))}
                {stats.achievements.length === 0 && (
                  <p className="col-span-2 text-center text-on-surface-variant italic">Aún no has desbloqueado logros.</p>
                )}
              </div>
            </section>

            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              <section className="md:col-span-2 bg-surface-container rounded-xl p-6 border border-outline-variant/30 flex items-center gap-6 shadow-sm">
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
              
              <section className="md:col-span-1 bg-surface-variant rounded-xl p-6 border border-outline-variant/30 flex flex-col justify-center items-center text-center hover:bg-surface-dim transition-colors cursor-pointer group shadow-sm">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant mb-2 group-hover:scale-110 transition-transform duration-300">support_agent</span>
                <h4 className="font-title-sm text-xl font-medium text-on-surface mb-1">¿Necesitas ayuda?</h4>
                <p className="font-body-md text-[12px] text-on-surface-variant">Contacta con soporte docente</p>
              </section>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
      <aside className="hidden lg:flex flex-col bg-surface-container-lowest dark:bg-zinc-900 w-64 border-r border-outline-variant/20 fixed left-0 top-[73px] h-[calc(100vh-73px)] overflow-y-auto z-40">
        <div className="p-8 border-b border-outline-variant/10">
          <h2 className="font-display-lg font-bold text-on-surface text-xl tracking-tight">Tu Progreso</h2>
          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1">Nivel Actual: {activeCourses[0]?.nivel || "N5"}</p>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-body-md text-base ${
                activeTab === item.id
                  ? "bg-primary text-on-primary shadow-md translate-x-2"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              }`}
            >
              <span className={`material-symbols-outlined ${activeTab === item.id ? "fill-1" : ""}`}>{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 mt-auto">
          <div className="bg-primary-container p-4 rounded-2xl border border-outline-variant/20">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Próxima Meta</p>
            <p className="text-xs text-on-surface-variant leading-tight">Completa 3 lecciones más para el rango "Explorador".</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-6 md:p-12 w-full max-w-5xl mx-auto min-h-screen">
        {renderContent()}
      </main>
    </div>
  );
}

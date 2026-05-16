import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardStats } from "../types";
import { supabase } from "../../supabase";

export function Dashboard() {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // 1. Get current user
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
           setIsLoading(false);
           return;
        }

        // 2. Fetch progress
        const { data: progress } = await supabase
          .from('progreso')
          .select('*, lecciones(curso_id)')
          .eq('usuario_id', user.id);

        const completedCount = progress?.filter(p => p.completada).length || 0;

        // 3. Fetch total lessons count
        const { count: totalLessons } = await supabase
          .from('lecciones')
          .select('*', { count: 'exact', head: true });

        const progressPercent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

        // 4. Get active courses
        const activeIds = [...new Set(progress?.map(p => p.lecciones?.curso_id))].filter(Boolean);
        const { data: courses } = await supabase
          .from('cursos')
          .select('*')
          .in('id', activeIds);

        setData({
          stats: {
            completedLessons: completedCount,
            globalProgress: progressPercent,
            achievements: completedCount >= 1 ? ['Primeros Pasos - 1 Lección'] : []
          },
          activeCourses: courses || []
        });
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
              {activeCourses.length > 0 ? (
                activeCourses.map(course => (
                  <Link 
                    key={course.id} 
                    to={`/courses/${course.id}`}
                    className="bg-surface-container hover:bg-surface-container-high p-6 rounded-2xl border border-outline-variant transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                        Nivel {course.nivel}
                      </span>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                    <h3 className="font-title-lg text-xl font-bold text-on-surface mb-2">{course.titulo}</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">{course.descripcion}</p>
                    <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[45%]" />
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-12 text-center bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
                  <p className="text-on-surface-variant">No tienes cursos activos todavía.</p>
                  <Link to="/courses" className="text-primary font-bold hover:underline mt-2 inline-block">Explorar catálogo</Link>
                </div>
              )}
            </div>
          </div>
        );

      case "vocabulario":
        return (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="mb-4">
              <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-2">Vocabulario N5</h2>
              <p className="text-on-surface-variant italic">Repasa las palabras más comunes del primer nivel.</p>
            </header>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { jp: "ねこ", ro: "Neko", es: "Gato", type: "Sustantivo" },
                { jp: "いぬ", ro: "Inu", es: "Perro", type: "Sustantivo" },
                { jp: "たべる", ro: "Taberu", es: "Comer", type: "Verbo" },
                { jp: "みず", ro: "Mizu", es: "Agua", type: "Sustantivo" },
                { jp: "にほん", ro: "Nihon", es: "Japón", type: "Lugar" },
                { jp: "せんせい", ro: "Sensei", es: "Maestro", type: "Persona" },
                { jp: "がくせい", ro: "Gakusei", es: "Estudiante", type: "Persona" },
                { jp: "ともだち", ro: "Tomodachi", es: "Amigo", type: "Persona" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-[10px] text-primary font-bold uppercase mb-2">{item.type}</div>
                  <div className="text-3xl font-bold mb-1">{item.jp}</div>
                  <div className="text-xs text-on-surface-variant italic mb-2">{item.ro}</div>
                  <div className="text-sm font-medium border-t border-outline-variant pt-2 mt-2">{item.es}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "gramatica":
        return (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <header className="mb-4">
              <h2 className="font-headline-md text-3xl font-semibold text-on-surface mb-2">Guía de Gramática</h2>
              <p className="text-on-surface-variant italic">Conceptos clave para construir tus primeras frases.</p>
            </header>
            
            <div className="space-y-6">
              {[
                { title: "Partícula は (Wa)", desc: "Marca el tema de la oración. Indica de qué estamos hablando.", ex: "Watashi wa Leti desu (Yo soy Leti)" },
                { title: "Partícula が (Ga)", desc: "Marca el sujeto. Se usa para enfatizar quién realiza la acción.", ex: "Inu ga imasu (Hay un perro)" },
                { title: "Partícula の (No)", desc: "Indica posesión o relación entre sustantivos.", ex: "Sensei no hon (El libro del profesor)" },
                { title: "Partícula を (Wo)", desc: "Marca el objeto directo de la oración (la acción recae sobre esto).", ex: "Mizu wo nomimasu (Bebo agua)" },
              ].map((item, i) => (
                <div key={i} className="bg-primary-container/30 p-6 rounded-2xl border border-primary/10">
                  <h3 className="font-bold text-xl text-primary mb-2">{item.title}</h3>
                  <p className="text-on-surface mb-3">{item.desc}</p>
                  <div className="bg-white/50 p-3 rounded-lg border border-outline-variant text-sm italic">
                    Ejemplo: <span className="font-medium text-on-surface">{item.ex}</span>
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
              <p className="text-on-surface-variant italic">El orden de los trazos es el alma de la escritura.</p>
            </header>
            
            <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Reglas de Oro</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                      <p className="text-on-surface">De izquierda a derecha.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                      <p className="text-on-surface">De arriba hacia abajo.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                      <p className="text-on-surface">Lo horizontal primero que lo vertical si se cruzan.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">4</span>
                      <p className="text-on-surface">El trazo central antes que los laterales simétricos.</p>
                    </li>
                  </ul>
                </div>
                <div className="aspect-square bg-white rounded-2xl border-4 border-dashed border-outline-variant flex items-center justify-center relative">
                  <div className="text-[120px] font-display text-outline-variant opacity-20">書</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest bg-white px-4">Espacio de Práctica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col gap-12 animate-in fade-in duration-700">
            <header>
              <h1 className="font-display-lg text-4xl md:text-5xl font-bold text-on-surface mb-2">
                Bienvenido de nuevo
              </h1>
              <p className="text-on-surface-variant text-lg">Tu camino hacia el dominio del japonés continúa.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-container p-6 rounded-3xl border border-primary/10">
                <div className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">Lecciones Completadas</div>
                <div className="text-4xl font-bold text-on-primary-container mb-1">{stats.completedLessons}</div>
                <div className="text-xs text-on-primary-container/70">De todas las unidades disponibles</div>
              </div>
              <div className="bg-secondary-container p-6 rounded-3xl border border-secondary/10">
                <div className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-2">Progreso Global</div>
                <div className="text-4xl font-bold text-on-secondary-container mb-1">{stats.globalProgress}%</div>
                <div className="w-full bg-secondary/20 h-1 rounded-full mt-2">
                  <div className="bg-secondary h-full rounded-full transition-all duration-1000" style={{ width: `${stats.globalProgress}%` }} />
                </div>
              </div>
              <div className="bg-surface-container-high p-6 rounded-3xl border border-outline-variant">
                <div className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest mb-2">Logros</div>
                <div className="flex gap-2 flex-wrap">
                  {stats.achievements.length > 0 ? (
                    stats.achievements.map((a, i) => (
                      <span key={i} className="bg-on-surface text-surface text-[10px] font-bold px-2 py-1 rounded uppercase">{a}</span>
                    ))
                  ) : (
                    <span className="text-xs text-on-surface-variant italic">Comienza a estudiar para ganar insignias.</span>
                  )}
                </div>
              </div>
            </div>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline-md text-2xl font-bold text-on-surface">Cursos Activos</h2>
                <Link to="/courses" className="text-primary font-bold text-sm hover:underline">Ver catálogo completo</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCourses.length > 0 ? (
                  activeCourses.map(course => (
                    <div key={course.id} className="bg-surface-container rounded-2xl p-6 border border-outline-variant flex gap-6 items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-title-lg text-lg font-bold text-on-surface">{course.titulo}</h3>
                        <p className="text-on-surface-variant text-sm">Nivel {course.nivel}</p>
                      </div>
                      <Link to={`/courses/${course.id}`} className="p-2 hover:bg-surface-variant rounded-full transition-colors">
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center bg-surface-container-low rounded-2xl border border-dashed border-outline-variant italic text-on-surface-variant">
                    No tienes cursos activos en este momento.
                  </div>
                )}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-screen bg-surface">
      <aside className="w-full lg:w-64 bg-surface-container-low border-b lg:border-b-0 lg:border-r border-outline-variant flex flex-col shrink-0 lg:fixed lg:h-full z-20">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-on-primary font-bold">L</span>
            </div>
            <span className="font-bold text-on-surface tracking-tight">Panel de Control</span>
          </div>
        </div>
        <nav className="flex-grow px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-primary text-on-primary shadow-md translate-x-1"
                  : "text-on-surface-variant hover:bg-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-label-sm text-sm font-bold uppercase tracking-wider">
                {item.label}
              </span>
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

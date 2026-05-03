import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Course } from "../types";

type LevelFilter = "Todos" | "N5" | "N4";

const backupCourses: Course[] = [
  {
    id: "sakura",
    titulo: "SAKURA (桜) - Fundamentos",
    nivel: "N5",
    descripcion: "Da tus primeros pasos en el idioma. Aprende Hiragana, Katakana y las estructuras gramaticales esenciales para presentaciones y rutinas diarias.",
    image: ""
  },
  {
    id: "kaze",
    titulo: "KAZE (風) - Expresión Cotidiana",
    nivel: "N5",
    descripcion: "Siente la ligereza del idioma. Dominarás el Katakana y estructuras esenciales para expresarte con naturalidad en situaciones diarias, dejando atrás la rigidez.",
    image: ""
  },
  {
    id: "michi",
    titulo: "MICHI (道) - Transición Intermedio",
    nivel: "N4",
    descripcion: "Abre la puerta al japonés intermedio. Domina las formas verbales complejas (potencial, volitivo) y amplía tu vocabulario situacional.",
    image: ""
  }
];

export function Catalog() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeFilter, setActiveFilter] = useState<LevelFilter>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        // Si hay datos en la DB, los usamos. Si no, usamos el backup.
        setCourses(data.length > 0 ? data : backupCourses);
      } catch (error) {
        console.error("Error fetching courses, using backup:", error);
        setCourses(backupCourses);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesFilter = activeFilter === "Todos" || course.nivel === activeFilter;
    const matchesSearch = course.titulo.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-16 flex flex-col gap-16 relative">
      <header className="flex flex-col gap-4 max-w-3xl">
        <h1 className="font-display-lg text-5xl font-bold tracking-tight text-primary">El camino de la maestría</h1>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl">
          Explora nuestra colección de cursos diseñados para guiarte desde los primeros trazos hasta la fluidez natural. Aprende a tu propio ritmo, con serenidad y propósito.
        </p>
      </header>

      <section className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-surface-container rounded-xl p-6 border border-outline-variant/30">
        <div className="relative w-full md:w-96">
          <span aria-hidden="true" className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-[45%] text-outline text-[18px]">search</span>
          <input 
            className="w-full bg-background border-b border-outline-variant focus:border-primary focus:outline-none px-12 py-3 rounded-t-lg transition-colors font-body-md text-base text-on-surface placeholder:text-outline/70" 
            placeholder="Buscar cursos, temas o kanji..." 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <span className="font-label-sm text-sm font-bold text-on-surface-variant">Filtrar por nivel:</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveFilter("Todos")}
              className={`px-4 py-2 rounded-full font-label-sm text-sm font-bold transition-colors ${activeFilter === "Todos" ? "bg-primary text-on-primary hover:bg-primary/90" : "border border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
            >Todos</button>
            <button 
              onClick={() => setActiveFilter("N5")}
              className={`px-4 py-2 rounded-full font-label-sm text-sm font-bold transition-colors ${activeFilter === "N5" ? "bg-primary text-on-primary hover:bg-primary/90" : "border border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
            >N5</button>
            <button 
              onClick={() => setActiveFilter("N4")}
              className={`px-4 py-2 rounded-full font-label-sm text-sm font-bold transition-colors ${activeFilter === "N4" ? "bg-primary text-on-primary hover:bg-primary/90" : "border border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
            >N4</button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <article key={course.id} className="group relative bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 hover:border-outline-variant/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-tertiary-container/30 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full border border-outline-variant text-primary font-label-sm text-sm font-bold bg-background">{course.nivel}</span>
              <span aria-hidden="true" className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">eco</span>
            </div>
            <h3 className="font-headline-md text-2xl font-semibold text-on-surface mb-3 relative z-10">{course.titulo}</h3>
            <p className="font-body-md text-base text-on-surface-variant mb-8 flex-grow relative z-10">
              {course.descripcion}
            </p>
            <div className="mt-auto flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-4 text-on-surface-variant/80 font-label-sm text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">schedule</span>
                  12 semanas
                </div>
                <div className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">menu_book</span>
                  Sin requisitos
                </div>
              </div>
              <Link to={`/courses/${course.id}`} className="inline-flex items-center justify-between w-full mt-4 pt-4 border-t border-outline-variant/20 font-label-sm text-sm font-bold text-primary group-hover:text-on-surface transition-colors">
                Ver detalles del curso
                <span aria-hidden="true" className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </article>
        ))}
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-12 text-center">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 font-light">search_off</span>
            <h3 className="font-title-sm text-xl text-on-surface font-medium">No se encontraron cursos</h3>
            <p className="font-body-md text-base text-on-surface-variant mt-2">Intenta ajustar tu búsqueda o cambiar el filtro de nivel.</p>
          </div>
        )}
      </section>
    </main>
  );
}

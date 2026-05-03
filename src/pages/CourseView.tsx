import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Course, Lesson } from "../types";

const backupCourses: Course[] = [
  {
    id: "sakura",
    titulo: "SAKURA (桜) - Fundamentos",
    nivel: "N5",
    descripcion: "Al igual que la efímera belleza de la flor de cerezo, este curso representa el primer y delicado florecer de tu comprensión del idioma. Sentaremos las bases esenciales del japonés con calma y armonía.",
    image: ""
  },
  {
    id: "kaze",
    titulo: "KAZE (風) - Expresión Cotidiana",
    nivel: "N5",
    descripcion: "Siente la ligereza del idioma. Dominarás el Katakana y estructuras esenciales para expresarte con naturalidad en situaciones diarias.",
    image: ""
  },
  {
    id: "michi",
    titulo: "MICHI (道) - Transición Intermedio",
    nivel: "N4",
    descripcion: "Abre la puerta al japonés intermedio. Domina las formas verbales complejas y amplía tu vocabulario situacional.",
    image: ""
  }
];

const backupLessons: Record<string, Lesson[]> = {
  "sakura": [
    { id: "l1", curso_id: "sakura", titulo: "El Arte del Silabario (Lección 1)", contenido: "Introducción a la escritura japonesa, trazos fundamentales y memorización visual del Hiragana.", orden: 1 },
    { id: "l2", curso_id: "sakura", titulo: "Aisatsu: Saludos y Cortesía", contenido: "La importancia del contexto social. Cómo saludar, despedirse y agradecer según la hora del día.", orden: 2 }
  ],
  "kaze": [
    { id: "k1", curso_id: "kaze", titulo: "Katakana: El Segundo Pilar", contenido: "Dominio de las palabras extranjeras y onomatopeyas.", orden: 1 }
  ]
};

export function CourseView() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCourseDetails() {
      try {
        const response = await fetch(`/api/courses/${courseId}`);
        if (!response.ok) throw new Error("Course not found in DB");
        const data = await response.json();
        setCourse(data);
        setLessons(data.lessons && data.lessons.length > 0 ? data.lessons : (backupLessons[courseId || ""] || []));
      } catch (error) {
        console.warn("Course not found in DB, checking backup...");
        const backup = backupCourses.find(c => c.id === courseId);
        if (backup) {
          setCourse(backup);
          setLessons(backupLessons[courseId || ""] || []);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchCourseDetails();
  }, [courseId]);

  if (isLoading) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-on-surface">Curso no encontrado</h2>
          <Link to="/courses" className="text-primary hover:underline mt-4 inline-block">Volver al catálogo</Link>
        </div>
      </div>
    );
  }
  
  return (
    <main className="flex-grow flex flex-col relative w-full max-w-7xl mx-auto">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-no-repeat bg-contain bg-top opacity-[0.03] pointer-events-none z-[-1]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBCTcBG-8uqj_78fWQATXwSHnDHTVKnF_1Q-po5t1ktmV1ytXHFQMoy0tUTWOsYBihKQ2AJkGauyKgrGf1msywe997VJmRraLD5rYxAU_WuttlrZytdC9H8cerseI1lHA7AZVgGDS8KdGqYzGxje1Aq6rp6LFKEJhBJBCzoIls46N1F6Mh6aj3Tm5Ie6mC27VK-w3VEr2UUA87Lwv2swQcQ96KXww8Fh0zLDQSh_ZINF6Msg5DcBm0HaGY6qm1vAm7FHKd8M9Y3r4')"}}>
      </div>
            <section className="w-full px-8 pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute left-8 top-[80px] text-[240px] leading-none font-display-lg text-primary-fixed-dim opacity-10 pointer-events-none select-none -z-10 tracking-tighter font-bold">
          {course.titulo.charAt(0)}
        </div>
        <div className="max-w-3xl flex flex-col gap-8 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-sm font-bold uppercase tracking-wider">Nivel {course.nivel}</span>
            <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-sm font-bold uppercase tracking-wider">Inicial</span>
          </div>
          <h1 className="font-display-lg text-5xl md:text-6xl font-bold text-on-background">
            {course.titulo}
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl">
            {course.descripcion}
          </p>
          <div className="flex items-center gap-6 mt-4">
            <button className="bg-primary hover:bg-on-surface text-on-primary font-label-sm text-sm font-bold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
              Inscribirse Ahora
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
            <span className="font-title-sm text-xl font-medium text-on-surface-variant">
              Gratis
            </span>
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container rounded-xl p-10 flex flex-col justify-between gap-8 border border-transparent hover:border-outline-variant transition-colors">
            <div>
              <h2 className="font-headline-md text-3xl font-semibold text-on-background mb-2">Fundamentos Claros</h2>
              <p className="font-body-md text-base text-on-surface-variant max-w-lg">
                Dominaremos los pilares iniciales necesarios para comunicarte con respeto y precisión desde el primer día.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-surface p-2 rounded-full mt-1">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 0"}}>draw</span>
                </div>
                <div>
                  <h3 className="font-title-sm text-xl font-medium text-on-surface mb-1">Hiragana y Katakana</h3>
                  <p className="font-body-md text-base text-on-surface-variant">Lectura y escritura fluida de los dos silabarios esenciales.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-surface p-2 rounded-full mt-1">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 0"}}>waving_hand</span>
                </div>
                <div>
                  <h3 className="font-title-sm text-xl font-medium text-on-surface mb-1">Saludos (Aisatsu)</h3>
                  <p className="font-body-md text-base text-on-surface-variant">Expresiones cotidianas para interacciones sociales básicas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-container rounded-xl p-10 flex flex-col gap-4 relative overflow-hidden group border border-outline-variant/30">
            <div className="absolute -right-5 -top-5 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[140px] text-primary" style={{fontVariationSettings: "'FILL' 0"}}>spa</span>
            </div>
            <h3 className="font-title-sm text-xl font-medium text-on-primary-container relative z-10">El Método Leti</h3>
            <p className="font-body-md text-base text-on-surface-variant relative z-10 border-b border-outline-variant/30 pb-4">
              Aprender japonés no debe ser una carrera estresante. Este curso está diseñado para reducir la carga cognitiva.
            </p>
            <div className="mt-auto relative z-10 pt-2">
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 font-body-md text-base text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                  8 Semanas sugeridas
                </li>
                <li className="flex items-center gap-3 font-body-md text-base text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-outline">menu_book</span>
                  {lessons.length} Lecciones principales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-16 max-w-4xl">
        <h2 className="font-headline-md text-3xl font-bold text-on-background mb-8">Índice del Curso</h2>
        <div className="flex flex-col border-t border-outline-variant">
          {lessons.map((lesson, index) => (
            <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="py-8 border-b border-outline-variant flex flex-col md:flex-row gap-6 md:items-start group hover:bg-surface-container-lowest transition-colors px-4 -mx-4 rounded">
              <div className="font-label-sm text-sm font-bold text-outline w-24 shrink-0 pt-1">Módulo {String(index + 1).padStart(2, '0')}</div>
              <div className="flex-grow">
                <h3 className="font-title-sm text-xl font-medium text-on-surface mb-2 group-hover:text-primary transition-colors">{lesson.titulo}</h3>
                <p className="font-body-md text-base text-on-surface-variant mb-4">{lesson.contenido.substring(0, 150)}...</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-[11px] font-bold rounded uppercase tracking-wide">Lección {lesson.orden}</span>
                </div>
              </div>
            </Link>
          ))}
          {lessons.length === 0 && (
            <p className="py-8 text-on-surface-variant italic">No hay lecciones disponibles para este curso todavía.</p>
          )}
        </div>
      </section>
    </main>
  );
}

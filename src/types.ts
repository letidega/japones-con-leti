export interface User {
  id: string;
  nombre: string;
  email: string;
  plan: string;
}

export interface Course {
  id: string;
  titulo: string;
  nivel: string;
  descripcion: string;
  image: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  curso_id: string;
  titulo: string;
  contenido: string;
  orden: number;
}

export interface Progress {
  usuario_id: string;
  leccion_id: string;
  completada: boolean;
  fecha: string;
}

export interface DashboardStats {
  user: User;
  stats: {
    completedLessons: number;
    globalProgress: number;
    achievements: string[];
  };
  activeCourses: Course[];
}

import { supabase } from './supabase';

const courses = [
  {
    titulo: "SAKURA (桜) - Fundamentos",
    nivel: "N5",
    descripcion: "Da tus primeros pasos en el idioma. Aprende Hiragana, Katakana y las estructuras gramaticales esenciales para presentaciones y rutinas diarias.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBCTcBG-8uqj_78fWQATXwSHnDHTVKnF_1Q-po5t1ktmV1ytXHFQMoy0tUTWOsYBihKQ2AJkGauyKgrGf1msywe997VJmRraLD5rYxAU_WuttlrZytdC9H8cerseI1lHA7AZVgGDS8KdGqYzGxje1Aq6rp6LFKEJhBJBCzoIls46N1F6Mh6aj3Tm5Ie6mC27VK-w3VEr2UUA87Lwv2swQcQ96KXww8Fh0zLDQSh_ZINF6Msg5DcBm0HaGY6qm1vAm7FHKd8M9Y3r4"
  },
  {
    titulo: "KAZE (風) - Expresión Cotidiana",
    nivel: "N5",
    descripcion: "Siente la ligereza del idioma. Dominarás el Katakana y estructuras esenciales para expresarte con naturalidad en situaciones diarias, dejando atrás la rigidez.",
    image: "https://images.unsplash.com/photo-1528164344705-47542687990d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    titulo: "MICHI (道) - Transición Intermedio",
    nivel: "N4",
    descripcion: "Abre la puerta al japonés intermedio. Domina las formas verbales complejas (potencial, volitivo) y amplía tu vocabulario situacional.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop"
  }
];

async function seed() {
  console.log('Seeding database...');

  for (const course of courses) {
    const { data: insertedCourse, error: courseError } = await supabase
      .from('cursos')
      .upsert(course)
      .select()
      .single();

    if (courseError) {
      console.error(`Error inserting course ${course.titulo}:`, courseError.message);
      continue;
    }

    console.log(`Course inserted: ${insertedCourse.titulo}`);

    // Add some dummy lessons
    const lessons = [
      {
        curso_id: insertedCourse.id,
        titulo: 'Introducción y Escritura',
        contenido: 'Bienvenido al curso. En esta lección aprenderemos los trazos básicos.',
        orden: 1
      },
      {
        curso_id: insertedCourse.id,
        titulo: 'Saludos Básicos',
        contenido: 'Ohayou, Konnichiwa, Konbanwa.',
        orden: 2
      }
    ];

    const { error: lessonsError } = await supabase
      .from('lecciones')
      .upsert(lessons);

    if (lessonsError) {
      console.error(`Error inserting lessons for ${insertedCourse.titulo}:`, lessonsError.message);
    } else {
      console.log(`Lessons inserted for ${insertedCourse.titulo}`);
    }
  }

  console.log('Seeding complete!');
}

seed();

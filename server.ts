import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

// --- IN-MEMORY DATABASE (Mocking SQL for Prototype) ---
const db = {
  users: [
    { id: '1', nombre: 'Alumno Demo', email: 'demo@demo.com', password: 'password', plan: 'pro' }
  ],
  courses: [
    { id: 'c1', titulo: 'Japonés desde Cero (Hiragana y Katakana)', nivel: 'N5', descripcion: 'Aprende los silabarios básicos del idioma japonés.', image: 'https://images.unsplash.com/photo-1570453342371-33230b809a47?auto=format&fit=crop&q=80&w=800' },
    { id: 'c2', titulo: 'Gramática Básica', nivel: 'N5', descripcion: 'Estructuras fundamentales del japonés.', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=800' },
    { id: 'c3', titulo: 'Kanji Esencial N4', nivel: 'N4', descripcion: 'Los primeros 100 kanjis para defenderte.', image: 'https://images.unsplash.com/photo-1610024062304-49c09f8742fb?auto=format&fit=crop&q=80&w=800' }
  ],
  lessons: [
    { id: 'l1', curso_id: 'c1', titulo: 'Introducción al Hiragana', contenido: 'El hiragana es el silabario básico. Hoy aprenderemos A, I, U, E, O.', orden: 1 },
    { id: 'l2', curso_id: 'c1', titulo: 'Fila K (KA, KI, KU, KE, KO)', contenido: 'Continuamos con la segunda fila del hiragana.', orden: 2 },
    { id: 'l3', curso_id: 'c1', titulo: 'Fila S (SA, SHI, SU, SE, SO)', contenido: 'Presta especial atención a SHI, se pronuncia diferente a lo esperado.', orden: 3 },
  ],
  progress: [
    { usuario_id: '1', leccion_id: 'l1', completada: true, fecha: new Date().toISOString() },
    { usuario_id: '1', leccion_id: 'l2', completada: false, fecha: new Date().toISOString() }
  ]
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API ENDPOINTS ---

  // Auth endpoints
  app.post('/api/auth/register', (req, res) => {
    const { nombre, email, password } = req.body;
    const existing = db.users.find(u => u.email === email);
    if (existing) return res.status(400).json({ error: 'Email ya registrado' });
    
    const newUser = { id: Date.now().toString(), nombre, email, password, plan: 'free' };
    db.users.push(newUser);
    res.json({ message: 'Usuario registrado', user: { id: newUser.id, nombre: newUser.nombre, email: newUser.email, plan: newUser.plan } });
  });

  app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = db.users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });
    
    res.json({ message: 'Login exitoso', token: 'mock-jwt-token-123', user: { id: user.id, nombre: user.nombre, email: user.email, plan: user.plan } });
  });

  // Courses
  app.get('/api/courses', (req, res) => {
    res.json(db.courses);
  });

  app.get('/api/courses/:id', (req, res) => {
    const course = db.courses.find(c => c.id === req.params.id);
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' });
    
    const courseLessons = db.lessons.filter(l => l.curso_id === req.params.id).sort((a, b) => a.orden - b.orden);
    res.json({ ...course, lessons: courseLessons });
  });

  // Lessons
  app.get('/api/lessons/:id', (req, res) => {
    const lesson = db.lessons.find(l => l.id === req.params.id);
    if (!lesson) return res.status(404).json({ error: 'Lección no encontrada' });
    res.json(lesson);
  });

  // Progress
  app.get('/api/progress/:userId', (req, res) => {
    const userProgress = db.progress.filter(p => p.usuario_id === req.params.userId);
    res.json(userProgress);
  });

  app.post('/api/progress', (req, res) => {
    const { usuario_id, leccion_id, completada } = req.body;
    let prog = db.progress.find(p => p.usuario_id === usuario_id && p.leccion_id === leccion_id);
    
    if (prog) {
      prog.completada = completada;
      prog.fecha = new Date().toISOString();
    } else {
      prog = { usuario_id, leccion_id, completada, fecha: new Date().toISOString() };
      db.progress.push(prog);
    }
    res.json(prog);
  });

  // User Dashboard Aggregation
  app.get('/api/user/dashboard/:userId', (req, res) => {
    const user = db.users.find(u => u.id === req.params.userId);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const userProgress = db.progress.filter(p => p.usuario_id === req.params.userId);
    const completedLessonsCount = userProgress.filter(p => p.completada).length;
    
    // Calculate global progress based on all lessons (mock logic)
    const totalLessonsCount = db.lessons.length;
    const globalProgressPercentage = totalLessonsCount === 0 ? 0 : Math.round((completedLessonsCount / totalLessonsCount) * 100);

    // Get current active courses
    const activeCourseIds = [...new Set(userProgress.map(p => db.lessons.find(l => l.id === p.leccion_id)?.curso_id))].filter(Boolean);
    const activeCourses = activeCourseIds.map(id => db.courses.find(c => c.id === id));

    res.json({
      user: { id: user.id, nombre: user.nombre, plan: user.plan },
      stats: {
        completedLessons: completedLessonsCount,
        globalProgress: globalProgressPercentage,
        achievements: completedLessonsCount >= 1 ? ['Primeros Pasos - 1 Lección'] : []
      },
      activeCourses
    });
  });

  // --- VITE MIDDLEWARE ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

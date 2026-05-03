import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { supabase } from './supabase';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API ENDPOINTS ---

  // Auth endpoints
  app.post('/api/auth/register', async (req, res) => {
    const { nombre, email, password } = req.body;
    
    // Using Supabase Auth for registration
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre, plan: 'free' }
      }
    });

    if (authError) return res.status(400).json({ error: authError.message });
    
    res.json({ 
      message: 'Usuario registrado. Revisa tu email para confirmar.', 
      user: { 
        id: authData.user?.id, 
        nombre, 
        email, 
        plan: 'free' 
      } 
    });
  });

  app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return res.status(401).json({ error: 'Credenciales inválidas' });
    
    res.json({ 
      message: 'Login exitoso', 
      token: data.session.access_token, 
      user: { 
        id: data.user.id, 
        nombre: data.user.user_metadata.nombre, 
        email: data.user.email, 
        plan: data.user.user_metadata.plan || 'free' 
      } 
    });
  });

  // Courses
  app.get('/api/courses', async (req, res) => {
    const { data, error } = await supabase
      .from('cursos')
      .select('*');
    
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  });

  app.get('/api/courses/:id', async (req, res) => {
    const { data: course, error: courseError } = await supabase
      .from('cursos')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (courseError || !course) return res.status(404).json({ error: 'Curso no encontrado' });
    
    const { data: lessons, error: lessonsError } = await supabase
      .from('lecciones')
      .select('*')
      .eq('curso_id', req.params.id)
      .order('orden', { ascending: true });

    if (lessonsError) return res.status(500).json({ error: lessonsError.message });
    
    res.json({ ...course, lessons });
  });

  // Lessons
  app.get('/api/lessons/:id', async (req, res) => {
    const { data, error } = await supabase
      .from('lecciones')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error || !data) return res.status(404).json({ error: 'Lección no encontrada' });
    res.json(data);
  });

  // Progress
  app.get('/api/progress/:userId', async (req, res) => {
    const { data, error } = await supabase
      .from('progreso')
      .select('*')
      .eq('usuario_id', req.params.userId);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  });

  app.post('/api/progress', async (req, res) => {
    const { usuario_id, leccion_id, completada } = req.body;
    
    const { data, error } = await supabase
      .from('progreso')
      .upsert({ 
        usuario_id, 
        leccion_id, 
        completada, 
        fecha: new Date().toISOString() 
      }, {
        onConflict: 'usuario_id,leccion_id'
      })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  });

  // User Dashboard Aggregation
  app.get('/api/user/dashboard/:userId', async (req, res) => {
    // Fetch user progress
    const { data: userProgress, error: progressError } = await supabase
      .from('progreso')
      .select('*, lecciones(curso_id)')
      .eq('usuario_id', req.params.userId);

    if (progressError) return res.status(500).json({ error: progressError.message });

    const completedLessonsCount = userProgress.filter(p => p.completada).length;
    
    // Fetch all lessons to calculate global progress
    const { count: totalLessonsCount, error: countError } = await supabase
      .from('lecciones')
      .select('*', { count: 'exact', head: true });

    const globalProgressPercentage = totalLessonsCount === 0 ? 0 : Math.round((completedLessonsCount / (totalLessonsCount || 1)) * 100);

    // Get active courses (mock logic translated to Supabase)
    const activeCourseIds = [...new Set(userProgress.map(p => p.lecciones?.curso_id))].filter(Boolean);
    
    const { data: activeCourses, error: coursesError } = await supabase
      .from('cursos')
      .select('*')
      .in('id', activeCourseIds);

    res.json({
      stats: {
        completedLessons: completedLessonsCount,
        globalProgress: globalProgressPercentage,
        achievements: completedLessonsCount >= 1 ? ['Primeros Pasos - 1 Lección'] : []
      },
      activeCourses: activeCourses || []
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

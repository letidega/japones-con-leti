import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { supabase } from "../supabase";
import logo from "../assets/logo.png";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (loginError) throw loginError;
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { nombre: name, plan: 'free' }
          }
        });
        if (signUpError) throw signUpError;
        alert("¡Registro exitoso! Por favor, verifica tu correo electrónico.");
      }

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || "Error al intentar conectar con el servidor.");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Japonés con Leti" className="h-32 w-auto" />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {isLogin ? "Iniciar Sesión" : "Crear una cuenta"}
          </h2>
          <p className="mt-2 text-slate-500 text-sm">
            {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-600 font-bold hover:text-red-800 transition-colors"
            >
              {isLogin ? "Regístrate ahora" : "Inicia sesión"}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm font-medium">
              {error}
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                placeholder="Tu nombre completo"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all items-center gap-2 mt-2"
          >
            {isLogin ? "Entrar" : "Crear cuenta"}
            <LogIn className="w-4 h-4" />
          </button>

          {isLogin && <div className="text-center mt-4">
            <span className="text-xs text-slate-400">Demo User: demo@demo.com / password</span>
          </div>}
        </form>
      </div>
    </div>
  );
}

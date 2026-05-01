import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-[#F7EFF1]/90 backdrop-blur-sm border-b border-[#EAD7D7] docked full-width top-0 sticky z-50 transition-opacity duration-300">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Japonés con Leti" className="h-20 w-auto py-2" />
        </Link>


        <div className="hidden md:flex items-center gap-8 font-serif text-sm tracking-wide">
          <Link to="/courses" className={`transition-opacity duration-300 hover:opacity-80 ${location.pathname.startsWith('/courses') ? 'text-[#2F2F2F] border-b border-[#2F2F2F] pb-1 font-bold' : 'text-[#2F2F2F]/60 hover:text-[#2F2F2F]'}`}>Cursos</Link>
          <Link to="/resources" className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300">Recursos</Link>
          <Link to="/premium" className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300">Premium</Link>
          <Link to="/literature" className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300">Literatura</Link>
          <Link to="/blog" className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300">Blog</Link>
        </div>
        <Link to="/dashboard" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-sm text-label-sm hover:bg-surface-tint transition-colors">
          Área Privada
        </Link>
      </div>
    </nav>
  );
}

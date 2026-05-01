import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#F7EFF1] border-t border-[#EAD7D7] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center">
          <img src={logo} alt="Japonés con Leti" className="h-16 w-auto opacity-80" />
        </div>


        <div className="flex flex-wrap justify-center gap-6 font-serif text-sm">
          <a className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300" href="#">El Método</a>
          <a className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300" href="#">Contacto</a>
          <a className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300" href="#">Newsletter</a>
          <a className="text-[#2F2F2F]/60 hover:text-[#2F2F2F] hover:opacity-80 transition-opacity duration-300" href="#">Privacidad</a>
        </div>
        <div className="font-serif text-sm text-[#2F2F2F]/60 text-center md:text-right">
          © 2024 Japonés con Leti. El arte de aprender con calma y armonía.
        </div>
      </div>
    </footer>
  );
}

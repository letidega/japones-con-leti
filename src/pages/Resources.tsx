import { useState } from "react";
import { Link } from "react-router-dom";

export function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDownload = (file: string) => {
    window.alert(`Iniciando descarga de: ${file}`);
  };

  const handleCategoryClick = (category: string) => {
    setSearchTerm(category);
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-16 overflow-hidden">
      <section className="max-w-3xl pt-8 pb-4">
        <h1 className="font-display-lg text-5xl md:text-6xl font-bold text-on-surface mb-6">El arte de aprender,<br/>a tu propio ritmo.</h1>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Descubre nuestra colección de recursos gratuitos diseñados con la filosofía del minimalismo y la calma. Materiales esenciales para fortalecer tus bases en el idioma japonés.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="material-symbols-outlined text-primary text-[28px]">download</span>
          <h2 className="font-headline-md text-3xl font-semibold text-on-surface">Descargables Esenciales</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-outline-variant group hover:bg-surface-container-high transition-colors duration-500 shadow-[0_8px_32px_rgba(98,93,95,0.05)]">
            <div>
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">draw</span>
              </div>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-3">Tabla de Hiragana</h3>
              <p className="font-body-md text-base text-on-surface-variant mb-8">
                  Guía completa de los 46 caracteres básicos con indicaciones de trazo y romaji. Ideal para imprimir y tener siempre a mano.
              </p>
            </div>
            <button onClick={() => handleDownload('Tabla de Hiragana.pdf')} className="self-start inline-flex items-center gap-2 border border-outline text-primary px-5 py-2.5 rounded-full font-label-sm text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span>Descargar PDF</span>
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
          </div>
          <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-outline-variant group hover:bg-surface-container-high transition-colors duration-500 shadow-[0_8px_32px_rgba(98,93,95,0.05)]">
            <div>
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">ink_pen</span>
              </div>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-3">Plantillas Genkoyoushi</h3>
              <p className="font-body-md text-base text-on-surface-variant mb-8">
                  Hojas cuadriculadas tradicionales para la práctica de caligrafía y escritura de ensayos en japonés.
              </p>
            </div>
            <button onClick={() => handleDownload('Plantillas Genkoyoushi.pdf')} className="self-start inline-flex items-center gap-2 border border-outline text-primary px-5 py-2.5 rounded-full font-label-sm text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span>Descargar PDF</span>
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
          </div>
          <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between border border-outline-variant relative overflow-hidden shadow-[0_8px_32px_rgba(98,93,95,0.05)]">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">auto_stories</span>
              </div>
              <h3 className="font-title-sm text-xl font-medium text-on-surface mb-3">Guía de Partículas</h3>
              <p className="font-body-md text-base text-on-surface-variant mb-8">
                  Un resumen claro y conciso de las partículas más utilizadas en el nivel N5 con ejemplos prácticos.
              </p>
            </div>
            <button onClick={() => handleDownload('Guía de Partículas.pdf')} className="relative z-10 self-start inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-sm text-sm font-bold hover:bg-on-primary-fixed-variant transition-all duration-300">
              <span>Descargar PDF</span>
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-surface-container rounded-full opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 py-8">
        <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-[28px]">play_lesson</span>
            <h2 className="font-headline-md text-3xl font-semibold text-on-surface">Mini Lecciones</h2>
          </div>
          <Link to="/courses" className="font-label-sm text-sm font-bold text-primary hover:text-on-primary-fixed-variant transition-colors flex items-center gap-1">
              Ver todas <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/5 group cursor-pointer" onClick={() => window.alert('Navegando a lección...')}>
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-surface-container-high relative">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWT3MOZ3HRkwPCtUElovxBVCqT82jZoqTvZERUbL2yIsqGWMRFpdn91uA-U8OSuaXRwR_chY4gT5zhUjufkHeI4FMa-bTc4epde3mVhmPD4fUj-QnszoK2QQkroO4QaKoS58PAi01L3f_2qv8swfpUzofbrnXn3QIafKujOMwMGcO6YzEJIDEaSSjXZdgaR8ipkjcrhagHcbM9vXZmQFtaxvjZlPy_ZEjSaUe4BhdTd-lIL5qEJOec_yzICCXoK7CRUkGVX5z7bI" alt="Zen garden" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full border border-outline-variant">
                <span className="font-label-sm text-[12px] text-primary font-bold">Gramática Básica</span>
              </div>
            </div>
            <h3 className="font-title-sm text-2xl font-medium text-on-surface mb-2 group-hover:text-tertiary transition-colors">La diferencia entre WA (は) y GA (が)</h3>
            <p className="font-body-md text-base text-on-surface-variant">Una explicación visual y sencilla para dejar de confundir las dos partículas más importantes del japonés.</p>
          </div>
          <div className="md:w-2/5 flex flex-col gap-6">
            <div className="flex gap-4 group cursor-pointer" onClick={() => window.alert('Navegando a lección...')}>
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZnikd3BXe-0Sebakj5nzD9sVrOucCQAgMPY9aNtLRPuZgrRw7F_VnukeDLLFR2lgc62RyLsPIRMcqibYzi6kJK17UNQtbUr_bGOCVieK7Dl1omA0RdXaiF8ABJVtG-waNSylT0Md7i7xT8PjWm4SFJQTxtZOlPtRn7R3iWGWhIRjsFjHLbUtPo8QAmVpigIAL8XOj5ac5-NKaE-vkhdpiqCC4s0ia97qfCEuZ2jBOmTK8XnD91Y38oRZU3gXYVYjIMcS2Z_3TYk" alt="Pincel" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-label-sm text-[12px] text-outline mb-1 font-bold">Vocabulario</span>
                <h4 className="font-title-sm text-[18px] font-medium text-on-surface leading-tight mb-2 group-hover:text-tertiary transition-colors">Saludos Esenciales</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2">Aprende a saludar correctamente según el momento del día.</p>
              </div>
            </div>
            <div className="h-px w-full bg-outline-variant/50"></div>
            <div className="flex gap-4 group cursor-pointer" onClick={() => window.alert('Navegando a lección...')}>
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYB4yVsag7hRrIqBXp45Z1mQJwryVwOcAs9TVEibw-GaxvS0KxJrhOwnq9a6rlA0IOPDpXGTtoSJT8k_1NK6Cg_gpnp2kxCj59Gd9v-91u62BLP4AA6NHQiDG7FaJ81Fr8fRr3DSsf5Ss2pU6OfDpGlEuVcNCUdia6oQ9Dz58H9ImX2lrysOymL_Rg6qDPz3jdrLVy9OH_dxBhkVZDO1JFVbfrB3l0zj1XTj9Bfo97sp5a4d6A5x5ZEVhtMJrc6qdhm8RDd0-3ZRA" alt="Té matcha" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-label-sm text-[12px] font-bold text-outline mb-1">Cultura</span>
                <h4 className="font-title-sm text-[18px] font-medium text-on-surface leading-tight mb-2 group-hover:text-tertiary transition-colors">Etiqueta en la Mesa</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2">Lo que debes saber antes de decir "Itadakimasu".</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[2rem] p-8 md:p-16 text-center border border-outline-variant/30 shadow-[0_8px_32px_rgba(98,93,95,0.05)] mb-8">
        <span className="material-symbols-outlined text-tertiary text-4xl mb-4">search</span>
        <h2 className="font-headline-md text-3xl font-bold text-on-surface mb-4">Diccionario Básico N5</h2>
        <p className="font-body-md text-base text-on-surface-variant max-w-xl mx-auto mb-10">
            Busca rápidamente vocabulario esencial. Puedes escribir en español, romaji o hiragana.
        </p>
        <div className="max-w-2xl mx-auto relative group">
          <input 
            className="w-full bg-surface-container-lowest border-b-2 border-outline-variant px-6 py-4 font-body-lg text-lg text-on-surface focus:border-primary focus:outline-none transition-colors rounded-t-lg" 
            placeholder="Ej: Gato, Neko, ねこ..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => window.alert('Buscando: ' + searchTerm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-50 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <span className="font-label-sm text-sm font-bold text-outline-variant mr-2 self-center">Explorar categorías:</span>
          <button onClick={() => handleCategoryClick('Verbos')} className="border border-outline text-on-surface px-4 py-1.5 rounded-full font-label-sm text-[13px] font-bold hover:bg-surface-container-highest transition-colors">Verbos</button>
          <button onClick={() => handleCategoryClick('Adjetivos')} className="border border-outline text-on-surface px-4 py-1.5 rounded-full font-label-sm text-[13px] font-bold hover:bg-surface-container-highest transition-colors">Adjetivos</button>
          <button onClick={() => handleCategoryClick('Familia')} className="border border-outline text-on-surface px-4 py-1.5 rounded-full font-label-sm text-[13px] font-bold hover:bg-surface-container-highest transition-colors">Familia</button>
          <button onClick={() => handleCategoryClick('Tiempo')} className="border border-outline text-on-surface px-4 py-1.5 rounded-full font-label-sm text-[13px] font-bold hover:bg-surface-container-highest transition-colors">Tiempo</button>
        </div>
      </section>
    </main>
  );
}

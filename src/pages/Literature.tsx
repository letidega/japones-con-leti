import { useState } from "react";

type CategoryFilter = "Todos" | "Clásicos" | "Modernos" | "Infantiles";

const books = [
  {
    id: "bamboo",
    title: "El Cuento del Cortador de Bambú",
    author: "Autor Anónimo",
    level: "N4",
    category: "Clásicos",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV3eSIvvwNQdQT82SDmQ8ibsC7L5cPpFM1uqXcx0YUXHOtmH7IZkgaKKTu2m4gVE1J9kDE7wnogj35LPWB2_GzbFvCVfM-tEGuHahX4nWr4KDwQ91zaTEc1px-I8VVLKosRIDioVJwc2uzbOQlYtBo7dO8CX6BTwyuYJClaqs3BsJCCwK86DDFdtVX6skI0Y3scurvDee-ETVngQTL14QdpOIAmI3GwwLKV-hxyUAVlS0YZ9zABi1h29VINLWS0YBEZ1Dp45U4tsw"
  },
  {
    id: "momotaro",
    title: "Momotaro",
    author: "Cuento Popular",
    level: "N5",
    category: "Infantiles",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnCMwoLmKhyUkfUpgXsdgy1iaq2BzGnGQVwJ0rL7oROKvuqN-YVwdxy_k8VUTZVOHvDklxCWqRc1a3YI6le-a2LbUC0yxXsNnAUMUbb_GN4tjmlD10rrcJNQWobf5Qk3qoWHaoaqVHpHX0bFa8hpRZ8Vm0Po3uOfbptLXMAnbflRdMCBGtDEOKBQnSyxcag_mysaNEUQ6Wvhpddd0_eYZqBgBWlZwP86MY1F8yn83pCA9oaffe-i3iWwR6Mg4JYA63o-7uapQftv0"
  },
  {
    id: "milkyway",
    title: "Tren Nocturno de la Vía Láctea",
    author: "Kenji Miyazawa",
    level: "N3",
    category: "Clásicos",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB84hHQh3wpUEWKOz4Rq2shVllttplFBNzAarlaKnL1yWRJNisAn643Sp1GHpvxQncC-4DU8VwT3KluVAVBQ1RnJ8pyVwUBYXmNkwS72MiY7MHb_FNtfsaNlUhKcbDhJba5WA7MJVLKorupn9ANnLWg2ClrUF70VJ1CNg32a97nNa0njqfGEngpjtIt5kYq8D4yB6j7b2l65gDwzvBetyKRYq96capj8gThXcTIedq5GJlITrU3R1z3xyucx-kc4lJiuIN0SwGZ_XY"
  },
  {
    id: "convenience",
    title: "La Dependienta",
    author: "Sayaka Murata",
    level: "N4",
    category: "Modernos",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB71yaw2UuJeOvhL-nQC8kgva_eVZgDinhGSAqvRqt-oVUui2uSZqZFEEufqwrdwuJRifxeSC28_9hmDWFXStH6lzL_lDnvtRbVzLbPxudwSplxmncE6IIG9dkdl6xj5l7Xy2KPNq7TL_5ibSs-G8sdfQJGYj4WNM4eGp9AKxeAd6cut_GN9ahBLoJvYedgoz0l-Cl1MoHuHAOvS9_yYO6GViXaup7ES2XJdxKZBvlR5RcV-l8hrQmhz6dowUT_tc-HjX-1I8kSILM"
  }
];

export function Literature() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesFilter = activeFilter === "Todos" || book.category === activeFilter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 md:px-margin py-stack-lg pb-32">
      <div className="mb-stack-lg text-center md:text-left">
        <h1 className="font-display-lg text-5xl md:text-6xl font-bold text-on-surface mb-unit">Biblioteca de Literatura</h1>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mt-4">Sumérgete en historias japonesas adaptadas a tu nivel. Descubre clásicos atemporales y cuentos modernos.</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm mb-stack-md bg-surface-container p-unit rounded-xl border border-outline-variant/30 mt-8 mb-12">
        <div className="relative w-full md:w-96 flex-grow max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input 
            className="w-full bg-surface text-on-surface font-body-md text-base pl-10 pr-4 py-3 rounded-lg border-b border-outline-variant focus:border-primary focus:outline-none transition-colors placeholder:text-outline-variant" 
            placeholder="Buscar por título o autor..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto p-2">
          <button 
            onClick={() => setActiveFilter("Todos")}
            className={`font-label-sm text-sm font-bold px-4 py-2 rounded-full border transition-colors ${activeFilter === "Todos" ? "border-outline bg-primary text-on-primary" : "border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
          >Todos</button>
          <button 
            onClick={() => setActiveFilter("Clásicos")}
            className={`font-label-sm text-sm font-bold px-4 py-2 rounded-full border transition-colors ${activeFilter === "Clásicos" ? "border-outline bg-primary text-on-primary" : "border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
          >Clásicos</button>
          <button 
            onClick={() => setActiveFilter("Modernos")}
            className={`font-label-sm text-sm font-bold px-4 py-2 rounded-full border transition-colors ${activeFilter === "Modernos" ? "border-outline bg-primary text-on-primary" : "border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
          >Modernos</button>
          <button 
            onClick={() => setActiveFilter("Infantiles")}
            className={`font-label-sm text-sm font-bold px-4 py-2 rounded-full border transition-colors ${activeFilter === "Infantiles" ? "border-outline bg-primary text-on-primary" : "border-outline-variant text-on-surface-variant hover:bg-surface-variant"}`}
          >Infantiles</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter mt-8 gap-6">
        {filteredBooks.map((book) => (
          <article key={book.id} className="group bg-surface-container-lowest rounded-xl p-stack-sm border border-outline-variant/50 hover:border-primary/30 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden shadow-sm p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-variant/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative aspect-[2/3] w-full mb-stack-sm rounded-lg overflow-hidden bg-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
              <img alt="Cover" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src={book.cover}/>
              <div className={`absolute top-2 right-2 backdrop-blur-sm font-label-sm text-sm font-bold px-3 py-1 rounded-full border border-outline-variant/20 ${book.level === 'N5' ? 'bg-primary-container/90 text-on-primary-container' : book.level === 'N4' ? 'bg-secondary-container/90 text-on-secondary-container' : 'bg-tertiary-container/90 text-on-tertiary-container'}`}>{book.level}</div>
            </div>
            <div className="flex-grow flex flex-col mt-4">
              <h2 className="font-title-sm text-xl font-medium text-on-surface mb-1 group-hover:text-primary transition-colors">{book.title}</h2>
              <p className="font-body-md text-base text-on-surface-variant mb-unit">{book.author}</p>
              <div className="mt-auto flex justify-between items-center border-t border-outline-variant/30 mt-4 pt-4">
                <span className="font-label-sm text-sm font-bold text-outline">{book.category}</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </div>
          </article>
        ))}
        {filteredBooks.length === 0 && (
          <div className="col-span-full py-12 text-center mt-8">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 font-light">search_off</span>
            <h3 className="font-title-sm text-xl text-on-surface font-medium">No se encontraron libros</h3>
            <p className="font-body-md text-base text-on-surface-variant mt-2">Intenta ajustar tu búsqueda o cambiar el filtro de categoría.</p>
          </div>
        )}
      </div>
    </main>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

const ALL_PRODUCTS = [
  { name: "Street Tee - Black", price: "199.000", image: "https://orifake.com/wp-content/uploads/2024/11/OS-GG-RICCIE-BLACK-1-scaled.jpg", tag: "T-Shirt" },
  { name: "Oversize Hoodie - Grey", price: "359.000", image: "https://orifake.com/wp-content/uploads/2024/12/1.png", tag: "Hoodie" },
  { name: "Cargo Short - Olive", price: "429.000", image: "https://orifake.com/wp-content/uploads/2024/12/1-2-300x300.png", tag: "Short" },
  { name: "Wave Tee - Black", price: "249.000", image: "https://orifake.com/wp-content/uploads/2024/11/OS-WAVE-BLACK-2-scaled.jpg", tag: "T-Shirt" },
  { name: "Classic Shirt - White", price: "299.000", image: "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/977c747821094870a89585acd170f029~.jpeg", tag: "Shirt" },
  { name: "Denim Short", price: "429.000", image: "https://orifake.com/wp-content/uploads/2024/12/SHORT-PANTS-MESS-POCKET-OLIVE-GREEN-1-300x300.png", tag: "Short" },
  { name: "Pants - Beige", price: "179.000", image: "https://orifake.com/wp-content/uploads/2024/12/1-4-300x300.png", tag: "Pants" },
  { name: "Jaket Parasut", price: "529.000", image: "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/0995f3e7a5cc4831b3efcf8bd9bd53d5~.jpeg", tag: "Jacket" },
];

function parsePriceNumber(pStr) {
  if (typeof pStr === "number") return pStr;
  return Number(String(pStr).replace(/[^\d]/g, "")) || 0;
}

export default function Produk() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(ALL_PRODUCTS.map(p => p.tag)))], []);
  const [sort, setSort] = useState("popular"); 
  const [view, setView] = useState("grid"); 
  const [page, setPage] = useState(1);
  const perPage = 8;
  const [quick, setQuick] = useState(null);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const THRESHOLD = 60; 
    const onScroll = () => setScrolled(window.scrollY > THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    let out = ALL_PRODUCTS.filter(p => {
      const matchQ = p.name.toLowerCase().includes(query.toLowerCase());
      const matchTag = activeTag === "All" ? true : p.tag === activeTag;
      return matchQ && matchTag;
    });

    if (sort === "price-asc") out = out.sort((a,b)=>parsePriceNumber(a.price)-parsePriceNumber(b.price));
    if (sort === "price-desc") out = out.sort((a,b)=>parsePriceNumber(b.price)-parsePriceNumber(a.price));
    return out;
  }, [query, activeTag, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  const featured = ALL_PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <header
        id="hero-produk"
        className="relative bg-cover bg-center h-[360px] md:h-[520px]"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${featured[0]?.image || ""})` }}
        role="region"
        aria-label="Produk hero"
        data-aos="fade-up"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Koleksi Terbaru</h1>
            <p className="mt-4 text-sm md:text-lg text-white/90 leading-relaxed">
              Jelajahi streetwear kami — tee, hoodie, cargo, dan essentials untuk gaya sehari-hari.
            </p>
          </div>
        </div>

        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-[92%] md:w-[60%] lg:w-[44%] transition-all duration-300 z-20 ${
            scrolled ? "bg-white text-gray-800 shadow-md" : "bg-white/10 text-white backdrop-blur-sm border border-white/20"
          } rounded-full`}
          role="navigation"
          aria-label="Breadcrumb"
        >
          <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
            <Link to="/" className={`text-sm font-medium ${scrolled ? "text-gray-700" : "text-white/90"}`}>Home</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`${scrolled ? "text-gray-400" : "text-white/70"}`}>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={`text-sm font-medium ${scrolled ? "text-gray-800" : "text-white/90"}`}>Produk</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-10"> 
        <div
          className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          style={{ boxShadow: "0 4px 18px rgba(16,24,40,0.06)" }}
          data-aos="fade-up"
          data-aos-delay="60"
        >

          <div className="flex items-center gap-3 w-full md:w-1/2">
            <label htmlFor="search" className="sr-only">Cari produk</label>
            <input
              id="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Cari produk — contoh: hoodie, cargo"
              className="w-full border rounded-md px-3 py-2 shadow-sm focus:ring-1 focus:ring-blue-400"
              aria-label="Cari produk"
            />

            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
              className="border rounded-md px-3 py-2"
              aria-label="Urutkan produk"
            >
              <option value="popular">Populer</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 w-full md:w-auto">
            <div className="hidden sm:flex gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => { setActiveTag(tag); setPage(1); }}
                  className={`px-3 py-1 rounded-full text-sm ${activeTag === tag ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="sm:hidden w-full">
              <div className="flex gap-2 overflow-x-auto py-1">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => { setActiveTag(tag); setPage(1); }}
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-sm ${activeTag === tag ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 border rounded-md overflow-hidden">
              <button
                onClick={() => setView("grid")}
                className={`px-3 py-2 ${view === "grid" ? "bg-gray-100" : ""}`}
                aria-pressed={view === "grid"}
                aria-label="Grid view"
              >
                Grid
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-3 py-2 ${view === "list" ? "bg-gray-100" : ""}`}
                aria-pressed={view === "list"}
                aria-label="List view"
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-10">
 
        <section data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold mb-4">Featured</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((f, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm p-3 flex flex-col">
                <img src={f.image} alt={f.name} className="w-full h-44 object-cover rounded" />
                <div className="mt-3">
                  <div className="text-sm font-medium">{f.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Rp {f.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-up" data-aos-delay="140">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Semua Produk</h2>
            <div className="text-sm text-gray-600">{filtered.length} produk</div>
          </div>

          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {pageItems.map((p, idx) => (
                <ProductCard
                  key={idx}
                  {...p}
                  aos="fade-up"
                  delay={idx * 40}
                  onBuy={() => window.open("/kontak", "_self")}
                  onQuickView={() => setQuick(p)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {pageItems.map((p, idx) => (
                <ProductCard
                  key={idx}
                  {...p}
                  compact
                  aos="fade-up"
                  delay={idx * 30}
                  onBuy={() => window.open("/kontak", "_self")}
                  onQuickView={() => setQuick(p)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {quick && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setQuick(null)} />
          <div className="relative bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl" role="dialog" aria-modal="true" aria-label={`Detail ${quick.name}`}>
            <div className="grid md:grid-cols-2">
              <div className="p-4">
                <img src={quick.image} alt={quick.name} className="w-full h-72 object-cover rounded" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold">{quick.name}</h2>
                <p className="mt-3 text-lg text-gray-700">Rp {quick.price}</p>
                <p className="mt-4 text-gray-600">Deskripsi singkat produk — tambahkan bahan, ukuran, warna, dan cara perawatan untuk memberi keyakinan pembeli.</p>

                <div className="mt-6 flex gap-3">
                  <button onClick={() => window.open("/kontak", "_self")} className="px-4 py-2 bg-blue-600 text-white rounded-md">Beli via Kontak</button>
                  <button onClick={() => setQuick(null)} className="px-4 py-2 border rounded-md">Tutup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

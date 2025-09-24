import React from "react";
import ProductCard from "../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const products = [
    { name: "Cargo Pants - Olive", price: "429.000", image: "https://img.lazcdn.com/g/p/8d81fe1fb3836cfbdfdf24b0d738ad11.jpg_720x720q80.jpg" },
    { name: "Cargo Pants - Olive", price: "429.000", image: "https://orifake.com/wp-content/uploads/2025/07/3-4-300x300.png" },
    { name: "Cargo Pants - Olive", price: "429.000", image: "https://down-my.img.susercontent.com/file/sg-11134201-7ra14-m5317iw6rxuf30_tn.webp" },
  ];

  return (
    <div>
      <section className="relative w-full min-h-screen h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1652410057727-f0424a870692?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 md:px-12 lg:px-24">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow">
                Toko Baju Yudha — Streetwear untuk Gaya yang Nyata
              </h1>

              <p className="text-base md:text-lg text-white/90 mb-6 drop-shadow-sm max-w-xl">
                Koleksi streetwear kami menggabungkan kenyamanan dan detail yang berani —
                cocok buat kamu yang ingin tampil beda di jalanan. Dari tee simpel sampai hoodie oversize,
                semua dirancang untuk tahan pakai dan memberi karakter.
              </p>

              <div className="flex gap-3">
                <Link
                  to="/produk"
                  className="inline-block bg-white text-indigo-600 font-semibold px-5 py-3 rounded shadow hover:opacity-95 transition"
                  data-aos="zoom-in"
                  data-aos-delay="120"
                >
                  Lihat Koleksi
                </Link>

                <Link
                  to="/kontak"
                  className="inline-block border border-white/30 text-white px-5 py-3 rounded hover:bg-white/10 transition"
                  data-aos="zoom-in"
                  data-aos-delay="220"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 container mx-auto pb-16">
        <h2 className="text-2xl font-bold mb-6" data-aos="fade-right">Produk Populer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              {...p}
              aos="fade-up"
              delay={i * 120}
              onBuy={() => navigate("/kontak")}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

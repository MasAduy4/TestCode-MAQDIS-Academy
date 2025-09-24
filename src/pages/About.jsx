import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import yudha from "../assets/Foto/yudha.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="text-gray-800">
      <Navbar />
      <section
        id="hero-about"
        className="relative bg-center bg-cover h-64 md:h-96"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632773004171-02bc1c4a726a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        aria-label="About hero"
        role="region"
      >
        <div className="absolute inset-0 bg-black/55" aria-hidden="true"></div>

        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-16 md:pt-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            About
          </h1>
          <p className="mt-3 text-sm md:text-lg text-white/90 max-w-2xl">
            Yudha StreetWear
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-10 -mt-10 md:-mt-12 mb-24" role="main">
        <div
          className="bg-white rounded-lg shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start"
          data-aos="fade-up"
        >
          <div data-aos="fade-right" data-aos-delay="120">
            <h2 className="text-3xl font-extrabold mb-4">Yudha StreetWear</h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-6">
              <p>
              Yudha Streetwear didirikan pada tahun 2024 dengan tujuan menghadirkan fashion streetwear berkualitas tinggi yang tetap nyaman digunakan sehari-hari. Setiap produk dibuat menggunakan bahan cotton combed 24s yang lembut, adem, dan awet, sehingga cocok dipakai dalam berbagai aktivitas.
              </p>

              <p>
              Untuk menjaga kualitas desain, kami menggunakan teknik sablon DTF (Direct to Film) yang detail, tajam, dan tidak mudah luntur. Dengan kombinasi bahan premium dan sablon terbaik, Yudha Streetwear berkomitmen untuk menjadi brand lokal yang mendukung gaya hidup anak muda yang dinamis, percaya diri, dan penuh ekspresi.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#10B981" />
                    <path d="M7 12.5l2.8 2.8L17 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-700">Streetwear premium dengan bahan cotton combed 24s yang lembut & adem.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#10B981" />
                    <path d="M7 12.5l2.8 2.8L17 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-700">Menggunakan sablon DTF berkualitas tinggi, detail tajam & awet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#10B981" />
                    <path d="M7 12.5l2.8 2.8L17 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-700">Produk lokal dengan standar kualitas terbaik & layanan yang terpercaya.</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="140">
            <figure className="w-full md:w-96 rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src={yudha}
                alt="Ilustrasi damar/copal"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <figcaption className="px-3 py-2 text-sm text-gray-600">
                Sumber : @yudhaaprmdia
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}

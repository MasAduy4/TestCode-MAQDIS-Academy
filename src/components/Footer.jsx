import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold">Toko Baju Yudha</div>
            <div className="text-sm text-gray-400 mt-1">
              © {year} Toko Baju Yudha — Streetwear. All rights reserved.
            </div>
          </div>

          <div className="hidden sm:flex gap-6">
            <a href="/produk" className="text-sm text-gray-300 hover:text-white transition">Produk</a>
            <a href="/about" className="text-sm text-gray-300 hover:text-white transition">About</a>
            <a href="/kontak" className="text-sm text-gray-300 hover:text-white transition">Kontak</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="text-sm text-gray-300 mb-1">Follow kami</div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/yudhaaprmdia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition">

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-pink-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/yudhapramudia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition">

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h2V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://twitter.com/yudhapramudia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-sky-400">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@duyy29_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M9 8v8a4 4 0 104 4V9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://wa.me/628216223009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-green-400">
                  <path d="M21 12.08A9 9 0 103 5l-1 4 4-1a9 9 0 0015 4.08z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 14.5c-.3.8-1.6 1.7-2.1 1.8-.5.1-.9.1-1.8-.3-.9-.4-2-1.1-3.5-2.8-1.1-1.2-.9-1.6-.3-2.1.6-.5.6-.7 1-.7.3 0 .6 0 .9.1.3.1.6.1.9.1.3 0 .6-.2.9-.3.3-.1.6-.2.9-.1.3 0 .6.2 1 .5.4.3.5.8.6 1.1.1.4.1.7 0 1z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/Yuda Pramudia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-400">
                  <path d="M22.5 7.5s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C16.5 4 12 4 12 4s-4.5 0-7.8.2c-.4 0-1.2.1-1.9.9-.6.7-.8 2.4-.8 2.4S1 9.3 1 11.1v1.8c0 1.8.2 3.6.2 3.6s.2 1.7.8 2.4c.7.8 1.6.7 2 .8 1.5.2 6 .2 6 .2s4.5 0 7.8-.2c.4 0 1.2-.1 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.8.2-3.6v-1.8c0-1.8-.2-3.6-.2-3.6z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 15V9l5 3-5 3z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

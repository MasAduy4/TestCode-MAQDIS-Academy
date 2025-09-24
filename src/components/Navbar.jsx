import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Foto/yud.png"; 

const navItems = [
  { path: "/", label: "Home" },
  { path: "/produk", label: "Produk" },
  { path: "/about", label: "About" },
  { path: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const location = useLocation();
  const [transparent, setTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observeHero = () => {
      const hero =
        document.querySelector("#hero-produk") ||
        document.querySelector("#hero-about") ||
        document.querySelector("#hero-home") ||
        document.querySelector("header");

      if (!hero) {
        setTransparent(false);
        return;
      }

      const obs = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          setTransparent(e.isIntersecting && e.intersectionRatio > 0.18);
        },
        { root: null, threshold: [0, 0.18, 0.5, 1] }
      );

      obs.observe(hero);
      return () => obs.disconnect();
    };

    const cleanup = observeHero();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
      aria-hidden={false}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="Beranda - Toko Baju Yudha"
        >
          <img
            src={logo}
            alt="Toko Baju Yudha"
            className={`h-8 md:h-10 object-contain transition-all duration-200 ${
              transparent ? "drop-shadow-lg" : "drop-shadow-none"
            }`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <span
            className={`font-bold text-lg transition-colors duration-200 ${
              transparent ? "text-white sr-only md:not-sr-only md:text-white" : "text-gray-800"
            }`}
            style={{ lineHeight: 1 }}
          >
            Toko Baju Yudha
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path} className="group">
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative inline-block px-3 py-1 font-medium transition-colors duration-200 ${
                    isActive
                      ? transparent
                        ? "text-white"
                        : "text-blue-600"
                      : transparent
                      ? "text-white/90"
                      : "text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="pointer-events-none">{item.label}</span>
                    <span
                      className={`absolute left-0 -bottom-1 w-full h-[2px] transform transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      } group-hover:scale-x-100 ${transparent ? "bg-white" : "bg-blue-600"}`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            className={`p-2 rounded-md transition-colors duration-200 ${
              transparent ? "text-white" : "text-gray-800"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`md:hidden border-t transition-colors duration-200 ${
            transparent ? "bg-black/60 backdrop-blur-sm" : "bg-white"
          }`}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-sm flex items-center gap-3 transition-colors duration-150 ${
                    transparent
                      ? isActive
                        ? "bg-white/10 text-white"
                        : "text-white hover:bg-white/10"
                      : isActive
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-800 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <span
                        className={`ml-auto h-1 w-8 rounded-full ${
                          transparent ? "bg-white/90" : "bg-blue-600"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

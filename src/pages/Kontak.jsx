import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Kontak() {
  const instagram = "yudhaaprmdia";
  const email = "yudhapramudia29@gmail.com";
  const whatsappNumber = "+6282116223009";
  const address = "Jl. Kebon Kopi No.153, Cimahi Selatan, Cimahi, Indonesia";

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Nama harus diisi";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email tidak valid";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Tolong tulis pesan minimal 10 karakter";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }, 900);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header
        className="relative bg-cover bg-center h-[36vh] md:h-[40vh] lg:h-[44vh]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1707289439849-ff50d272e322?q=80&w=984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        role="banner"
        aria-label="Kontak hero"
        data-aos="fade-up"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold">Kontak Kami</h1>
            <p className="mt-3 text-sm md:text-base text-white/90">
              Punya pertanyaan tentang produk, custom order, atau kerjasama? Hubungi kami lewat pesan singkat.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 -mt-12 md:-mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
          <aside className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
              <h2 className="text-lg font-semibold mb-2">Kontak Langsung</h2>
              <p className="text-sm text-gray-600 mb-4">Pilih channel yang paling nyaman untukmu — kami responsif via WhatsApp.</p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                  aria-label="Chat via WhatsApp"
                >
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">WA</div>
                  <div>
                    <div className="text-sm font-semibold">WhatsApp</div>
                    <div className="text-xs text-gray-500">{whatsappNumber}</div>
                  </div>
                </a>

                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                  aria-label="Instagram"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold">IG</div>
                  <div>
                    <div className="text-sm font-semibold">Instagram</div>
                    <div className="text-xs text-gray-500">@{instagram}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                  aria-label="Email"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">@</div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-xs text-gray-500">{email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up" data-aos-delay="60">
              <h3 className="text-sm font-semibold text-gray-700">Jam Operasional</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>Senin - Jumat: 09:00 - 18:00</li>
                <li>Sabtu: 10:00 - 16:00</li>
                <li>Minggu: Tutup</li>
              </ul>

              <div className="mt-4 border-t pt-4 text-sm text-gray-600">
                <div className="font-medium text-gray-800">Alamat</div>
                <div className="mt-1">{address}</div>
              </div>
            </div>

            <div className="hidden md:block bg-white rounded-xl shadow-md p-6" data-aos="fade-up" data-aos-delay="120">
              <h3 className="text-sm font-semibold text-gray-700">Butuh bantuan cepat?</h3>
              <p className="mt-2 text-sm text-gray-600">Klik tombol WhatsApp untuk chat langsung. Kami biasanya balas dalam beberapa jam kerja.</p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-md shadow"
                target="_blank"
                rel="noreferrer"
              >
                Chat via WhatsApp
              </a>
            </div>
          </aside>

          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-2">Kirim Pesan</h3>
              <p className="text-sm text-gray-500 mb-4">Isi form di bawah — kami akan membalas melalui email / WhatsApp.</p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Nama</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full border rounded-md px-3 py-2 focus:ring-1 ${errors.name ? "border-red-400 focus:ring-red-200" : "focus:ring-blue-200"}`}
                      placeholder="Nama lengkap"
                    />
                    {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full border rounded-md px-3 py-2 focus:ring-1 ${errors.email ? "border-red-400 focus:ring-red-200" : "focus:ring-blue-200"}`}
                      placeholder="email@domain.com"
                    />
                    {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className={`w-full border rounded-md px-3 py-2 focus:ring-1 ${errors.message ? "border-red-400 focus:ring-red-200" : "focus:ring-blue-200"}`}
                    placeholder="Tulis pertanyaan, ukuran yang diinginkan, atau detail order…"
                  />
                  {errors.message && <div className="text-xs text-red-500 mt-1">{errors.message}</div>}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">Saya setuju dihubungi kembali.</label>
                  </div>

                  <div className="flex items-center gap-3">
                    {success && <div className="text-sm text-green-600">Pesan terkirim — kami akan segera menghubungi.</div>}
                    <button
                      type="submit"
                      disabled={sending}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:opacity-95 disabled:opacity-60"
                    >
                      {sending ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <section className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="60">
              <div className="p-4 md:p-6">
                <h4 className="text-sm font-semibold mb-2">Lokasi Kami</h4>
                <p className="text-xs text-gray-600 mb-3">{address}</p>
                <div className="w-full rounded-md overflow-hidden border">
                  <iframe
                    title="Map lokasi"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                    className="w-full h-64"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="100">
              <div>
                <h5 className="font-bold">Butuh jawaban cepat?</h5>
                <p className="text-sm opacity-90 mt-1">Klik tombol WhatsApp untuk chat langsung dengan tim sales kami.</p>
              </div>
              <div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-md shadow hover:opacity-90"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccess(false), 4000);
    }, 900);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Nama harus diisi";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email tidak valid";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Tolong tulis pesan minimal 10 karakter";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
}

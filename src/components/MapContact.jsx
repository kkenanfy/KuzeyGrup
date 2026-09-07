import React from 'react';
import { MapPin, Phone, Building2, Navigation, MessageCircle, Smartphone } from 'lucide-react';

export default function MapContact() {
  const gsmNumbers = [
    { label: 'Danışman Hat 1', number: '0 (531) 583 02 72', raw: '905315830272' },
    { label: 'Danışman Hat 2', number: '0 (534) 086 64 10', raw: '905340866410' },
    { label: 'Danışman Hat 3', number: '0 (541) 668 92 31', raw: '905416689231' },
    { label: 'Danışman Hat 4', number: '0 (530) 039 55 58', raw: '905300395558' },
  ];

  return (
    <section id="iletisim" className="py-24 bg-black relative overflow-hidden border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2 COLUMN LAYOUT: CONTACT INFO (LEFT) & MAP EMBED (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: CONTACT CARDS GRID */}
          <div className="bg-[#0d0d10] border border-yellow-500/25 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-white flex items-center gap-3 border-b border-zinc-800 pb-5">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <span>İletişim Kanallarımız</span>
              </h3>

              <div className="mt-6 space-y-6 text-sm">
                {/* ADRES */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-semibold uppercase tracking-wider">Genel Merkez Adresi</span>
                    <p className="text-white font-medium text-base mt-1">
                      Mimarsinan Mahallesi, Emiroğlu Caddesi No: 124, Tuzla / İSTANBUL
                    </p>
                  </div>
                </div>

                {/* SABİT SANTRAL NO */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-semibold uppercase tracking-wider">Sabit Santral No</span>
                    <a href="tel:+902167595674" className="text-yellow-400 font-extrabold text-xl hover:underline block mt-0.5">
                      0 (216) 759 56 74
                    </a>
                  </div>
                </div>

                {/* DANIŞMAN GSM & WHATSAPP HATALARI */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-zinc-400 block font-semibold uppercase tracking-wider mb-2">
                      Gayrimenkul Danışman Hatları (GSM & WhatsApp)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {gsmNumbers.map((item, idx) => (
                        <a
                          key={idx}
                          href={`https://wa.me/${item.raw}`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-zinc-950 hover:bg-zinc-900 p-3 rounded-xl border border-zinc-800 hover:border-yellow-500/40 flex items-center justify-between text-zinc-200 hover:text-yellow-400 transition-colors"
                        >
                          <span className="font-bold">{item.number}</span>
                          <MessageCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: MAP EMBED CONTAINER */}
          <div className="bg-[#0d0d10] border border-yellow-500/25 rounded-3xl p-3 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-zinc-800 flex-1">
              <iframe
                title="Kuzey Grup Konum Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12078.212!2d29.3000000!3d40.8250000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1050a4176ab%3A0x6b7bb8b5774a3f12!2zTWltYXJzaW5hbiwgRW1pcm_En2x1IENkLiBObzoxMjQsIDM0OTM1IFR1emxhL8Swc3RhnamJ1bA!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-4 py-2 rounded-xl border border-yellow-500/30 text-xs text-yellow-400 font-bold flex items-center gap-2 shadow-lg">
                <Navigation className="w-4 h-4 text-yellow-400" />
                Tuzla / İstanbul Genel Merkez
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

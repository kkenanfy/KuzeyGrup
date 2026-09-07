import React from 'react';
import { X, MapPin, Maximize2, BedDouble, Bath, CheckCircle2, Phone, MessageCircle, Calendar, ShieldCheck, Layers } from 'lucide-react';

export default function PropertyModal({ property, onClose, onRequestValuation }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-3xl w-full my-8 shadow-2xl overflow-hidden relative text-left">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-300 hover:text-white bg-slate-950/70 hover:bg-slate-950 rounded-full border border-slate-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE BANNER */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2 inline-block shadow-md">
                {property.status === 'satilik' ? 'Satılık' : 'Kiralık'} {property.type.toUpperCase()}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {property.title}
              </h2>
              <p className="text-xs sm:text-sm text-amber-300 font-semibold flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-amber-400" />
                {property.location}
              </p>
            </div>

            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 bg-slate-950/90 px-4 py-1.5 rounded-2xl border border-amber-500/30">
                {property.priceFormatted}
              </span>
            </div>
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* QUICK SPECS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Brüt / Net Alan</span>
              <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <Maximize2 className="w-4 h-4 text-amber-400" /> {property.area}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Oda Düzeni</span>
              <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <BedDouble className="w-4 h-4 text-amber-400" /> {property.rooms}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Bulunduğu Kat</span>
              <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <Layers className="w-4 h-4 text-amber-400" /> {property.floor}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Bina Yaşı</span>
              <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                <Calendar className="w-4 h-4 text-amber-400" /> {property.age}
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-2">
              Gayrimenkul Açıklaması
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80">
              {property.description}
            </p>
          </div>

          {/* FEATURES LIST */}
          {property.features && property.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3">
                Öne Çıkan Özellikler & Donanım
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AGENT / CONTACT ACTION BOX */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-lg">
                KG
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Kuzey Grup Gayrimenkul Danışmanlığı</h4>
                <p className="text-xs text-slate-400">Danışman Hat: +90 (216) 450 00 00</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/905300000000?text=Merhaba,%20"${encodeURIComponent(property.title)}"%20ilan%C4%B1%20hakk%C4%B1nda%20randevu%20ve%20detay%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp İle Sor
              </a>

              <button
                onClick={() => {
                  onClose();
                  onRequestValuation(`Benzer İlan Talebi: ${property.title}`);
                }}
                className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Teklif İste
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

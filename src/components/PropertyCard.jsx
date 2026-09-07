import React from 'react';
import { MapPin, Maximize2, BedDouble, Bath, ChevronRight, Sparkles, Building, PhoneCall } from 'lucide-react';

export default function PropertyCard({ property, onOpenDetails }) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group">
      {/* CARD IMAGE & BADGES */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* SATILIK / KİRALIK TAG */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md ${
              property.status === 'satilik'
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/20'
                : 'bg-blue-600 text-white shadow-blue-600/20'
            }`}
          >
            {property.status === 'satilik' ? 'Satılık' : 'Kiralık'}
          </span>

          {property.featured && (
            <span className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Öne Çıkan
            </span>
          )}
        </div>

        {/* PRICE TAG IN IMAGE */}
        <div className="absolute bottom-4 left-4">
          <span className="text-xl sm:text-2xl font-extrabold text-white bg-slate-950/80 backdrop-blur-md px-3.5 py-1 rounded-xl border border-amber-500/30 text-amber-300">
            {property.priceFormatted}
          </span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{property.location}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
            {property.title}
          </h3>

          <p className="mt-2 text-slate-400 text-xs line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* KEY FEATURES BAR */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-950/60 rounded-xl p-2 border border-slate-800">
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Alan</span>
            <span className="text-xs font-bold text-slate-200 flex items-center justify-center gap-1">
              <Maximize2 className="w-3 h-3 text-amber-400" /> {property.area}
            </span>
          </div>

          <div className="bg-slate-950/60 rounded-xl p-2 border border-slate-800">
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Oda Sayısı</span>
            <span className="text-xs font-bold text-slate-200 flex items-center justify-center gap-1">
              <BedDouble className="w-3 h-3 text-amber-400" /> {property.rooms}
            </span>
          </div>

          <div className="bg-slate-950/60 rounded-xl p-2 border border-slate-800">
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Banyo</span>
            <span className="text-xs font-bold text-slate-200 flex items-center justify-center gap-1">
              <Bath className="w-3 h-3 text-amber-400" /> {property.bathrooms > 0 ? property.bathrooms : '-'}
            </span>
          </div>
        </div>

        {/* BUTTON ACTION */}
        <div className="mt-5 flex gap-2">
          <button
            onClick={() => onOpenDetails(property)}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Detayları İncele
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/905300000000?text=Merhaba,%20"${encodeURIComponent(property.title)}"%20ilan%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 transition-colors flex items-center justify-center"
            title="WhatsApp İle İlanı Sor"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

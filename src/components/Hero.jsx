import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] pt-44 pb-32 flex items-center justify-center overflow-hidden bg-black">
      {/* Bosphorus Istanbul Skyline Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=90"
          alt="Kuzey Grup Gayrimenkul & İnşaat"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/istanbul.jpg';
          }}
          className="w-full h-full object-cover opacity-50 scale-105 filter brightness-100 contrast-110"
        />
        {/* Pure Black Fade Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-zinc-950/90 border border-yellow-500/40 text-yellow-400 text-xs sm:text-sm font-bold mb-8 shadow-xl shadow-yellow-500/10 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span>Kuzey Grup Gayrimenkul & İnşaat Güvencesiyle</span>
        </div>

        {/* HERO TITLE & SUBTITLE */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-2xl">
          Hayalinizdeki Yaşam Alanları ve <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
            Güvenli Yatırımlar
          </span>
        </h1>

        <p className="mt-7 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed text-shadow">
          Kat karşılığı kentsel dönüşüm tecrübemiz, prestijli mimari çözümlerimiz ve uzman gayrimenkul danışmanlığımızla geleceğinize değer katıyoruz.
        </p>
      </div>
    </section>
  );
}

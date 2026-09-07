import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenKvkk }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-yellow-500/20 text-zinc-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kuzey Grup Gayrimenkul & İnşaat. Tüm hakları saklıdır.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-yellow-400 hover:text-black text-zinc-300 border border-zinc-800 transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <span>Yukarı Çık</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-yellow-500/25 py-3.5 shadow-2xl shadow-black'
          : 'bg-gradient-to-b from-black via-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* OFFICIAL LOGO */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <img
            src="/images/logo.png"
            alt="Kuzey Grup Logo"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300 filter brightness-110"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              KUZEY GRUP
            </span>
            <span className="text-[11px] font-bold tracking-wider text-yellow-400 uppercase -mt-1">
              Gayrimenkul & İnşaat
            </span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-bold text-slate-100 hover:text-yellow-400 hover:bg-zinc-900/90 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* PHONE / CONTACT DIRECT LINK */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+902167595674"
            className="flex items-center gap-2 text-xs font-black text-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 hover:from-yellow-200 hover:to-yellow-400 px-4.5 py-2.5 rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>0 (216) 759 56 74</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-zinc-900 text-slate-300 hover:text-yellow-400 border border-zinc-800 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-yellow-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-bold text-slate-100 hover:text-yellow-400 hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-800">
            <a
              href="tel:+902167595674"
              className="w-full py-3 rounded-xl text-sm font-black bg-yellow-400 text-black flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-black" />
              0 (216) 759 56 74 Ara
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

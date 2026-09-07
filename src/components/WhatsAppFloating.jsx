import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* QUICK CHAT POPUP */}
      {isOpen && (
        <div className="mb-4 bg-[#0d0d10] border border-yellow-500/30 rounded-3xl p-5 shadow-2xl w-80 text-left animate-fadeIn">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">Kuzey Grup Canlı Destek</h5>
                <span className="text-[10px] text-yellow-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" /> Çevrim içi
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-black p-3 rounded-2xl border border-zinc-800 mb-4 text-xs text-zinc-300">
            👋 Merhaba! Kuzey Grup Gayrimenkul & İnşaat müşteri temsilcisine hoş geldiniz. Size nasıl yardımcı olabiliriz?
          </div>

          <a
            href="https://wa.me/905315830272?text=Merhaba,%20Kuzey%20Grup%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Detayl%C4%B1%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Sohbeti Başlat
          </a>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center shadow-2xl shadow-yellow-500/40 hover:scale-110 transition-transform cursor-pointer border-2 border-yellow-200"
        aria-label="WhatsApp İletişim Hattı"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
}

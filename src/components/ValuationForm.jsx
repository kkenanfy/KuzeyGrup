import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, User, Building, MessageSquare, Sparkles, X, FileText } from 'lucide-react';

export default function ValuationForm({ initialService = '', isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Kat Karşılığı Arsa Değerleme',
    propertyDetails: '',
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const serviceOptions = [
    'Kat Karşılığı Arsa Değerleme',
    'Satılık & Kiralık İlan Verme',
    'Kentsel Dönüşüm Danışmanlığı',
    'Mimarlık & 3D Projelendirme',
    'İç / Dış Dekorasyon & Tadilat',
    'Peyzaj & Bahçe Tasarımı',
    'Diğer Gayrimenkul Talepleri'
  ];

  const content = (
    <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-left">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-950 rounded-full cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* FORM HEADER */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full inline-block mb-3">
          Ücretsiz Ekspertiz & Teklif Formu
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Gayrimenkulünüzü veya Arsanızı <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Birlikte Değerlendirelim
          </span>
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Formu doldurun, uzman ekibimiz arsanız veya gayrimenkulünüz için en avantajlı teklifi hazırlayıp en kısa sürede sizi arasın.
        </p>
      </div>

      {submitted ? (
        <div className="bg-slate-950/90 rounded-2xl p-8 border border-emerald-500/40 text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-extrabold text-white mb-2">Talebiniz Başarıyla Alındı!</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
            Sayın <strong className="text-amber-400">{formData.fullName}</strong>, talebiniz Kuzey Grup uzman ekibimize iletilmiştir. Tarafınıza en kısa sürede dönüş sağlanacaktır.
          </p>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-left text-xs mb-6 max-w-md mx-auto space-y-1.5">
            <div><span className="text-slate-400">Hizmet Türü:</span> <span className="font-bold text-white">{formData.serviceType}</span></div>
            <div><span className="text-slate-400">İletişim Tel:</span> <span className="font-bold text-amber-300">{formData.phone}</span></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`https://wa.me/905300000000?text=Merhaba,%20ben%20${encodeURIComponent(formData.fullName)}.%20Form%20üzerinden%20"${encodeURIComponent(formData.serviceType)}"%20talebi%20oluşturdum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              WhatsApp İle Hemen Bilgi Al
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', phone: '', email: '', serviceType: initialService || 'Kat Karşılığı Arsa Değerleme', propertyDetails: '', message: '' });
              }}
              className="py-3 px-5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              Yeni Talep Oluştur
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* AD SOYAD */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-400" /> Ad Soyad *
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Ahmet Yılmaz"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/20"
              />
            </div>

            {/* TELEFON */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Telefon Numarası *
              </label>
              <input
                type="tel"
                required
                placeholder="05XX XXX XX XX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* E-POSTA */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" /> E-posta Adresi
              </label>
              <input
                type="email"
                placeholder="ahmet@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/20"
              />
            </div>

            {/* HİZMET TÜRÜ */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-amber-400" /> Hizmet Türü *
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/20 cursor-pointer"
              >
                {serviceOptions.map((opt, idx) => (
                  <option key={idx} value={opt} className="bg-slate-900 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* TAŞINMAZ / ARSA DETAYI */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-amber-400" /> Taşınmaz / Arsa Bilgisi (Konum, m², Ada/Parsel vb.)
            </label>
            <input
              type="text"
              placeholder="Örn: Kadıköy Göztepe 450 m² müstakil parsel veya 3+1 kiralık ilan"
              value={formData.propertyDetails}
              onChange={(e) => setFormData({ ...formData, propertyDetails: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/20"
            />
          </div>

          {/* MESAJ */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" /> Ek Notlar / Mesajınız
            </label>
            <textarea
              rows="3"
              placeholder="Proje beklentileriniz veya sormak istedikleriniz..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/20"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-2xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>Form Gönderiliyor...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Değerleme & Teklif Talebini Gönder
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
        <div className="max-w-2xl w-full my-8">{content}</div>
      </div>
    );
  }

  return content;
}

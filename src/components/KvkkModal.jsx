import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function KvkkModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full my-8 p-6 sm:p-8 shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">KVKK Aydınlatma Metni</h3>
            <p className="text-xs text-slate-400">6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca bilgilendirme</p>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-slate-300 text-xs leading-relaxed space-y-3 max-h-96 overflow-y-auto pr-2">
          <p>
            <strong>Kuzey Grup Gayrimenkul & İnşaat</strong> olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca kişisel verilerinizin güvenliğine ve gizliliğine büyük önem vermekteyiz.
          </p>
          <h4 className="font-bold text-amber-400 text-sm">1. Veri Sorumlusu</h4>
          <p>
            Web sitemiz üzerinden ilettiğiniz ad, soyad, telefon numarası ve e-posta adresi gibi kişisel verileriniz veri sorumlusu sıfatıyla Kuzey Grup tarafından işlenmektedir.
          </p>
          <h4 className="font-bold text-amber-400 text-sm">2. Verilerin İşlenme Amacı</h4>
          <p>
            Kişisel verileriniz; talep ettiğiniz gayrimenkul ekspertiz, kat karşılığı değerleme, satış/kiralama danışmanlığı hizmetlerinin sunulması ve sizinle iletişim kurulması amacıyla sınırlı olarak işlenmektedir.
          </p>
          <h4 className="font-bold text-amber-400 text-sm">3. Üçüncü Şahıslara Aktarım</h4>
          <p>
            Toplanan kişisel verileriniz, yasal zorunluluklar hariç olmak üzere kesinlikle üçüncü taraf kurum veya kuruluşlarla paylaşılmamaktadır.
          </p>
          <h4 className="font-bold text-amber-400 text-sm">4. Haklarınız</h4>
          <p>
            KVKK 11. maddesi uyarınca veri sahipleri; verilerinin işlenip işlenmediğini öğrenme, silinmesini talep etme ve bilgi alma hakkına sahiptir. Taleplerinizi info@kuzeygrup.com.tr adresinden iletebilirsiniz.
          </p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
          >
            Okudum, Anladım
          </button>
        </div>
      </div>
    </div>
  );
}

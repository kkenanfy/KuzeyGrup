import React from 'react';
import { ShieldCheck, Award, TrendingUp, HeartHandshake, Building2, Users, CheckCircle, Scale } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'Tamamlanan Proje', value: '150+' },
    { label: 'Mutlu Müşteri & Aile', value: '1.200+' },
    { label: 'İnşa Edilen Alan', value: '250.000 m²' },
    { label: 'Sektördeki Tecrübe', value: '18 Yıl' },
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-400" />,
      title: 'Güven & Şeffaflık',
      description: 'Gayrimenkul alım-satım ve kat karşılığı projelerde her adımı hukuki sözleşmeler, şeffaf ekspertiz ve eksiksiz bilgilendirme ile yürütüyoruz.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
      title: 'Yüksek Kazançlı İş Ortaklığı',
      description: 'Kat karşılığı projelerde arsanızın potansiyelini maksimum emsal kullanımı ve en yüksek bağımsız bölüm oranı ile kazanca dönüştürüyoruz.'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-400" />,
      title: 'Kentsel Dönüşüm Uzmanlığı',
      description: 'Eski binaların yenilenmesinde karot testinden belediye izinlerine, hak sahipleri uzlaşmasından zamanında anahtar teslime uzman destek.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-amber-400" />,
      title: 'Uçtan Uca Mimari & Uygulama',
      description: 'Sadece gayrimenkul satışı değil; mimari tasarımdan iç/dış dekorasyona, tadilattan peyzaj uygulamalarına tam kapsamlı mimarlık hizmeti.'
    }
  ];

  return (
    <section id="hakkimizda" className="py-24 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full inline-block mb-3">
            Kurumsal Kimliğimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Neden Kuzey Grup <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Gayrimenkul & İnşaat?
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            18 yılı aşkın sektör tecrübemizle, gayrimenkul yatırımlarında güvenin ve mimari mükemmelliğin sembolü olmaktan gurur duyuyoruz.
          </p>
        </div>

        {/* STATS COUNTER BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 rounded-3xl p-6 border border-amber-500/20 text-center shadow-lg hover:border-amber-500/40 transition-colors"
            >
              <span className="block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="mt-2 block text-xs sm:text-sm font-semibold text-slate-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* MISSION / VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-950/90 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Misyonumuz</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Müşterilerimizin gayrimenkul ve inşaat alanındaki tüm beklentilerini; güvenilirlik, yüksek kalite standartları ve şeffaf iletişim prensiplerinden ödün vermeden karşılamak. Doğru ekspertiz ve uzman kadromuzla sürdürülebilir, güvenli ve yüksek katma değerli projeler üretmek.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <CheckCircle className="w-4 h-4" /> %100 Müşteri Memnuniyeti Hedefi
            </div>
          </div>

          <div className="bg-slate-950/90 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kentsel dönüşüm ve kat karşılığı projelerde yenilikçi mimari yaklaşımlarla kentin çehresini değiştiren, gayrimenkul danışmanlığında Türkiye genelinde referans gösterilen güvenilir lider bir marka olmak.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <CheckCircle className="w-4 h-4" /> Modern & Depreme Dayanıklı Mimari
            </div>
          </div>
        </div>

        {/* PILLARS / WHY CHOOSE US CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

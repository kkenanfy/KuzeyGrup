import React, { useState } from 'react';
import { Building2, HardHat, Paintbrush, CheckCircle2 } from 'lucide-react';
import { serviceCategories } from '../data/services';
import ServiceImage from './ServiceImage';

export default function Services() {
  const [activeTab, setActiveTab] = useState('gayrimenkul');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-yellow-400" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-yellow-400" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-yellow-400" />;
      default:
        return <Building2 className="w-6 h-6 text-yellow-400" />;
    }
  };

  const activeCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  const renderServiceCard = (service, index) => (
    <div
      key={index}
      className="bg-[#0e0e11] rounded-3xl border border-yellow-500/20 hover:border-yellow-400/60 overflow-hidden shadow-2xl hover:shadow-yellow-500/15 transition-all duration-300 flex flex-col justify-between group"
    >
      {/* CUSTOM SERVICE IMAGE BANNER */}
      <ServiceImage serviceName={service.name} fallbackImage={service.image} />

      {/* CARD CONTENT */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-zinc-300 text-sm leading-relaxed font-normal">
            {service.description}
          </p>

          <div className="mt-6 pt-5 border-t border-zinc-800/80">
            <h4 className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider mb-3">
              Öne Çıkan Standartlar:
            </h4>
            <ul className="space-y-2.5">
              {service.details.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="hizmetler" className="py-28 bg-black relative overflow-hidden border-t border-zinc-900">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-yellow-400 bg-yellow-500/10 border border-yellow-500/25 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Hizmet Yelpazemiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Uzmanlık Alanlarımız & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Kurumsal Çözümlerimiz
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Gayrimenkul danışmanlığından kat karşılığı inşaat projelerine, iç & dış dekorasyondan peyzaj tasarımına kadar tüm ihtiyaçlarınıza tek çatı altında yanıt veriyoruz.
          </p>
        </div>

        {/* CATEGORY TAB NAVIGATION */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {serviceCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-3.5 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black border-yellow-300 shadow-xl shadow-yellow-500/25 scale-105'
                    : 'bg-[#0d0d10] text-zinc-300 border-zinc-800 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isActive ? 'bg-black/20 text-black' : 'bg-zinc-900'}`}>
                  {getIcon(category.iconName)}
                </div>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE CATEGORY BANNER */}
        <div className="mt-10 text-center bg-[#0d0d10] border border-yellow-500/25 rounded-2xl p-4 max-w-2xl mx-auto shadow-inner">
          <p className="text-yellow-400 font-medium text-sm sm:text-base flex items-center justify-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
            {activeCategory.tagline}
          </p>
        </div>

        {/* DYNAMIC SPACED & CENTERED LAYOUT */}
        {activeCategory.services.length === 5 ? (
          <div className="mt-14 space-y-8 sm:space-y-10">
            {/* ROW 1: FIRST 3 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {activeCategory.services.slice(0, 3).map((service, index) => renderServiceCard(service, index))}
            </div>

            {/* ROW 2: LAST 2 CARDS PERFECTLY CENTERED */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {activeCategory.services.slice(3, 5).map((service, index) => renderServiceCard(service, index + 3))}
            </div>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {activeCategory.services.map((service, index) => renderServiceCard(service, index))}
          </div>
        )}
      </div>
    </section>
  );
}

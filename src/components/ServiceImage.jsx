import React from 'react';
import { 
  Building2, 
  Store, 
  Map, 
  Factory, 
  Building, 
  HardHat, 
  RefreshCw, 
  Compass, 
  Paintbrush, 
  Hammer, 
  Trees,
  Home
} from 'lucide-react';

export default function ServiceImage({ serviceName, fallbackImage }) {
  // Return tailored thematic visual content based on service name
  const getServiceVisual = () => {
    switch (serviceName) {
      case 'Satılık & Kiralık Daire':
        return {
          icon: <Building2 className="w-6 h-6 text-amber-400" />,
          title: 'Lüks Yaşam Daireleri',
          imgUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
        };

      case 'Dükkan & Mağaza Hizmetleri':
        return {
          icon: <Store className="w-6 h-6 text-amber-400" />,
          title: 'Cadde Üstü Mağazalar',
          imgUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
        };

      case 'Arsa & Arazi Değerleme':
        return {
          icon: <Map className="w-6 h-6 text-amber-400" />,
          title: 'İmarlı Arsa & Parsel',
          imgUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
        };

      case 'Fabrika & OSB Lojistik Tesisler':
        return {
          icon: <Factory className="w-6 h-6 text-amber-400" />,
          title: 'Sanayi & Lojistik Depo',
          imgUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
        };

      case 'Ofis & Plaza Hizmetleri':
        return {
          icon: <Building className="w-6 h-6 text-amber-400" />,
          title: 'A Plus İş Plazaları',
          imgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
        };

      case 'Villa & Müstakil Yaşam Çözümleri':
        return {
          icon: <Home className="w-6 h-6 text-amber-400" />,
          title: 'Lüks Müstakil Villalar',
          imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
        };

      case 'Kat Karşılığı Arsa Değerleme':
        return {
          icon: <HardHat className="w-6 h-6 text-amber-400" />,
          title: 'Kat Karşılığı Projeler',
          imgUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
        };

      case 'Kentsel Dönüşüm Danışmanlığı':
        return {
          icon: <RefreshCw className="w-6 h-6 text-amber-400" />,
          title: 'Riskli Yapı & Yenileme Projesi',
          imgUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
        };

      case 'Mimarlık & Projelendirme':
        return {
          icon: <Compass className="w-6 h-6 text-amber-400" />,
          title: '3D Mimari Projelendirme',
          imgUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
        };

      case 'İç & Dış Dekorasyon':
        return {
          icon: <Paintbrush className="w-6 h-6 text-amber-400" />,
          title: 'Lüks İç & Dış Dekorasyon',
          imgUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
        };

      case 'Tadilat & Yenileme Çözümleri':
        return {
          icon: <Hammer className="w-6 h-6 text-amber-400" />,
          title: 'Anahtar Teslim Yenileme',
          imgUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
        };

      case 'Peyzaj Tasarımı & Uygulama':
        return {
          icon: <Trees className="w-6 h-6 text-amber-400" />,
          title: 'Estetik Bahçe Peyzajı',
          imgUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80'
        };

      default:
        return {
          icon: <Building2 className="w-6 h-6 text-amber-400" />,
          title: 'Kuzey Grup Hizmet',
          imgUrl: fallbackImage || '/images/apartment.png'
        };
    }
  };

  const visual = getServiceVisual();

  return (
    <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-zinc-900 flex items-center justify-center">
      {/* CLEAN HIGH RESOLUTION IMAGE */}
      <img
        src={visual.imgUrl}
        alt={serviceName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/construction.png';
        }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-105 contrast-105 z-0"
      />

      {/* SOFT GRADIENT OVERLAY ONLY FOR TEXT READABILITY AT BOTTOM */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full h-full p-4 flex flex-col justify-between">
        {/* TOP BRAND BAR */}
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-xl bg-black/80 backdrop-blur-md border border-yellow-500/30 text-yellow-400 shadow-lg">
            {visual.icon}
          </div>

          <span className="text-[10px] font-extrabold uppercase tracking-wider text-yellow-400 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-yellow-500/30 shadow-lg">
            Kuzey Grup
          </span>
        </div>

        {/* BOTTOM TITLE */}
        <div>
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest block drop-shadow-md">
            {visual.title}
          </span>
          <h3 className="text-xl font-extrabold text-white group-hover:text-yellow-300 transition-colors drop-shadow-lg leading-tight">
            {serviceName}
          </h3>
        </div>
      </div>
    </div>
  );
}

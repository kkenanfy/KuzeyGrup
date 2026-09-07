import React, { useState } from 'react';
import { Building, CheckCircle2, Clock, MapPin, Layers, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectsSection({ onOpenValuation }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) =>
        filter === 'completed'
          ? p.category === 'Tamamlanan Proje'
          : p.category === 'Devam Eden Proje'
      );

  return (
    <section id="projeler" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full inline-block mb-3">
              İnşaat & Taahhüt Projelerimiz
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Kat Karşılığı & Prestijli <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Yapı Projelerimiz
              </span>
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tüm Projeler
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'completed'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tamamlananlar
            </button>
            <button
              onClick={() => setFilter('ongoing')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'ongoing'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Devam Edenler
            </button>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-3xl border border-slate-800/90 hover:border-amber-500/40 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                {/* STATUS BADGES */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider ${
                      project.category === 'Tamamlanan Proje'
                        ? 'bg-emerald-500/90 text-slate-950'
                        : 'bg-amber-500/90 text-slate-950'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800/80 text-xs">
                    <div>
                      <span className="text-slate-500 font-medium block">Bağımsız Bölüm</span>
                      <span className="font-bold text-white mt-0.5 block">{project.units}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Arsa Alanı</span>
                      <span className="font-bold text-white mt-0.5 block">{project.landArea}</span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA FOOTER */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Teslim: <span className="font-bold text-amber-400">{project.completionYear}</span>
                  </div>

                  <button
                    onClick={() => onOpenValuation(`Kat Karşılığı Projelendirme Talebi: ${project.title}`)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Arsanız İçin Proje İste
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MapContact from './components/MapContact';
import KvkkModal from './components/KvkkModal';
import Footer from './components/Footer';

export default function App() {
  const [kvkkModalOpen, setKvkkModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black relative overflow-x-hidden">
      {/* NAVIGATION NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* SERVICES SECTION */}
      <Services />

      {/* MAP & CONTACT SECTION */}
      <MapContact />

      {/* FOOTER */}
      <Footer onOpenKvkk={() => setKvkkModalOpen(true)} />

      {/* KVKK PRIVACY MODAL */}
      <KvkkModal
        isOpen={kvkkModalOpen}
        onClose={() => setKvkkModalOpen(false)}
      />
    </div>
  );
}

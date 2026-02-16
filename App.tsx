
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HelpCenter from './components/HelpCenter';
import Modal from './components/Modal';
import { PRIVACY_POLICY, TERMS_SERVICE } from './constants';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [activeHelpBot, setActiveHelpBot] = useState<'rolbet' | 'minibet'>('rolbet');

  const scrollToHelp = (bot: 'rolbet' | 'minibet') => {
    setActiveHelpBot(bot);
    const helpElement = document.getElementById('help');
    if (helpElement) {
      helpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Navbar />

      <main className="lg:ml-32 transition-all duration-500">
        {/* Hero Section - Floating Panel */}
        <section id="hero" className="relative pt-32 pb-12 px-6 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-indigo-600/5 blur-[150px] rounded-full -z-10" />
          
          <div className="max-w-6xl mx-auto">
            <div className="floating-panel p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 transition-transform group-hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Bots para Discord</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                ROL <span className="gradient-text">BET</span> & <br />
                MINI <span className="gradient-text">ROL BET</span>
              </h1>
              
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Gestión, moderación y entretenimiento avanzado. 
                Estabilidad y diversión para tu servidor.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollToHelp('rolbet')}
                  className="btn-primary px-10 py-5 rounded-2xl font-black text-lg"
                >
                  Invitar Rol Bet
                </button>
                <button 
                  onClick={() => scrollToHelp('minibet')}
                  className="btn-outline px-10 py-5 rounded-2xl font-black text-lg"
                >
                  Invitar Mini Rol Bet
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Split Panels */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rol Bet Panel */}
            <div id="rolbet" className="floating-panel p-10 rounded-[2.5rem] flex flex-col group hover:border-indigo-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🤖</span>
              </div>
              <h2 className="text-4xl font-black mb-4">ROL <span className="text-indigo-500">BET</span></h2>
              <p className="text-zinc-500 mb-8 font-medium">Multifunción profesional para gestión y personalización.</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  { icon: '🎟️', text: 'Tickets & Soporte' },
                  { icon: '🖼️', text: 'Embeds Personalizados' },
                  { icon: '🔨', text: 'Moderación Avanzada' },
                  { icon: '🛡️', text: 'Seguridad Anti-Raid' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-semibold p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <span className="bg-white/5 w-8 h-8 flex items-center justify-center rounded-lg text-sm">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => scrollToHelp('rolbet')}
                className="w-full btn-outline py-5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all"
              >
                Ver Detalles
              </button>
            </div>

            {/* Mini Rol Bet Panel */}
            <div id="minibet" className="floating-panel p-10 rounded-[2.5rem] flex flex-col group hover:border-purple-500/30 transition-all duration-500 border-purple-500/10">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-4xl font-black mb-4">MINI <span className="text-purple-500">ROL BET</span></h2>
              <p className="text-zinc-500 mb-8 font-medium">Entretenimiento puro y comunidad activa 24/7.</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  { icon: '🎲', text: 'Juegos Interactivos' },
                  { icon: '💰', text: 'Economía & Tienda' },
                  { icon: '🎮', text: 'Colección Pokémon' },
                  { icon: '🌹', text: 'Eventos Especiales' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-semibold p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <span className="bg-white/5 w-8 h-8 flex items-center justify-center rounded-lg text-sm">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => scrollToHelp('minibet')}
                className="w-full btn-outline py-5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </section>

        {/* Help Center Panel */}
        <HelpCenter 
          activeBot={activeHelpBot} 
          onBotChange={setActiveHelpBot} 
        />

        {/* Footer Panel */}
        <footer id="support" className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="floating-panel p-12 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-black text-2xl">R</div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight">ROL BET <span className="text-indigo-500">Y MINI ROL BET</span></h3>
                  <p className="text-zinc-500 text-sm font-medium">Soporte oficial y comunidad.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8">
                <button onClick={() => setIsPrivacyOpen(true)} className="text-sm font-bold text-zinc-500 hover:text-white transition-colors">Privacidad</button>
                <button onClick={() => setIsTermsOpen(true)} className="text-sm font-bold text-zinc-500 hover:text-white transition-colors">Términos</button>
                <a href="#" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors">Soporte</a>
              </div>
              
              <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
                © 2026 ROL BET
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Modals */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Política de Privacidad"
      >
        <p className="text-sm font-semibold mb-4 text-zinc-500 tracking-wider">Última actualización: {PRIVACY_POLICY.update}</p>
        {PRIVACY_POLICY.content}
      </Modal>

      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Términos de Servicio"
      >
        <p className="text-sm font-semibold mb-4 text-zinc-500 tracking-wider">Última actualización: {TERMS_SERVICE.update}</p>
        {TERMS_SERVICE.content}
      </Modal>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 inset-x-0 p-4 md:p-6 z-[100]"
        >
          <div className="max-w-4xl mx-auto bg-black/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-2xl relative overflow-hidden rounded-xl">
            <div className="absolute top-0 right-0 p-4 z-10 cursor-pointer text-white/50 hover:text-white" onClick={acceptEssential}>
               <X className="w-5 h-5" />
            </div>
            <div className="shrink-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A059]/10">
              <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl text-white font-serif italic mb-2">Ihre Privatsphäre ist uns wichtig</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. 
                Dazu gehören essenzielle Cookies, die für den Betrieb der Seite notwendig sind, sowie statistische Cookies für anonyme Auswertungen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
              <button 
                onClick={acceptEssential}
                className="px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm whitespace-nowrap"
              >
                Nur Essenzielle
              </button>
              <button 
                onClick={acceptAll}
                className="px-6 py-3 bg-[#C5A059] text-black hover:bg-[#b08c4a] transition-colors text-xs font-bold uppercase tracking-widest rounded-sm whitespace-nowrap"
              >
                Alle Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

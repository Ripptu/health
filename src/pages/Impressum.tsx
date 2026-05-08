import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#C5A059] selection:text-black">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link to="/" className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-12">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
             <span className="font-sans font-extrabold tracking-tight">Impressum</span>
          </h1>
          <div className="w-20 h-1 bg-[#C5A059] mb-12"></div>

          <div className="space-y-12 text-white/80 font-light leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                Lisa Prochnow<br />
                Health & Body<br />
                Hans-Sachs-str. 32<br />
                01129 Dresden
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">Kontakt</h2>
              <p>
                Telefon: +49 (0) 157 85513538<br />
                E-Mail: lp.training.dd@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">Hinweis zur Kleinunternehmerregelung</h2>
              <p>
                <em>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</em>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" className="text-[#C5A059] hover:underline" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

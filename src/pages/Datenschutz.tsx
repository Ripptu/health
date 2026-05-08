import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Datenschutz() {
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
             <span className="font-sans font-extrabold tracking-tight">Datenschutz</span><span className="font-serif italic text-white/70 block md:inline md:ml-4">erklärung</span>
          </h1>
          <div className="w-20 h-1 bg-[#C5A059] mb-12"></div>

          <div className="space-y-12 text-white/80 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">1. Datenschutz auf einen Blick</h2>
              <p className="mb-4"><strong>Allgemeine Hinweise</strong></p>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">2. Datenerfassung auf dieser Website</h2>
              <p className="mb-4"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-4"><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">3. Wofür nutzen wir Ihre Daten?</h2>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

             <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">4. Welche Rechte haben Sie bezüglich Ihrer Daten?</h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

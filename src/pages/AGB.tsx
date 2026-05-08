import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AGB() {
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
             <span className="font-sans font-extrabold tracking-tight">Allgemeine</span><span className="font-serif italic text-white/70 block md:inline md:ml-4">Geschäftsbedingungen</span>
          </h1>
          <div className="w-20 h-1 bg-[#C5A059] mb-12"></div>

          <div className="space-y-12 text-white/80 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Vereinbarungen und Angebote zwischen Lisa Prochnow (Health & Body) und ihren Kunden bezüglich der angebotenen Dienstleistungen im Bereich Fitness, Gesundheit und Personal Training.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">§ 2 Vertragsabschluss</h2>
              <p>
                Ein verbindlicher Vertrag kommt zustande, sobald der Kunde ein Angebot (z.B. Anmeldung für einen Kurs oder Vereinbarung eines Personal Trainings) mündlich, schriftlich oder elektronisch bestätigt und diese Bestätigung von uns angenommen wird.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">§ 3 Stornierungsbedingungen</h2>
              <p>
                Vereinbarte Termine für Personal Training müssen mindestens 24 Stunden im Voraus abgesagt werden. Bei späteren Absagen oder Nichterscheinen wird das volle Honorar in Rechnung gestellt. Bei Kursanmeldungen gelten die spezifischen, bei der Buchung mitgeteilten Stornierungsfristen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">§ 4 Haftung</h2>
              <p>
                Die Haftung des Trainers für Sach- und Vermögensschäden ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für gesundheitliche Risiken, die dem Kunden vorab bekannt waren und nicht mitgeteilt wurden, wird keine Haftung übernommen. Jeder Kunde versichert mit seiner Teilnahme an Kursen oder Trainings, dass er sportgesund ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic text-white mb-4">§ 5 Zahlungsbedingungen</h2>
              <p>
                Die Vergütung ist, sofern nicht anders vereinbart, nach Rechnungsstellung bzw. vor Beginn der ersten Trainingseinheit sofort und ohne Abzug fällig.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Leaf, 
  Users, 
  Activity, 
  Brain, 
  CheckCircle2, 
  ShieldCheck,
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  X,
  ChevronRight
} from 'lucide-react';

const LOGO_URL = "https://s1.directupload.eu/images/260505/96sqp84n.webp";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = ['Startseite', 'Über mich', 'Leistungen', 'Kursplan', 'Preise', 'Kontakt'];

  const services = [
    {
      title: "Ernährungsberatung",
      subtitle: "(ErnährungsFit)",
      pitch: '"Nicht nur Brokkoli und Huhn."',
      desc: "Individuelle Konzepte statt Standard-Internetpläne. Analyse von Aktivität und Körperzusammensetzung. Strukturierte Planung von Nährstoffen passend zum Grundumsatz.",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "SeniorenFit",
      subtitle: "",
      pitch: '"Aktiv im Leben stehen und sich wohlfühlen."',
      desc: "Training bis ins hohe Alter. Verbesserung des eigenen Wohlbefindens steht im Fokus. Spezielle Angebote wie 'Rollator Geh Schule' und 'Parkinson Fit'.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "KinderFit & Kindersport",
      subtitle: "(6 bis 12 Jahre)",
      pitch: "Präventionskonzept gegen Bewegungsmangel.",
      desc: "Kein Leistungs- oder Wettkampfdruck. Spaß an der Bewegung, Schulung motorischer und psychosozialer Kompetenzen. Ohne Benachteiligungen.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Yoga-Pilates-Mix & FaszienFit",
      subtitle: "",
      pitch: '"Konzentration - Stärkung - Mobilität."',
      desc: "Ganzheitliches Training für Körper & Geist, Fokus auf Bauch-/Rückenmuskulatur. Plus FaszienFit für Stärke und Ausdauer bei gesteigerter Mobilität.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "FunctionalFit",
      subtitle: "(Personal Training)",
      pitch: '"Ein verbessertes Selbst."',
      desc: "Erkennen von Stärken und Reduzierung von Schwachstellen. Tests, Übungen und Bewegungsroutinen zur Wiederherstellung natürlicher Bewegungen.",
      icon: <CheckCircle2 className="w-8 h-8" />
    }
  ];

  const schedule = [
    {
      day: "Montag",
      classes: [
        { time: "11:00 - 12:00 Uhr", name: "SeniorenFit (Fortgeschritten)" },
        { time: "18:00 - 19:00 Uhr", name: "FaszienFit & Mobility (Neu)" }
      ]
    },
    {
      day: "Mittwoch",
      classes: [
        { time: "09:00 - 10:00 Uhr", name: "SeniorenFit (eingeschränkt)" }
      ]
    },
    {
      day: "Donnerstag",
      classes: [
        { time: "18:00 Uhr", name: "FaszienFit" },
        { time: "19:00 Uhr", name: "Yoga-Mix" }
      ]
    },
    {
      day: "Freitag",
      classes: [
        { time: "08:30 - 09:30 Uhr", name: "SeniorenFit" },
        { time: "14:30 - 15:30 Uhr", name: "Parkinson Fit" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-[#C5A059] selection:text-black relative overflow-x-hidden text-[#F5F5F0]">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[400px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[300px] h-[300px] bg-[#8A9A5B]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* 1. Header & Navigation (Sticky) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'glass-nav' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4 cursor-pointer relative z-10 w-64">
            <img src={LOGO_URL} alt="Health & Body Logo" className="h-10 md:h-12 object-contain" />
          </div>
          
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8 text-[11px] uppercase tracking-[0.15em] font-medium text-white/70">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex justify-end w-64">
            <button className="btn-gold-solid px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold">
              Jetzt Termin buchen
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Full-Screen Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-0 w-full h-[100dvh] bg-[#050505] z-40 flex flex-col pt-24 px-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col gap-5 text-center relative z-10 w-full mt-4 flex-1 justify-center">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif italic text-3xl text-white/90 hover:text-[#C5A059] transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-auto pb-10 relative z-10 flex flex-col items-center gap-6 w-full"
              >
                <div className="flex gap-6 text-white/60">
                  <a href="https://www.instagram.com/_health.and.body_/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-[#C5A059] hover:text-[#C5A059] transition-all bg-white/5">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 border border-white/10 rounded-full hover:border-[#C5A059] hover:text-[#C5A059] transition-all bg-white/5">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
                
                <button className="btn-gold-solid px-10 py-4 w-full max-w-xs text-xs uppercase tracking-[0.25em] font-bold">
                  Termin buchen
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative pt-20">
        
        {/* 2. Hero-Sektion */}
        <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 text-center" id="startseite">
          {/* Herobild ohne starke Abdunkelung, nur ein feiner Verlauf ins Schwarze nach unten */}
          <div className="absolute inset-0 bg-[url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260505_125133_a21e3c0b-5f45-4a32-976d-f6446bb467ac.png&w=1280&q=85')] bg-cover bg-top pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto relative z-10 flex flex-col items-center mt-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8">
              <span className="font-sans font-extrabold tracking-tight text-white block mb-2">Dein Weg zu einem gesunden</span>
              <span className="font-serif italic text-[#C5A059] pr-4">Körper & Geist</span> 
              <span className="font-sans font-bold uppercase tracking-widest text-[#8A9A5B] md:text-white/40 text-lg md:text-xl block mt-6">in Radebeul</span>
            </h1>
            
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 font-light px-6 py-2">
              Ganzheitliche Prävention, Ernährungsberatung & Personal Training mit Lisa Prochnow.
            </p>
            
            <button className="btn-gold-solid px-12 py-5 rounded-none text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105">
              Kostenloses Erstgespräch sichern
            </button>
          </motion.div>
        </section>

        {/* 3. Trust- & Statistik-Leiste */}
        <section className="py-12 relative z-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="py-4 md:py-0 pt-0">
                <div className="serif text-4xl lg:text-5xl gold-text mb-2 text-glow">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Jahre Erfahrung</div>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <ShieldCheck className="w-8 h-8 gold-text mb-3" strokeWidth={1} />
                <div className="text-[10px] uppercase tracking-widest text-white/80 leading-relaxed font-bold">
                  Zertifizierte Sportökonomin <br/>& Ernährungsberaterin
                </div>
              </div>
              <div className="py-4 md:py-0 pb-0 flex flex-col items-center justify-center">
                <CheckCircle2 className="w-8 h-8 gold-text mb-3" strokeWidth={1} />
                <div className="text-[10px] uppercase tracking-widest text-white/80 leading-relaxed font-bold">
                  100% Individuelle & <br/>Ganzheitliche Betreuung
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Leistungen-Bento-Grid */}
        <section className="py-24 md:py-32 relative z-20" id="leistungen">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] mb-4 font-bold">Unsere Angebote</div>
              <h2 className="text-4xl md:text-6xl text-white mb-4">
                <span className="font-sans font-extrabold tracking-tight">Kern</span><span className="font-serif italic text-[#C5A059]">Leistungen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 auto-rows-[minmax(250px,auto)] gap-6">
              
              {/* Item 1: Ernährungsberatung (Large) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col group md:col-span-2 md:row-span-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-20 transition-all duration-700">
                  {services[0].icon}
                </div>
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors border border-white/5 relative z-10">
                  <div className="gold-text">{services[0].icon}</div>
                </div>
                <h3 className="font-serif italic text-3xl md:text-4xl text-white mb-2 relative z-10">{services[0].title}</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4 relative z-10">{services[0].subtitle}</p>
                <div className="text-xs md:text-sm font-medium text-white/90 italic mb-4 relative z-10">{services[0].pitch}</div>
                <p className="text-sm text-white/50 leading-relaxed font-light mb-8 flex-1 relative z-10">{services[0].desc}</p>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-auto font-bold w-fit relative z-10">
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Item 2: SeniorenFit */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8 rounded-2xl flex flex-col group md:col-span-2"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors border border-white/5 shrink-0">
                     <div className="gold-text">{services[1].icon}</div>
                   </div>
                   <div>
                     <h3 className="font-sans font-light uppercase tracking-widest text-xl text-white">{services[1].title}</h3>
                   </div>
                </div>
                <div className="text-xs font-medium text-white/80 italic mb-3">{services[1].pitch}</div>
                <p className="text-xs text-white/50 leading-relaxed font-light flex-1">{services[1].desc}</p>
              </motion.div>

              {/* Item 3: KinderFit */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-8 rounded-2xl flex flex-col group md:col-span-1"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors border border-white/5">
                  <div className="gold-text">{services[2].icon}</div>
                </div>
                <h3 className="font-serif italic text-2xl text-white mb-2">{services[2].title}</h3>
                <div className="text-[10px] font-medium text-white/60 mb-4 h-8">{services[2].pitch}</div>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-auto font-bold w-fit">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Item 4: Yoga */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-6 md:p-8 rounded-2xl flex flex-col group md:col-span-1 bg-gradient-to-br from-[#121212] to-[#1a1a1a]"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/30 transition-colors border border-[#C5A059]/20">
                  <div className="gold-text">{services[3].icon}</div>
                </div>
                <h3 className="font-sans font-light uppercase tracking-widest text-lg md:text-xl text-white mb-4 leading-tight">{services[3].title.replace(' & ', ' &\n')}</h3>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-auto font-bold w-fit">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Item 5: FunctionalFit Wide */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-12 items-center group md:col-span-4"
              >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors border border-white/5 shrink-0">
                  <div className="gold-text">{services[4].icon}</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif italic text-3xl md:text-4xl text-white mb-2">{services[4].title}</h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">{services[4].subtitle} &bull; <span className="text-white/60 italic font-medium lowercase tracking-normal">{services[4].pitch}</span></p>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{services[4].desc}</p>
                </div>
                <div className="shrink-0">
                  <button className="btn-gold-outline px-6 py-3 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap rounded-full">
                    Jetzt anfragen
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. Über mich-Sektion */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5 relative z-20" id="über mich">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-t-[100px] rounded-bl-[100px] overflow-hidden relative border border-white/10 p-2 glass-card">
                   <div className="w-full h-full rounded-t-[100px] rounded-bl-[100px] overflow-hidden">
                     {/* Placeholder for Expert Portrait */}
                     <img 
                      src="https://static.wixstatic.com/media/6d59aa_2976d61e167d4145a163cbf4891d5d00~mv2.jpg/v1/fill/w_873,h_980,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6d59aa_2976d61e167d4145a163cbf4891d5d00~mv2.jpg" 
                      alt="Lisa Prochnow" 
                      className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                   </div>
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-lg hidden md:block w-48 border-l-4 border-l-[#C5A059]">
                  <div className="serif text-3xl gold-text mb-1 italic">10+</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/60">Jahre Branchen-Erfahrung</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] mb-4 font-bold">Die Expertin</div>
                <h2 className="text-4xl md:text-5xl text-white mb-8 leading-[1.1]">
                  <span className="font-sans font-extrabold tracking-tight">Lisa Prochnow</span><br/>
                  <span className="font-serif italic text-white/70 tracking-normal pr-3">Expertin für Gesundheit</span>
                </h2>
                
                <div className="space-y-6 text-white/60 text-sm font-light leading-relaxed mb-10">
                  <p>
                    <strong className="text-white font-medium block mb-1">Qualifikationen:</strong>
                    Sportökonomin, Ernährungsberaterin und zertifizierte Trainerin für diverse Gesundheits- und Präventivprogramme. Mit über 10 Jahren in der Sport- und Gesundheitsbranche bringe ich fundierte Expertise mit.
                  </p>
                  <p>
                    <strong className="text-white font-medium block mb-1">Zielgruppen:</strong>
                    Kinder (ab Kindergartenalter), Senioren, körperlich/geistig eingeschränkte Menschen sowie Kooperationen mit Krankenkassen, Schulen, Vereinen und Pflegeheimen.
                  </p>
                  <p>
                    <strong className="text-white font-medium block mb-1">Philosophie:</strong>
                    Im Zentrum meiner Arbeit steht immer die <span className="gold-text italic">Individualität</span>. Jeder Mensch bringt eigene Voraussetzungen, Fähigkeiten und Ziele mit. Mein Ziel für dich ist es, physisch und geistig voranzukommen und mental zu wachsen.
                  </p>
                </div>

                <button className="btn-gold-outline w-fit px-8 py-4 text-[10px] font-bold tracking-widest uppercase">
                  Mehr über meine Philosophie
                </button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 6. Kursplan-Sektion */}
        <section className="py-24 md:py-32 relative z-20" id="kursplan">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-6xl text-white mb-4">
                <span className="font-sans font-extrabold tracking-tight">Aktueller</span> <span className="font-serif italic text-[#C5A059]">Kursplan</span>
              </h2>
              <p className="text-white/50 text-sm font-light max-w-xl mx-auto">Verschaffe dir einen Überblick über unsere wöchentlichen Routinen und Angebote in Radebeul & Dresden.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schedule.map((dayPlan, idx) => (
                <div key={idx} className="glass-card p-8 rounded-lg">
                  <h3 className="serif text-2xl gold-text mb-6 border-b border-white/10 pb-4 inline-block w-full">{dayPlan.day}</h3>
                  <div className="space-y-4">
                    {dayPlan.classes.map((cls, classIdx) => (
                      <div key={classIdx} className="flex justify-between items-start group">
                        <div className="text-white/80 group-hover:text-white transition-colors">{cls.name}</div>
                        <div className="text-[11px] font-mono text-white/40 pt-1 shrink-0 ml-4">{cls.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-[10px] text-white/40 uppercase tracking-widest">
                Termine können abweichen. Bitte für Erstteilnahmen via Kontakt anmelden.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Preistabelle */}
        <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5 relative z-20" id="preise">
          <div className="max-w-6xl mx-auto px-6">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-center mb-16"
             >
               <h2 className="text-4xl md:text-6xl text-white mb-4">
                 <span className="font-sans font-extrabold tracking-tight">Investition</span> <span className="font-serif italic text-[#C5A059]">in dich</span>
               </h2>
               <p className="text-white/50 text-sm font-light max-w-xl mx-auto">Kompakte Preisübersichten für unsere Kernbereiche.</p>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Erwachsene */}
               <div className="glass-card p-8 border-t-4 border-t-[#C5A059] flex flex-col h-full relative">
                 <div className="serif text-3xl text-white mb-8">Erwachsene</div>
                 <div className="flex-1 space-y-4 text-sm mb-10">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Personal Training (1h)</span>
                     <span className="gold-text font-serif text-lg">85 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Kurs Yoga Mix</span>
                     <span className="gold-text font-serif text-lg">130 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Kurs Faszien Training</span>
                     <span className="gold-text font-serif text-lg">130 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Tape Anlage</span>
                     <span className="gold-text font-serif text-lg">20 €</span>
                   </div>
                 </div>
                 <button className="btn-gold-outline w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto">Jetzt Buchen</button>
               </div>

               {/* Senioren */}
               <div className="glass-card p-8 border-t-4 border-t-[#8A9A5B] flex flex-col h-full relative">
                 <div className="serif text-3xl text-white mb-8">Senioren</div>
                 <div className="flex-1 space-y-4 text-sm mb-10">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Senioren Kraft (10x)</span>
                     <span className="text-[#8A9A5B] font-serif text-lg">120 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Mobility Kurs</span>
                     <span className="text-[#8A9A5B] font-serif text-lg">130 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Rollator Geh Schule</span>
                     <span className="text-[#8A9A5B] font-serif text-lg">125 €</span>
                   </div>
                 </div>
                 <button className="border border-[#8A9A5B] text-[#8A9A5B] hover:bg-[#8A9A5B] hover:text-black transition-colors w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto">Anfragen</button>
               </div>

               {/* Kinder */}
               <div className="glass-card p-8 border-t-4 border-t-white/30 flex flex-col h-full relative">
                 <div className="serif text-3xl text-white mb-8">Kinder</div>
                 <div className="flex-1 space-y-4 text-sm mb-10">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Kurs Kinder Sport (1,5h)</span>
                     <span className="text-white font-serif text-lg">50 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Kurs Kinder Fit</span>
                     <span className="text-white font-serif text-lg">35 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">10er Karte Kinder Fit</span>
                     <span className="text-white font-serif text-lg">99 €</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70">Personal Training Kinder</span>
                     <span className="text-white font-serif text-lg">45 €</span>
                   </div>
                 </div>
                 <button className="border border-white/30 text-white/80 hover:bg-white hover:text-black transition-colors w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto">Jetzt Buchen</button>
               </div>
             </div>
          </div>
        </section>

        {/* 8. Kontakt & Formular */}
        <section className="py-24 md:py-32 relative z-20" id="kontakt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Kontakt Info */}
              <div>
                <h2 className="text-4xl md:text-6xl text-white mb-6">
                  <span className="font-serif italic text-[#C5A059] pr-3">Lass uns</span><br className="md:hidden" /> <span className="font-sans font-extrabold tracking-tight">starten.</span>
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-10 max-w-md">
                  Bereit für eine Veränderung? Melde dich für ein unverbindliches Erstgespräch. Ich freue mich auf deine Nachricht.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 gold-text" />
                    </div>
                    <div className="pt-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">E-Mail Adresse</div>
                      <a href="mailto:lp.training.dd@gmail.com" className="text-white/80 hover:text-[#C5A059] transition-colors text-lg">lp.training.dd@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 gold-text" />
                    </div>
                    <div className="pt-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Telefon</div>
                      <a href="tel:+4915785513538" className="text-white/80 hover:text-[#C5A059] transition-colors text-lg">+49 157 85513538</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 gold-text" />
                    </div>
                    <div className="pt-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Standorte</div>
                      <div className="text-white/80 text-lg leading-relaxed">
                        Radebeul (01445) <br/>& Dresden
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formular */}
              <div className="glass-card p-8 md:p-10 rounded-lg">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Dein Name</label>
                       <input type="text" className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all" placeholder="Max Mustermann" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Deine E-Mail</label>
                       <input type="email" className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all" placeholder="mail@beispiel.de" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Betreff (Optional)</label>
                     <input type="text" className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all" placeholder="Anfrage Personaltraining" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Deine Nachricht</label>
                     <textarea rows={5} className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all resize-none" placeholder="Wie kann ich dir helfen?"></textarea>
                  </div>
                  <button type="button" className="btn-gold-solid w-full py-4 text-xs font-bold uppercase tracking-widest mt-4">Nachricht Senden</button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 9. Fußzeile */}
      <footer className="bg-black border-t border-white/10 py-16 px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-white/50 space-y-4">
             <img src={LOGO_URL} alt="Health & Body Logo" className="h-16 md:h-20 object-contain mb-2 brightness-90 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
             <p className="text-[10px] uppercase tracking-[0.2em]">© 2024 Health & Body.<br className="md:hidden" /> Alle Rechte vorbehalten.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Rechtliches</span>
              <a href="#" className="text-xs text-white/40 hover:text-[#C5A059] transition-colors">Impressum</a>
              <a href="#" className="text-xs text-white/40 hover:text-[#C5A059] transition-colors">Datenschutz</a>
              <a href="#" className="text-xs text-white/40 hover:text-[#C5A059] transition-colors">AGB</a>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Social</span>
              <a href="https://www.instagram.com/_health.and.body_/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 text-xs text-white/40 hover:text-[#C5A059] transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

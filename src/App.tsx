import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CookieBanner } from './components/CookieBanner';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
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
  Heart,
  Instagram, 
  Facebook,
  X,
  ChevronRight,
  Briefcase,
  MessageCircle
} from 'lucide-react';
import { TestimonialsColumn } from './components/ui/testimonials-columns-1';

const LOGO_URL = "https://s1.directupload.eu/images/260505/96sqp84n.webp";

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedService, setSelectedService] = useState<{title: string, subtitle: string, pitch: string, desc: string, icon: any, image: string} | null>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen || selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, selectedService]);

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

  const getLinkHref = (link: string) => {
    if (link === 'Über mich') return '/#ueber-mich';
    return `/#${link.toLowerCase()}`;
  };

  const services = [
    {
      title: "Ernährungsberatung",
      subtitle: "(ErnährungsFit)",
      pitch: '"Nicht nur Brokkoli und Huhn."',
      desc: "Alle wollen gut aussehen oder Muskeln aufbauen, Fett verlieren, leistungsstark oder gesund erscheinen. Doch was ist für Sie wichtig und richtig? Welche Ernährungsform, Taktung und Zusammenstellung macht für Sie Sinn, um Ihr Ziel zu erreichen?\n\nMeine Pläne setzen genau an dieser Fragestellung an und sind genauso individuell wie Ihre eigenen Antworten darauf. Wenn Sie bereit sind, diesen Schritt zu gehen, werden Sie bereits in kürzester Zeit Resultate spüren und auch sehen.",
      icon: <Leaf className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SeniorenFit",
      subtitle: "Seniorensport Radebeul Dresden",
      pitch: '"Aktiv im Leben stehen und sich wohlfühlen."',
      desc: "Bei Gesundheit und Fitness geht es nicht nur darum, wie der Körper aussieht, sondern auch wie man sich fühlt! Auch das Training bis ins hohe Alter ist möglich, wobei eine Förderung und Verbesserung des eigenen Wohlbefindens im Hauptfokus steht. Dieser Kurs ist speziell für Menschen ab ca. 60 Jahren, die darauf abzielen, Kraft, Mobilität, Koordination und Gleichgewicht zu verbessern. Die Inhalte umfassen altersgerechte Gymnastik, Sturzprophylaxe, Herz-Kreislauf-Training und Übungen zur Steigerung der Selbstständigkeit im Alltag. Ich garantiere, dass auch hierbei der Spaß nicht zu kurz kommt. Worauf warten Sie noch? Buchen Sie Ihr Training noch heute!",
      icon: <Users className="w-8 h-8" />,
      image: "https://s1.directupload.eu/images/260508/ghrud6mf.jpg"
    },
    {
      title: "KinderFit & Kindersport",
      subtitle: "(6 bis 12 Jahre)",
      pitch: '"Angebot zur freien Entfaltung."',
      desc: "Der Alltag der Kinder besteht heute zu großen Teilen aus Schule... Immer weniger Kinder sind im Vereinssport aktiv. Engagierte Eltern suchen verstärkt nach einem Bewegungskonzept ohne Leistungsdruck. Hier setzt das Präventionskonzept an: Spaß an der Bewegung sowie Übungen zur Schulung motorischer Kompetenzen im Mittelpunkt. Jedes Kind wird individuell gefördert. (Zertifizierter Präventionskurs)",
      icon: <Activity className="w-8 h-8" />,
      image: "https://s1.directupload.eu/images/260508/2vay8i5a.jpg"
    },
    {
      title: "Yoga-Pilates-Mix",
      subtitle: "",
      pitch: '"Konzentration - Stärkung - Mobilität."',
      desc: "Dieses Kurskonzept bildet ein ganzheitliches Training für Körper & Geist. Es ist für Anfänger mit dem Interesse und Schwerpunkt der Bewegungskunst Yoga und Pilates geeignet.\n\nDer Fokus liegt auf der Stärkung der Bauch- und Rückenmuskulatur sowie der Fokussierung und Zentralisierung des eigenen Ich. Es ist in seiner Intensität bezüglich der Verbesserung des Zusammenspiels von Muskulatur und Gelenken jedoch nicht zu unterschätzen.",
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "FaszienFit & Mobility",
      subtitle: "Faszientraining Radebeul Dresden",
      pitch: '"Stärke und Ausdauer bei gesteigerter Mobilität."',
      desc: "In diesem Kurs sprechen Sie Ihr fasziales Netzwerk gezielt an – mit ruhigen, bewussten Prinzipien ebenso wie mit kraftvollen Bewegungsimpulsen. Gemeinsam arbeiten wir an den myofaszialen Ketten, damit sich Bewegung in ihrer Qualität verändert.\n\nSie lernen, neue Dehnreize richtig zu setzen, Ihre Körperwahrnehmung zu schärfen und spürbar mehr Geschmeidigkeit aufzubauen. Durch die gezielte Stimulation des Bindegewebes entsteht Raum: für mehr Beweglichkeit, mehr Stabilität und für eine entspanntere, flüssigere Bewegung. Kurz gesagt: ein Training, das Ihr System heraufgefordert und Ihr Bewegungsmuster langfristig unterstützt.",
      icon: <Heart className="w-8 h-8" />,
      image: "https://s1.directupload.eu/images/260508/zqa24uyo.jpg"
    },
    {
      title: "FunctionalFit",
      subtitle: "(Personal Training)",
      pitch: '"Ein verbessertes Selbst."',
      desc: "Das Hauptaugenmerk meines Kurses hier liegt darin, dass Kursteilnehmer ihre Stärken aber auch bestehende Schwachstellen erkennen und erlernen, wie diese nachhaltig reduziert werden können.\nIch werde Sie hier durch die Umsetzung verschiedener Tests, Übungen und Bewegungsroutinen schulen, um natürliche, funktionelle Bewegungen wiederherzustellen, zu erhalten, bzw. zu optimieren.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Firmenfitness",
      subtitle: "(B2B)",
      pitch: '"Gesunde Mitarbeiter, starkes Unternehmen."',
      desc: "Maßgeschneiderte Konzepte für die Gesundheit Ihres Teams. Verbessern Sie das Betriebsklima und reduzieren Sie Ausfallzeiten durch gezielte Prävention und Bewegung am Arbeitsplatz. Preis auf Anfrage.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
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
        { time: "09:30 - 10:30 Uhr", name: "SeniorenFit (eingeschränkt)" }
      ]
    },
    {
      day: "Donnerstag",
      classes: []
    },
    {
      day: "Freitag",
      classes: [
        { time: "08:30 - 09:30 Uhr", name: "SeniorenFit (eingeschränkt)" }
      ]
    }
  ];

  const testimonialsContent = [
    { text: "Vielen lieben Dank für Ihr Engagement. Ich habe mich sehr wohl und verstanden gefühlt. Danke für den Plan und Ihre Zeit. Ich komme auf jeden Fall noch mal wieder. Ihre schöne positive Ausstrahlung färbt schon jetzt ab. Danke.", name: "Nadine", role: "Kundenbewertung" },
    { text: "Liebe Frau Prochnow, der Kurs gefällt mir sehr gut!! Ich merke, dass ich schon beweglicher geworden bin. Nach der Trainingsstunde mit Ihnen fühle ich mich 'schwerelos' – ein tolles Gefühl. Besonders gefällt mir, dass Sie ganz individuell auf uns eingehen und uns bei Anliegen kompetent beraten. Ich komme sehr gerne wieder. Beste Grüße Petra", name: "Petra", role: "Kursmitglied" },
  ];

  const firstColumn = testimonialsContent.slice(0, 1);
  const secondColumn = testimonialsContent.slice(1, 2);
  const thirdColumn: any[] = [];

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
              <a key={link} href={getLinkHref(link)} className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex justify-end w-64">
            <a href="#kontakt" className="btn-gold-solid px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold">
              Jetzt Termin buchen
            </a>
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
                    href={getLinkHref(link)} 
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
                
                <a href="#kontakt" className="btn-gold-solid px-10 py-4 w-full max-w-xs text-xs uppercase tracking-[0.25em] font-bold text-center">
                  Termin buchen
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative pt-20">
        
        {/* 2. Hero-Sektion */}
        <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 text-center" id="startseite">
          {/* Herobild abgedunkelt */}
          <div className="absolute inset-0 bg-[url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260507_134859_d2c8fb26-ee5a-4c90-b2f7-cf03a18343e6.png&w=1280&q=85')] bg-cover bg-top pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] -z-10" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto relative z-10 flex flex-col items-center mt-12"
          >
            <h1 className="mb-8 flex flex-col text-center">
              <span className="font-sans font-bold text-[32px] md:text-[41px] leading-tight tracking-tight text-white block mb-4 mt-6">Ihr Weg zu einem gesunden</span>
              <span className="font-serif italic text-[#C5A059] text-[42px] md:text-[69px] leading-[1.1] text-center block pr-4">Körper & Geist</span> 
              <span className="font-sans font-bold uppercase tracking-widest text-[#8A9A5B] md:text-white/40 text-xs md:text-lg block mt-8">Faszientraining & Seniorensport · Radebeul Dresden</span>
            </h1>
            
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 font-light px-6 py-2 text-center">
              Ihr Spezialist für Faszientraining Radebeul Dresden & Seniorensport Radebeul Dresden. Ganzheitliche Prävention & Personal Training mit Lisa Prochnow.
            </p>
            
            <a href="#kontakt" className="btn-gold-solid px-12 py-5 rounded-none text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105">
              Kostenloses Erstgespräch sichern
            </a>
          </motion.div>
        </section>

        {/* 3. Trust- & Statistik-Leiste */}
        <section className="py-12 relative z-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-white/10">
              <div className="py-4 md:py-0 border-r border-white/10 md:border-r-0">
                <div className="serif text-4xl lg:text-5xl gold-text mb-2 text-glow">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Jahre Erfahrung</div>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center border-r-0 md:border-x md:border-white/10">
                <ShieldCheck className="w-8 h-8 gold-text mb-3" strokeWidth={1} />
                <div className="text-[10px] uppercase tracking-widest text-white/80 font-bold">
                  Zertifizierte Sportökonomin <br/>& Ernährungsberaterin
                </div>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center border-r border-white/10 md:border-r md:border-white/10">
                <CheckCircle2 className="w-8 h-8 gold-text mb-3" strokeWidth={1} />
                <div className="text-[10px] uppercase tracking-widest text-white/80 font-bold">
                  100% Individuelle & <br/>Ganzheitliche Betreuung
                </div>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <img 
                  src="https://s1.directupload.eu/images/260508/ed97v58f.png" 
                  alt="AOK Zertifikat" 
                  className="h-12 md:h-14 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
                <div className="text-[9px] uppercase tracking-widest text-white/40 mt-3 text-center">
                  Zertifizierte Prävention & <br/>Krankenkassen-Zertifizierung
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
                <h3 className="font-serif italic text-3xl md:text-4xl text-white mb-2 relative z-10 leading-tight">{services[0].title}</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4 relative z-10">{services[0].subtitle}</p>
                <div className="text-xs md:text-sm font-medium text-white/90 italic mb-4 relative z-10 leading-relaxed">{services[0].pitch}</div>
                <p className="text-sm text-white/50 leading-relaxed font-light mb-8 flex-1 relative z-10">{services[0].desc}</p>
                <button 
                  onClick={() => setSelectedService(services[0])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-auto font-bold w-fit relative z-10"
                >
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
                <p className="text-xs text-white/50 font-light flex-1">{services[1].desc}</p>
                <button 
                  onClick={() => setSelectedService(services[1])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-4 font-bold w-fit"
                >
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
                </button>
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
                <button 
                  onClick={() => setSelectedService(services[2])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-auto font-bold w-fit"
                >
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
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
                <h3 className="font-sans font-light uppercase tracking-widest text-lg md:text-xl text-white mb-4 text-balance">{services[3].title.replace(' & ', ' &\n')}</h3>
                <button 
                  onClick={() => setSelectedService(services[3])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-auto font-bold w-fit"
                >
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Item 5: FaszienFit */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card p-8 rounded-2xl flex flex-col group md:col-span-2 bg-[#C5A059]/5 border-[#C5A059]/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors border border-white/5 shrink-0">
                    <div className="gold-text">{services[4].icon}</div>
                  </div>
                  <div>
                    <h3 className="font-serif italic text-2xl text-white mb-1">{services[4].title}</h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">{services[4].subtitle}</p>
                  </div>
                </div>
                <div className="text-xs font-medium text-white/90 italic mb-4">{services[4].pitch}</div>
                <p className="text-sm text-white/50 font-light flex-1">{services[4].desc}</p>
                <button 
                  onClick={() => setSelectedService(services[4])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-8 font-bold w-fit"
                >
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Item 6: FunctionalFit */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-8 rounded-2xl flex flex-col group md:col-span-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors border border-white/5 shrink-0">
                    <div className="gold-text">{services[5].icon}</div>
                  </div>
                  <div>
                    <h3 className="font-serif italic text-2xl text-white mb-1">{services[5].title}</h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">{services[5].subtitle}</p>
                  </div>
                </div>
                <div className="text-xs font-medium text-white/90 italic mb-4">{services[5].pitch}</div>
                <p className="text-sm text-white/50 font-light flex-1">{services[5].desc}</p>
                <button 
                  onClick={() => setSelectedService(services[5])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-8 font-bold w-fit"
                >
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Item 7: Firmenfitness */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="glass-card p-8 rounded-2xl flex flex-col group md:col-span-4 lg:col-span-2 lg:col-start-2 bg-[#C5A059]/5 border-[#C5A059]/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059]/30 transition-colors border border-[#C5A059]/20 shrink-0">
                    <div className="gold-text">{services[6].icon}</div>
                  </div>
                  <div>
                    <h3 className="font-sans font-light uppercase tracking-widest text-xl text-white mb-1">{services[6].title}</h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">{services[6].subtitle}</p>
                  </div>
                </div>
                <div className="text-xs font-medium text-white/90 italic mb-4">{services[6].pitch}</div>
                <p className="text-sm text-white/50 font-light flex-1">{services[6].desc}</p>
                <button 
                  onClick={() => setSelectedService(services[6])}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest gold-text group-hover:text-white transition-colors mt-8 font-bold w-fit"
                >
                  Mehr erfahren <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. Über mich-Sektion */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5 relative z-20" id="ueber-mich">
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
                      src="https://s1.directupload.eu/images/260508/84zex44f.jpg" 
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
                <h2 className="text-3xl md:text-5xl text-white mb-8 leading-tight">
                  <span className="font-sans font-extrabold tracking-tight">Lisa Prochnow</span><br/>
                  <span className="font-serif italic text-white/70 tracking-normal pr-3 text-[24px] md:text-[34px] leading-tight block">Expertin für Fitness & Gesundheit</span>
                </h2>
                
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full">
                  <CheckCircle2 className="w-4 h-4 gold-text" />
                  <span className="text-[10px] uppercase tracking-widest gold-text font-bold">Krankenkassenzertifizierte Kurstrainerin</span>
                </div>
                
                <div className="space-y-6 text-white/60 text-sm font-light leading-relaxed mb-10">
                  <div>
                    <strong className="text-white font-medium block mb-3">Qualifikationen:</strong>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Bachelor of Fitnessökonomie</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Gesundheitstrainer</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Trainer für Sportrehabilitation</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Ernährungstrainerin</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Trainerin für Krafttraining</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Trainerin für Cardiotraining</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Senioren Fitness Trainer</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Kindertrainer</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Faszientraining</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Functional Movement Training</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Rückentrainer</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Autogenes Training</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Bellicon Jumping Fitness</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> TRX Yoga</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full" /> Grouptrainer & Stepaerobic</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="text-white font-medium block mb-1">Zielgruppen:</strong>
                    Kinder (ab Kindergartenalter), Senioren, körperlich eingeschränkte Menschen sowie Kooperationen mit Krankenkassen, Schulen, Vereinen und Pflegeheimen.
                  </p>
                  <p id="philosophie">
                    <strong className="text-white font-medium block mb-1">Philosophie:</strong>
                    Im Zentrum meiner Arbeit steht immer die <span className="gold-text italic">Individualität</span>. Jeder Mensch bringt eigene Voraussetzungen, Fähigkeiten und Ziele mit. Mein Ziel für Sie ist es, physisch und geistig voranzukommen und mental zu wachsen.
                  </p>
                </div>

                <a href="#kontakt" className="btn-gold-outline w-fit px-8 py-4 text-[10px] font-bold tracking-widest uppercase text-center">
                  Jetzt Kontakt aufnehmen
                </a>
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
               <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                <span className="font-sans font-extrabold tracking-tight">Aktuelles Kursangebot</span> <span className="font-serif italic text-white/70 block md:inline mt-2 md:mt-0 md:pl-3">und Termine</span>
              </h2>
              <p className="text-[#C5A059] text-xl font-bold uppercase tracking-widest max-w-xl mx-auto mb-6">Radebeul und Dresden</p>
              <p className="text-white/80 text-base font-light max-w-2xl mx-auto leading-relaxed">
                Professionelles Faszientraining Radebeul Dresden sowie Seniorensport Radebeul Dresden. Sie bekommen nicht nur ein Training &ndash; Sie bekommen Struktur, Begleitung und nachhaltigen Fortschritt.
              </p>
            </motion.div>

            <div className="text-center mb-12">
              <h3 className="serif text-3xl gold-text text-glow inline-block pb-3 border-b border-white/20">01445 Radebeul Ost:</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schedule.map((dayPlan, idx) => (
                <div key={idx} className="glass-card p-8 rounded-lg">
                  <h3 className="serif text-2xl gold-text mb-6 border-b border-white/10 pb-4 inline-block w-full">{dayPlan.day}</h3>
                  <div className="space-y-4">
                    {dayPlan.classes.length > 0 ? (
                      dayPlan.classes.map((cls, classIdx) => (
                        <div key={classIdx} className="flex justify-between items-start group">
                          <div className="text-white/80 group-hover:text-white transition-colors">{cls.name}</div>
                          <div className="text-[11px] font-mono text-white/40 pt-1 shrink-0 ml-4">{cls.time}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-white/40 italic">Derzeit keine Kurse an diesem Tag.</div>
                    )}
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
                 <span className="font-sans font-extrabold tracking-tight">Investition</span> <span className="font-serif italic text-[#C5A059]">in Sie</span>
               </h2>
               <p className="text-white/50 text-sm font-light max-w-xl mx-auto">Kompakte Preisübersichten für unsere Kernbereiche.</p>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Kurse */}
               <div className="glass-card p-8 border-t-4 border-t-[#C5A059] flex flex-col h-full relative">
                 <div className="serif text-2xl uppercase tracking-widest text-[#C5A059] mb-8 font-light text-center md:text-left">KURSE</div>
                 <div className="flex-1 space-y-4 text-sm mb-10">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold self-center">KURS 10 EINHEITEN</span>
                     <span className="gold-text font-serif italic text-lg text-right">€140</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold self-center">ONLINE-LIVE-KURSE 10 EINHEITEN</span>
                     <span className="gold-text font-serif italic text-lg text-right">€120</span>
                   </div>
                   <div className="flex flex-col border-b border-white/5 pb-3">
                     <div className="flex justify-between">
                       <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold self-center">KK-KURS 10 EINHEITEN</span>
                       <span className="gold-text font-serif italic text-lg text-right">€145</span>
                     </div>
                     <span className="text-white/40 uppercase tracking-widest text-[10px] mt-1">(ERSTATTUNGSFÄHIG)</span>
                   </div>
                 </div>
                 <a href="#kontakt" className="btn-gold-outline w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto block text-center cursor-pointer">Jetzt Buchen</a>
               </div>

               {/* Individuell / Training */}
               <div className="glass-card p-8 border-t-4 border-t-white/30 flex flex-col h-full relative">
                 <div className="serif text-2xl uppercase tracking-widest text-white/80 mb-8 font-light text-center md:text-left">INDIVIDUELL/ TRAINING</div>
                 <div className="flex-1 space-y-4 text-sm mb-10">
                   <div className="flex flex-col border-b border-white/5 pb-3">
                     <div className="flex justify-between">
                       <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold self-center">PERSONALTRAINING - 60 MIN</span>
                       <span className="text-white font-serif italic text-lg text-right">€140</span>
                     </div>
                   </div>
                   <div className="flex flex-col border-b border-white/5 pb-3">
                     <div className="flex justify-between">
                       <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold flex-1 pr-4 mt-1">ANALYSE/ ANAMNESE +<br/>ERNÄHRUNGSBERATUNG-<br/>90 MIN</span>
                       <span className="text-white font-serif italic text-lg text-right mt-1">€190</span>
                     </div>
                   </div>
                 </div>
                 <a href="#kontakt" className="border border-white/30 text-white/80 hover:bg-white hover:text-black transition-colors w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto block text-center cursor-pointer">Anfragen</a>
               </div>

               {/* Gruppen / Firmen */}
               <div className="glass-card p-8 border-t-4 border-t-white/10 flex flex-col h-full relative">
                 <div className="serif text-2xl uppercase tracking-widest text-white/60 mb-8 font-light text-center md:text-left">GRUPPEN/FIRMEN</div>
                 <div className="flex-1 space-y-4 text-sm mb-10">
                   <div className="flex flex-col border-b border-white/5 pb-3">
                     <div className="flex justify-between">
                       <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold self-center">KURS VOR ORT</span>
                       <span className="text-white font-serif italic text-lg text-right">€190</span>
                     </div>
                     <span className="text-white/40 uppercase tracking-widest text-[10px] mt-1">(SCHWERPUNKT FREI<br/>WÄHLBAR)</span>
                   </div>
                   <div className="flex flex-col border-b border-white/5 pb-3">
                     <div className="flex justify-between">
                       <span className="text-white/70 uppercase tracking-widest text-[10px] font-bold self-center">GRUPPENTRAINING</span>
                       <span className="text-white font-serif italic text-lg text-right">€150</span>
                     </div>
                     <span className="text-white/40 uppercase tracking-widest text-[10px] mt-1">(AUCH OUTDOOR)</span>
                   </div>
                 </div>
                 <a href="#kontakt" className="border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto block text-center cursor-pointer">Jetzt Buchen</a>
               </div>
             </div>
          </div>
        </section>

        <section className="bg-transparent py-24 md:py-32 relative z-20 border-t border-white/5" id="bewertungen">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] mb-4 font-bold">Erfahrungen</div>
              <h2 className="text-4xl md:text-6xl text-white mb-4">
                <span className="font-sans font-extrabold tracking-tight">Kunden</span><span className="font-serif italic text-white/70">stimmen</span>
              </h2>
              <p className="text-white/50 text-sm font-light max-w-xl mx-auto">
                Erfahren Sie, was meine Kunden über unsere Zusammenarbeit sagen.
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
            </div>
          </div>
        </section>

        {/* 8. Kontakt & Formular */}
        <section className="py-24 md:py-32 relative z-20" id="kontakt">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Kontakt Info */}
              <div>
                <h2 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
                  <span className="font-serif italic text-[#C5A059] pr-3">Lassen Sie uns</span><br className="md:hidden" /> <span className="font-sans font-extrabold tracking-tight">starten.</span>
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-10 max-w-md">
                  Bereit für eine Veränderung? Melden Sie sich für ein unverbindliches Erstgespräch. Ich freue mich auf Ihre Nachricht.
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

                  <motion.a 
                    href="https://wa.me/4915785513538" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 w-full py-5 px-6 font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 animate-pulse" />
                    <span className="tracking-widest uppercase text-xs">Jetzt per WhatsApp kontaktieren</span>
                  </motion.a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 gold-text" />
                    </div>
                    <div className="pt-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Standorte</div>
                      <div className="text-white/80 text-lg">
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
                       <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Ihr Name</label>
                       <input type="text" className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all" placeholder="Max Mustermann" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Ihre E-Mail</label>
                       <input type="email" className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all" placeholder="mail@beispiel.de" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Betreff (Optional)</label>
                     <input type="text" className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all" placeholder="Anfrage Personaltraining" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/50 pl-1 font-medium">Ihre Nachricht</label>
                     <textarea rows={5} className="w-full bg-black/40 border border-white/10 p-4 rounded text-sm focus:border-[#C5A059] focus:bg-black/60 outline-none text-white transition-all resize-none" placeholder="Wie kann ich Ihnen helfen?"></textarea>
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
              <Link to="/impressum" className="text-xs text-white/40 hover:text-[#C5A059] transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-xs text-white/40 hover:text-[#C5A059] transition-colors">Datenschutz</Link>
              <Link to="/agb" className="text-xs text-white/40 hover:text-[#C5A059] transition-colors">AGB</Link>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Social</span>
              <a href="https://www.instagram.com/_health.and.body_/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 text-xs text-white/40 hover:text-[#C5A059] transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center flex flex-col items-center justify-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Website erstellt von <a href="https://vamela.info" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C5A059] transition-colors font-bold">Vamela</a>
          </p>
        </div>
      </footer>
      {/* Content wrapper end */}

      {/* Service Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden relative glass-card shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#111] via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/20 shrink-0">
                    <div className="gold-text">{selectedService.icon}</div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-1">{selectedService.title}</h2>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">{selectedService.subtitle}</p>
                  </div>
                </div>

                <div className="text-sm font-medium text-white/90 italic mb-6 pl-4 border-l-2 border-[#C5A059]">{selectedService.pitch}</div>
                
                <div className="text-white/60 text-sm font-light space-y-4 mb-8 whitespace-pre-wrap">
                  {selectedService.desc}
                </div>

                <a 
                  href="#kontakt"
                  onClick={() => setSelectedService(null)}
                  className="btn-gold block text-center w-full py-4 text-[10px] font-bold uppercase tracking-widest mt-auto"
                >
                  Jetzt anfragen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
      </Routes>
    </Router>
  );
}

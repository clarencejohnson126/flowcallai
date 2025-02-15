import { WavyBackground } from "./ui/wavy-background";
import { motion } from "framer-motion";
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowRight, Bot, Sparkles, Target, Clock, Users } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToDemo = () => {
    const leistungenSection = document.getElementById('leistungen');
    if (leistungenSection) {
      leistungenSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      text: "1000 Anrufe pro Tag, Wahnsinn!"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      text: "24/7 Verfügbarkeit"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      text: "50% Kostenreduktion"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      text: "Skalierbare Lösung"
    }
  ];

  return (
    <div className="landing-page">
      {/* First Page/Hero Section */}
      <section className="hero-section">
        <div className="waves-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>

        <div className="hero-content">
          {/* Main title */}
          <div className="hero-title">
            <h1>Die Zukunft der</h1>
            <h1>Kundenkommunikation ist hier</h1>
          </div>

          {/* Subtitle/Question */}
          <div className="hero-subtitle">
            <h2>Warum in der Warteschleife</h2>
            <h2>hängen, wenn man die</h2>
            <h2>Zukunft anrufen kann?</h2>
          </div>

          {/* Description */}
          <div className="hero-description">
            <p>Unsere Voice Agents bedienen 24/7 und setzen</p>
            <p>mit Cold Calls neue</p>
            <p>Maßstäbe in jeder Industrie!</p>
          </div>

          {/* CTA text */}
          <div className="hero-cta">
            <p>Steigern Sie Effizienz, optimieren Sie den</p>
            <p>Kundenservice und erhöhen Sie Ihren</p>
          </div>
        </div>
      </section>

      {/* Second Page/Question Section */}
      <section className="question-section">
        <div className="question-content">
          <h2>Warum in der Warteschleife<br />hängen, wenn man die<br />Zukunft anrufen kann?</h2>
          
          <div className="voice-agents">
            <p>Unsere Voice Agents<br />bedienen 24/7 und setzen<br />mit Cold Calls neue<br />Maßstäbe in jeder Industrie!</p>
          </div>

          <div className="cta-text">
            <p>Steigern Sie Effizienz, optimieren Sie den<br />Kundenservice und erhöhen Sie Ihren</p>
          </div>
        </div>
      </section>
    </div>
  );
}
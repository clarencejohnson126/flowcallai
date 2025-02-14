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
    <section className="min-h-screen relative overflow-hidden bg-black">
      <WavyBackground 
        className="h-screen" 
        colors={['#06B6D4', '#9333EA']}
        blur={20}
        speed="fast"
        waveOpacity={0.7}
        waveWidth={80}
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-200">Die Zukunft der Kundenkommunikation ist hier</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 [line-height:2.5]">
              Warum in der Warteschleife hängen, wenn man die Zukunft anrufen kann? Unsere Voice Agents bedienen 24/7 und setzen mit Cold Calls neue Maßstäbe in jeder Industrie!
            </h1>
            
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto [line-height:2.5]">
              Steigern Sie Effizienz, optimieren Sie den Kundenservice und erhöhen Sie Ihren Umsatz – mit modernster Sprachassistenztechnologie.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-2">
                    {benefit.icon}
                  </div>
                  <p className="text-sm text-white/80">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToDemo}
                className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold 
                         hover:bg-purple-50 transition-all duration-300 shadow-lg flex items-center"
              >
                Kostenlose Demo sichern
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#about"
                className="text-white/90 hover:text-white px-8 py-4 rounded-full text-lg font-semibold 
                         transition-colors duration-300 flex items-center"
              >
                Mehr erfahren
              </a>
            </div>
          </motion.div>
        </div>
      </WavyBackground>
    </section>
  );
}
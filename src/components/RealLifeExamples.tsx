import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Stethoscope, Calendar, Star, Phone, ClipboardList } from 'lucide-react';

const RealLifeExamples: React.FC = () => {
  const examples = [
    {
      icon: <Utensils className="w-12 h-12 text-purple-500" />,
      title: "Ristorante Bella Italia",
      subtitle: "Automatisierte Reservierungen & Kundenservice",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6 text-purple-400" />,
          text: "24/7 Reservierungsannahme ohne Wartezeiten"
        },
        {
          icon: <Phone className="w-6 h-6 text-purple-400" />,
          text: "Parallele Bearbeitung mehrerer Anrufe gleichzeitig"
        },
        {
          icon: <Star className="w-6 h-6 text-purple-400" />,
          text: "Proaktive Follow-ups steigern Gästebewertungen um 40%"
        }
      ],
      quote: "Dank FlowCall.AI können wir uns auf das Wesentliche konzentrieren: unsere Gäste vor Ort zu verwöhnen."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-purple-500" />,
      title: "Zahnarztpraxis Dr. Schmidt",
      subtitle: "Digitale Praxisassistentin Lisa",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6 text-purple-400" />,
          text: "Intelligente Terminvergabe und -verwaltung"
        },
        {
          icon: <ClipboardList className="w-6 h-6 text-purple-400" />,
          text: "Telefonische Aufnahme der Patientenhistorie"
        },
        {
          icon: <Phone className="w-6 h-6 text-purple-400" />,
          text: "Automatische Terminerinnerungen & Nachsorge"
        }
      ],
      quote: "Lisa, unser FlowCall.AI Agent, hat unseren Praxisalltag revolutioniert. Die Patienten sind begeistert!"
    }
  ];

  return (
    <section className="py-20 bg-black relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 font-semibold mb-4 block">
            BEISPIELSZENARIEN
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            So könnte sich Ihre Erfolgsgeschichte mit uns anhören
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entdecken Sie anhand dieser fiktiven Beispiele, wie Ihr Unternehmen von einer Zusammenarbeit mit FlowCall.AI profitieren könnte. Diese Szenarien zeigen Ihnen die konkreten Möglichkeiten und Vorteile unserer KI-Lösung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                {example.icon}
                <div>
                  <h3 className="text-2xl font-bold text-white">{example.title}</h3>
                  <p className="text-purple-400">{example.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {example.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-3">
                    {benefit.icon}
                    <p className="text-gray-300">{benefit.text}</p>
                  </div>
                ))}
              </div>

              <blockquote className="text-gray-400 italic border-l-2 border-purple-500 pl-4">
                {example.quote}
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealLifeExamples; 
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Calendar, 
  Globe2, 
  Target, 
  BadgeCheck, 
  TrendingUp,
  Clock,
  BrainCircuit,
  HeadphonesIcon,
  MessageSquare,
  BarChart,
  Users
} from "lucide-react";

export default function SalesAdvantages() {
  const advantages = [
    {
      icon: <PhoneCall className="w-16 h-16 text-purple-500" />,
      title: "1000+ Anrufe pro Tag",
      description: "Maximale Reichweite durch parallele Gespräche rund um die Uhr",
      stats: "30.000+ Anrufe pro Monat"
    },
    {
      icon: <Globe2 className="w-16 h-16 text-purple-500" />,
      title: "Multilinguale Kommunikation",
      description: "Nahtlose Gespräche in über 20 Sprachen und lokalen Dialekten",
      stats: "20+ Sprachen verfügbar"
    },
    {
      icon: <Calendar className="w-16 h-16 text-purple-500" />,
      title: "Automatische Terminbuchung",
      description: "Direkte Integration in Ihren Kalender mit intelligenter Terminfindung",
      stats: "95% Buchungseffizienz"
    },
    {
      icon: <MessageSquare className="w-16 h-16 text-purple-500" />,
      title: "Personalisierte Gespräche",
      description: "Individuelle Gesprächsführung basierend auf Kundenhistorie",
      stats: "90% natürliche Interaktion"
    }
  ];

  const metrics = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
      title: "Kundenzufriedenheit",
      value: "98%",
      description: "positive Bewertungen"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Effizienzsteigerung",
      value: "300%",
      description: "mehr Interaktionen"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Verfügbarkeit",
      value: "24/7",
      description: "kontinuierlicher Service"
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      title: "Lernfähigkeit",
      value: "100%",
      description: "konstante Optimierung"
    }
  ];

  return (
    <section id="sales-advantages" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Maximale Effizienz in der Kundenkommunikation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionieren Sie Ihre Kundeninteraktion mit KI-gestützten Voice Agents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {advantage.description}
                  </p>
                  <div className="inline-block bg-purple-500/10 px-4 py-2 rounded-full">
                    <span className="text-purple-400 font-semibold">
                      {advantage.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 p-6 rounded-xl border border-purple-500/20 text-center"
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">
                {metric.value}
              </h4>
              <p className="text-sm text-gray-400">
                {metric.title}
              </p>
              <p className="text-xs text-purple-400 mt-1">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
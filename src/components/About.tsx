import { motion } from "framer-motion";
import { Mic2, Bot, Clock, LineChart, Users, Zap, Brain, Target, PhoneIncoming, PhoneOutgoing } from "lucide-react";
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <PhoneIncoming className="w-8 h-8 text-green-500" />,
      title: t('about.features.inbound.title'),
      description: t('about.features.inbound.description')
    },
    {
      icon: <PhoneOutgoing className="w-8 h-8 text-green-500" />,
      title: t('about.features.outbound.title'),
      description: t('about.features.outbound.description')
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-500" />,
      title: t('about.features.costs.title'),
      description: t('about.features.costs.description')
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: t('about.features.scalable.title'),
      description: t('about.features.scalable.description')
    }
  ];

  const painPoints = [
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: t('about.challenges.availability.title'),
      description: t('about.challenges.availability.description')
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: t('about.challenges.costs.title'),
      description: t('about.challenges.costs.description')
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: t('about.challenges.scalability.title'),
      description: t('about.challenges.scalability.description')
    },
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: t('about.challenges.quality.title'),
      description: t('about.challenges.quality.description')
    }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Removed the rendering of the 'about.title' to delete the text. */}
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-500/20"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('about.challenges.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-500/20"
              >
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-300">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import { motion } from "framer-motion";
import { 
  Brain, 
  Clock, 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  Shield, 
  Languages, 
  LineChart 
} from "lucide-react";
import { useLanguage } from '@/lib/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.conversation.title'),
      description: t('benefits.items.conversation.description')
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.availability.title'),
      description: t('benefits.items.availability.description')
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.performance.title'),
      description: t('benefits.items.performance.description')
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.personalization.title'),
      description: t('benefits.items.personalization.description')
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.emotion.title'),
      description: t('benefits.items.emotion.description')
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.security.title'),
      description: t('benefits.items.security.description')
    },
    {
      icon: <Languages className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.multilingual.title'),
      description: t('benefits.items.multilingual.description')
    },
    {
      icon: <LineChart className="w-12 h-12 text-green-500" />,
      title: t('benefits.items.optimization.title'),
      description: t('benefits.items.optimization.description')
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-black to-green-950/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20 hover:border-green-500/40 group"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
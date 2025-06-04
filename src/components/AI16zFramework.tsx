import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function AI16zFramework() {
  const benefits = [
    "Hochmoderne Multi-Agent-Simulationstechnologie",
    "Nahtlose Integration von Voice- und Chat-Funktionen",
    "Fortschrittliches Konversationsgedächtnis und Dokumentenverarbeitung",
    "Unterstützung für mehrere Sprachen und Dialekte",
    "Skalierbare Architektur für wachsende Anforderungen"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-green-500 font-semibold mb-4 block">
            POWERED BY AI16Z
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Zukunftsweisende KI-Technologie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            FlowCall.AI nutzt das außergewöhnliche AI16z Framework, um maßgeschneiderte Voice Agents zu entwickeln, die neue Maßstäbe in der KI-gestützten Kommunikation setzen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/image/eliza ai16z image.png" 
              alt="AI16z Framework" 
              className="rounded-2xl shadow-2xl border border-green-500/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-gradient-to-br from-green-900/20 to-black p-4 rounded-lg border border-green-500/20"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
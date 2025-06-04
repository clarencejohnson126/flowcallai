"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

export default function Hero() {
  const features = [
    { icon: "📞", text: "1000 Anrufe pro Tag, Wahnsinn!" },
    { icon: "⏰", text: "24/7 Verfügbarkeit" },
    { icon: "💰", text: "50% Kostenreduktion" },
    { icon: "📈", text: "Skalierbare Lösung" },
  ];

  return (
    <WavyBackground
      className="min-h-screen flex items-center justify-center"
      colors={["#9333EA", "#06B6D4"]}
      blur={10}
      speed="slow"
      waveOpacity={0.3}
      backgroundFill="black"
    >
      <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col items-center pt-56">
        {/* Purple badge at top */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-purple-900/60 rounded-full px-6 py-2 mb-8 mt-8"
        >
          <p className="text-white text-sm">Die Zukunft der Kundenkommunikation ist hier</p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl text-white font-bold text-center max-w-4xl mb-8"
        >
          Warum in der Warteschleife hängen, wenn man die Zukunft anrufen kann? Unsere Voice Agents bedienen 24/7 und setzen mit Cold Calls neue Maßstäbe in jeder Industrie!
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl text-center max-w-3xl mb-12"
        >
          Steigern Sie Effizienz, optimieren Sie den Kundenservice und erhöhen Sie Ihren Umsatz – mit modernster Sprachassistenztechnologie.
        </motion.p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-4xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <div className="flex justify-center mb-2">
                <span className="text-purple-600 text-2xl">{feature.icon}</span>
              </div>
              <p className="text-white text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
          >
            Kostenlose Demo sichern →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-8 py-3 hover:text-purple-200 transition-colors"
          >
            Mehr erfahren
          </motion.button>
        </div>
      </div>
    </WavyBackground>
  );
}
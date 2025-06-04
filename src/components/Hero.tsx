"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Hero() {
  return (
    <WavyBackground 
      className="min-h-screen flex items-center justify-center"
      colors={["#064e3b", "#22c55e"]}
      blur={10}
      speed="slow"
      waveOpacity={0.3}
      backgroundFill="black"
    >
      <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col items-center pt-56">
        {/* Purple badge at top */}
        <div className="bg-green-900/60 rounded-full px-6 py-2 mb-8 mt-8">
          <p className="text-white text-sm">Die Zukunft der Kundenkommunikation ist hier</p>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl text-white font-bold text-center max-w-4xl mb-8">
          Warum in der Warteschleife hängen, wenn man die Zukunft anrufen kann? Unsere Voice Agents bedienen 24/7 und setzen mit Cold Calls neue Maßstäbe in jeder Industrie!
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-lg md:text-xl text-center max-w-3xl mb-12">
          Steigern Sie Effizienz, optimieren Sie den Kundenservice und erhöhen Sie Ihren Umsatz – mit modernster Sprachassistenztechnologie.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-4xl">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <span className="text-green-600 text-2xl">📞</span>
            </div>
            <p className="text-white text-sm">1000 Anrufe pro Tag, Wahnsinn!</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <span className="text-green-600 text-2xl">⏰</span>
            </div>
            <p className="text-white text-sm">24/7 Verfügbarkeit</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <span className="text-green-600 text-2xl">💰</span>
            </div>
            <p className="text-white text-sm">50% Kostenreduktion</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <span className="text-green-600 text-2xl">📈</span>
            </div>
            <p className="text-white text-sm">Skalierbare Lösung</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
            Kostenlose Demo sichern →
          </button>
          <button className="text-white px-8 py-3 hover:text-green-200 transition-colors">
            Mehr erfahren
          </button>
        </div>
      </div>
    </WavyBackground>
  );
}
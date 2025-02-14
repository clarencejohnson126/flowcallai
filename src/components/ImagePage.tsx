import React from 'react';

export default function ImagePage() {
  return (
    <div id="about" className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="text-center text-white mb-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-2">Was ist FlowCall.AI?</h2>
        <p className="text-lg">FlowCall.AI ist eine innovative Plattform für KI-gestützte Voice Agents. Unsere Lösung unterstützt sowohl eingehende Kundenanfragen als auch ausgehende Vertriebsgespräche – rund um die Uhr, in mehreren Sprachen und mit natürlicher Gesprächsführung.</p>
      </div>
      <img src="/image/Flow Call AI Image.jpg" alt="Flow Call AI - We save you time" className="max-w-full h-auto" />
    </div>
  );
} 
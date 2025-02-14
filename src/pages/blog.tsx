import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20">
            <h1 className="text-4xl font-bold text-white mb-8">KI-Voice-Agents: Revolution im Kundenservice und Vertrieb</h1>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Die Zukunft der Kommunikation</h2>
              <p className="text-gray-300 mb-4">
                Wie KI-gestützte Voice Agents den Kundenservice und Vertrieb revolutionieren...
              </p>
              {/* Add more content from the PDF */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AGB() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/20 to-black p-8 rounded-2xl border border-green-500/20">
            <h1 className="text-4xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Geltungsbereich</h2>
              <p className="text-gray-300 mb-4">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen FlowCall.AI und unseren Kunden...
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

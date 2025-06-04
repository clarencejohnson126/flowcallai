import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/20 to-black p-8 rounded-2xl border border-green-500/20">
            <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
              <p className="text-gray-300 mb-4">
                Allgemeine Hinweise
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen...
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

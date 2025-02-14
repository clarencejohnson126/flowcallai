import { useState } from 'react';
import { motion } from "framer-motion";
import { Play, Pause, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { VOICES, generateSpeech } from '@/lib/elevenlabs';

const demos = [
    {
      title: "Kundenservice: Produktberatung",
      description: "Erleben Sie, wie unsere Voice Agentin Sarah Kunden kompetent und freundlich bei der Produktauswahl berät.",
      agentVoiceId: VOICES.SARAH,
      customerVoiceId: VOICES.CUSTOMER_MALE,
      conversation: [
        { speaker: 'agent', name: 'Sarah', text: 'Herzlich willkommen bei FlowCall! Hier ist Sarah, ich freue mich sehr, dass ich Sie heute beraten darf! Wie kann ich Ihnen helfen?' },
        { speaker: 'customer', name: 'Herr Weber', text: 'Hallo Sarah, Thomas Weber hier. Ich interessiere mich für Ihre Voice Agent Lösung. Wir sind ein mittelständisches Unternehmen und suchen nach Möglichkeiten, unseren Kundenservice zu optimieren.' },
        { speaker: 'agent', name: 'Sarah', text: 'Das freut mich wirklich sehr zu hören, Herr Weber! Ihr Interesse an unserer Lösung zeigt, dass Sie zukunftsorientiert denken. Lassen Sie uns gemeinsam herausfinden, wie wir Ihren Kundenservice auf das nächste Level heben können! Wie viele Kundenanfragen bearbeiten Sie denn derzeit täglich?' },
        { speaker: 'customer', name: 'Herr Weber', text: 'Wir haben etwa 200 bis 300 Anrufe pro Tag, aber besonders in Stoßzeiten und außerhalb der Geschäftszeiten können wir viele davon nicht rechtzeitig bearbeiten.' },
        { speaker: 'agent', name: 'Sarah', text: 'Oh, das ist tatsächlich eine Herausforderung, die ich sehr gut nachvollziehen kann! Aber keine Sorge - genau dafür haben wir die perfekte Lösung! Unsere KI-Voice Agents arbeiten rund um die Uhr und können Hunderte von Anrufen gleichzeitig bearbeiten. Das Beste daran: Die Qualität bleibt konstant hoch! Wäre es für Sie interessant zu erfahren, wie andere Unternehmen damit ihre Erreichbarkeit um 300% steigern konnten?' }
      ]
    },
    {
      title: "Support: Technische Hilfe",
      description: "Hören Sie, wie unsere Voice Agentin Anna technische Probleme effizient löst.",
      agentVoiceId: VOICES.ANNA,
      customerVoiceId: VOICES.CUSTOMER_FEMALE,
      conversation: [
        { speaker: 'agent', name: 'Anna', text: 'Technischer Support, Anna hier. Wie kann ich Ihnen heute weiterhelfen?' },
        { speaker: 'customer', name: 'Frau Schmidt', text: 'Hallo Anna, Julia Schmidt von der Marketing Agentur Digital Plus. Ich habe Probleme bei der Integration Ihrer Voice Agents in unser bestehendes CRM-System.' },
        { speaker: 'agent', name: 'Anna', text: 'Danke für Ihre Anfrage, Frau Schmidt. Das bekommen wir gemeinsam auf jeden Fall hin! Welches CRM-System nutzen Sie denn aktuell?' },
        { speaker: 'customer', name: 'Frau Schmidt', text: 'Wir verwenden Salesforce Enterprise Edition. Die API-Schlüssel sind bereits konfiguriert, aber die Anrufdaten werden nicht korrekt synchronisiert.' },
        { speaker: 'agent', name: 'Anna', text: 'Verstanden, Frau Schmidt. Das ist ein häufiges Thema, das wir schnell lösen können. Lassen Sie uns das Schritt für Schritt durchgehen. Können Sie bitte das Integrationsmenü in Salesforce öffnen? Ich führe Sie durch die notwendigen Einstellungen.' }
      ]
    },
    {
      title: "Vertrieb: Bedarfsanalyse",
      description: "Überzeugen Sie sich von der natürlichen Gesprächsführung bei der Kundenberatung.",
      agentVoiceId: VOICES.MICHAEL,
      customerVoiceId: VOICES.CUSTOMER_FEMALE,
      conversation: [
        { speaker: 'agent', name: 'Michael', text: 'Guten Tag, hier ist Michael von FlowCall. Ich rufe an, weil wir spannende Neuigkeiten im Bereich KI-gestützter Kommunikation haben. Ist das ein guter Zeitpunkt für Sie?' },
        { speaker: 'customer', name: 'Frau Müller', text: 'Ja, tatsächlich kommt Ihr Anruf genau richtig. Wir suchen gerade nach Möglichkeiten, unsere Vertriebsprozesse zu digitalisieren. Besonders die Erstansprache von Kunden bindet viele Ressourcen.' },
        { speaker: 'agent', name: 'Michael', text: 'Das freut mich sehr zu hören, Frau Müller! Unsere KI-Voice Agents sind genau dafür entwickelt worden. Sie können qualifizierte Erstkontakte herstellen und wertvolle Leads generieren. Wie viele Vertriebsmitarbeiter beschäftigen Sie aktuell in der Kaltakquise?' },
        { speaker: 'customer', name: 'Frau Müller', text: 'Momentan haben wir ein Team von fünf Mitarbeitern, die sich ausschließlich um die Neukundengewinnung kümmern. Aber die Conversion-Rate könnte besser sein.' },
        { speaker: 'agent', name: 'Michael', text: 'Das kann ich gut nachvollziehen. Mit unseren Voice Agents können Sie die Anzahl der Erstkontakte verdreifachen und gleichzeitig Ihr Team für die wichtige Beratung qualifizierter Leads einsetzen. Darf ich Ihnen von einigen unserer Erfolgsgeschichten in ähnlichen Unternehmen erzählen?' }
      ]
    }
];

export default function Demo() {
  const [expandedTranscript, setExpandedTranscript] = useState<number | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [currentSource, setCurrentSource] = useState<AudioBufferSourceNode | null>(null);

  const toggleTranscript = (index: number) => {
    setExpandedTranscript(expandedTranscript === index ? null : index);
  };

  const stopCurrentPlayback = () => {
    if (currentSource) {
      currentSource.stop();
      setCurrentSource(null);
    }
    setCurrentlyPlaying(null);
  };

  const playDemo = async (index: number) => {
    try {
      if (currentlyPlaying === index) {
        stopCurrentPlayback();
        return;
      }

      stopCurrentPlayback();
      setIsLoading(true);
      setCurrentlyPlaying(index);

      if (!audioContext) {
        setAudioContext(new AudioContext());
      }

      const demo = demos[index];
      const conversation = demo.conversation;
      
      for (const line of conversation) {
        const voiceId = line.speaker === 'agent' ? demo.agentVoiceId : demo.customerVoiceId;
        const audioData = await generateSpeech(line.text, voiceId);
        
        if (!audioContext) continue;

        const audioBuffer = await audioContext.decodeAudioData(audioData);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        setCurrentSource(source);

        await new Promise((resolve) => {
          source.onended = resolve;
          source.start();
        });
      }

      setCurrentlyPlaying(null);
    } catch (error) {
      console.error('Error playing demo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="leistungen" className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Erleben Sie unsere Voice Agents
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hören Sie selbst, wie natürlich und effektiv unsere KI-gestützten Voice Agents 
            mit Kunden interagieren - von der Beratung bis zum Support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {demo.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {demo.description}
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => playDemo(index)}
                  disabled={isLoading && currentlyPlaying !== index}
                  className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors disabled:opacity-50"
                >
                  {isLoading && currentlyPlaying === index ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : currentlyPlaying === index ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                  <span>
                    {isLoading && currentlyPlaying === index
                      ? 'Lade Demo...'
                      : currentlyPlaying === index
                      ? 'Demo stoppen'
                      : 'Demo anhören'}
                  </span>
                </button>
                <button
                  onClick={() => toggleTranscript(index)}
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {expandedTranscript === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                  <span>Transkript {expandedTranscript === index ? 'ausblenden' : 'einblenden'}</span>
                </button>
                {expandedTranscript === index && (
                  <div className="mt-4 space-y-4 text-sm">
                    {demo.conversation.map((line, lineIndex) => (
                      <div key={lineIndex} className="space-y-1">
                        <div className={`font-semibold ${
                          line.speaker === 'agent' ? 'text-purple-400' : 'text-cyan-400'
                        }`}>
                          {line.name}:
                        </div>
                        <div className="text-gray-300">
                          {line.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
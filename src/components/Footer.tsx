import { Phone, Mail, Github, ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    emailjs: any;
  }
}

interface ExpandableContentProps {
  title: string;
  content: string;
}

function ExpandableContent({ title, content }: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-purple-500/10 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-2 text-left text-gray-400 hover:text-purple-400 transition-colors"
      >
        <span>{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isExpanded && (
        <div className="py-4 px-4 text-sm text-gray-400 bg-black/30 rounded-lg mb-2">
          <p className="whitespace-pre-line">{content}</p>
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Initialize EmailJS
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs.init("wesUOHlNVPimzU3kp"); // EmailJS public key
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setNewsletterStatus("loading");
    try {
      const templateParams = {
        to_email: "thinkbig@rebelz-ai.com",
        subscriber_email: email,
        message: `Neue Newsletter-Anmeldung von: ${email}\nZeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}`,
      };

      await window.emailjs.send(
        'service_l0ogw4u',  // EmailJS service ID
        'template_24pmxtn', // EmailJS template ID
        templateParams
      );

      setNewsletterStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setNewsletterStatus("error");
    }
  };

  const legalContent = {
    datenschutz: `Datenschutzerklärung

1. Datenschutz auf einen Blick
Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.

2. Datenerfassung auf unserer Website
Wir erfassen Daten sparsam und nur für die vereinbarten Zwecke. Ihre Privatsphäre hat für uns höchste Priorität.

3. Wie erfassen wir Ihre Daten?
- Beim Besuch der Website
- Bei der Nutzung unseres Kontaktformulars
- Bei der Newsletter-Anmeldung
- Bei der Nutzung unserer Voice-Agent-Dienste

4. Wofür nutzen wir Ihre Daten?
- Zur Bereitstellung unserer Dienstleistungen
- Zur Kommunikation mit Ihnen
- Zur Verbesserung unserer Services
- Zur Erfüllung gesetzlicher Verpflichtungen

5. Ihre Rechte
Sie haben jederzeit das Recht:
- Auskunft über Ihre gespeicherten Daten zu erhalten
- Diese berichtigen oder löschen zu lassen
- Die Verarbeitung einschränken zu lassen
- Widerspruch gegen die Verarbeitung einzulegen
- Datenübertragbarkeit zu verlangen

6. Datensicherheit
Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unberechtigten Zugriff zu schützen.

7. Kontakt
Bei Fragen zum Datenschutz erreichen Sie uns unter:
info@flowcall.ai`,

    agb: `Allgemeine Geschäftsbedingungen (AGB)

1. Geltungsbereich
Diese AGB gelten für alle Geschäftsbeziehungen zwischen FlowCall.AI und unseren Kunden.

2. Vertragsgegenstand
- KI-gestützte Voice-Agent-Dienste
- Automatisierte Kommunikationslösungen
- Kundenservice-Automatisierung
- Vertriebsautomatisierung

3. Vertragsschluss
Der Vertrag kommt durch schriftliche Bestätigung oder Freischaltung der Dienste zustande.

4. Leistungsumfang
- 24/7 Verfügbarkeit der Voice-Agents
- Mehrsprachige Kommunikation
- Anpassbare Gesprächsszenarien
- Detaillierte Analysen und Reporting

5. Preise und Zahlungsbedingungen
- Monatliche oder jährliche Abrechnung
- 14 Tage Zahlungsziel
- Preise zzgl. gesetzlicher MwSt.

6. Laufzeit und Kündigung
- Mindestlaufzeit: 12 Monate
- Kündigungsfrist: 3 Monate zum Laufzeitende
- Automatische Verlängerung um 12 Monate

7. Datenschutz und Vertraulichkeit
Wir verpflichten uns zur Einhaltung aller datenschutzrechtlichen Bestimmungen.

8. Haftung
Wir haften für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung wesentlicher Vertragspflichten.

9. Schlussbestimmungen
- Erfüllungsort: Mannheim
- Gerichtsstand: Mannheim
- Es gilt deutsches Recht`,

    impressum: `Impressum
Impressum gemäß § 5 TMG

FlowCall.AI
George-Washington-Str. 219, 68309 Mannheim, Deutschland

Vertreten durch:
Clarence Johnson (Geschäftsführer)

Kontakt:
E-Mail: info@flowcall.ai
Telefon: +49 1621811123

Identifikationsnummer:
63480592276

EU-Streitschlichtung:
https://ec.europa.eu/consumers/odr/`,

    blog: `Aktuelle Einblicke in die KI-Voice-Revolution

1. KI-Voice-Agents: Die Zukunft der Kommunikation
- Wie unsere Technologie den Kundenservice revolutioniert
- Neueste Entwicklungen in der KI-Spracherkennung
- Integration von Emotionserkennung in Voice-Agents
- Best Practices für den Einsatz von KI im Kundenservice

2. Erfolgsgeschichten
- Wie das Restaurant "Bella Italia" seine Reservierungen automatisiert
- Die digitale Transformation einer Zahnarztpraxis
- Effizienzsteigerung im Vertrieb durch KI-Voice-Agents
- Kundenzufriedenheit steigern mit 24/7 Service

3. Technologie-Updates
- Neue Features und Verbesserungen
- Integration mit bestehenden Systemen
- Mehrsprachige Unterstützung
- Analytik und Reporting-Funktionen

4. Brancheneinblicke
- Trends in der KI-gestützten Kommunikation
- Zukunft der Kundenservice-Automation
- Regulatorische Entwicklungen
- Marktanalysen und Prognosen`
  };

  return (
    <footer className="bg-black border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                FlowCall.AI
              </span>
            </div>
            <p className="text-gray-400">
              KI-gestützte Voice Agents für Inbound und Outbound Kommunikation
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <ExpandableContent title="Datenschutz" content={legalContent.datenschutz} />
              <ExpandableContent title="AGB" content={legalContent.agb} />
              <ExpandableContent title="Impressum" content={legalContent.impressum} />
              <ExpandableContent title="Blog" content={legalContent.blog} />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/rebelz_ai"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://github.com/elizaOS/eliza/tree/main/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonniere unseren Newsletter für Updates und Erfolgsgeschichten
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail-Adresse"
                  className="flex-1 bg-black/50 border border-purple-500/20 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
                <button 
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {newsletterStatus === "loading" ? "..." : "Abonnieren"}
                </button>
              </div>
              {newsletterStatus === "success" && (
                <p className="text-green-500 text-sm">Vielen Dank für deine Anmeldung!</p>
              )}
              {newsletterStatus === "error" && (
                <p className="text-red-500 text-sm">Ein Fehler ist aufgetreten. Bitte versuche es später erneut.</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="text-center text-gray-400 pt-8 border-t border-purple-500/20">
          <p>&copy; {new Date().getFullYear()} FlowCall.AI. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
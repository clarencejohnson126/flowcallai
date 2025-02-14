import { motion } from "framer-motion";
import { useLanguage } from '@/lib/LanguageContext';
import { Send, Calendar, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState("");
  
  useEffect(() => {
    // Initialize EmailJS if not already initialized
    if (!window.emailjs) {
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
    }
  }, []);

  const benefits = [
    {
      icon: <Calendar className="w-12 h-12 text-purple-500" />,
      title: "Kostenlose Demo",
      description: "Erleben Sie live, wie unsere Voice Agents Ihre Kommunikation revolutionieren"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-purple-500" />,
      title: "Unverbindlich",
      description: "Keine versteckten Kosten oder Verpflichtungen"
    },
    {
      icon: <ArrowRight className="w-12 h-12 text-purple-500" />,
      title: "Schneller Start",
      description: "In wenigen Tagen einsatzbereit"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const templateParams = {
        to_email: "thinkbig@rebelz-ai.com",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message || "Keine Nachricht angegeben",
        timestamp: new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })
      };

      await window.emailjs.send(
        'service_l0ogw4u',  // EmailJS service ID
        'template_4s05sfl', // EmailJS template ID for contact form
        templateParams
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20"
          >
            <CheckCircle className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ihre Anfrage ist eingegangen!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Unsere KI arbeitet bereits – ohne Kaffee, ohne Pausen, nur pure Effizienz. ☕🚀
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              Neues Formular
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 font-semibold mb-4 block">
            STARTEN SIE JETZT
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Bereit, die Kommunikation zu revolutionieren?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vereinbaren Sie jetzt Ihre kostenlose Demo und erfahren Sie, wie FlowCall.AI 
            Ihr Unternehmen auf das nächste Level hebt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20 text-center"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-200">{error}</p>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.name')}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.email')}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.company')}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.phone')}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Wie können wir Ihnen helfen? (Optional)"
                rows={4}
                className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              * Pflichtfelder. Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span>Wird gesendet...</span>
                  <Send className="w-5 h-5 animate-pulse" />
                </>
              ) : (
                <>
                  <span>Kostenlose Demo sichern</span>
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as 'de' | 'en';
    setLanguage(newLanguage);
  };

  const menuItems = [
    { id: 'about', label: 'Was ist FlowCall.AI?' },
    { id: 'benefits', label: 'Vorteile' },
    { id: 'sales-advantages', label: 'Leistungen' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Phone className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
              FlowCall.AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 border-l pl-4 border-green-500/20">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-green-500" />
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="bg-transparent text-gray-300 hover:text-green-400 transition-colors focus:outline-none cursor-pointer"
                >
                  <option value="de">Deutsch</option>
                  <option value="en">English</option>
                </select>
              </div>
              <button
                onClick={() => scrollToSection('sales-advantages')}
                className="bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Demo anhören
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-500" />
              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-transparent text-gray-300 hover:text-green-400 transition-colors focus:outline-none cursor-pointer"
              >
                <option value="de">DE</option>
                <option value="en">EN</option>
              </select>
            </div>
            <button
              className="text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 px-4 text-gray-300 hover:bg-green-500/10 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('sales-advantages')}
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Demo anhören
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
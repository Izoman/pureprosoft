import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import i18n from 'i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language); // Track current language

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0]; // Get browser language
    const initialLanguage = ['en', 'nl'].includes(browserLanguage) ? browserLanguage : 'en'; // Default to 'en' if unsupported
    i18n.changeLanguage(initialLanguage);
    setLanguage(initialLanguage);
  }, []); // Run once on component mount

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'nl' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: t("about.title"), href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Expertise", href: "/expertise" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Pure Pro Soft" width={75} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.href}
              className="text-purpro-700 hover:text-primary font-medium transition-colors"
              onClick={() => scrollTo({top: 0, behavior: 'smooth'})}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="text-purpro-700 hover:text-primary font-medium transition-colors"
          >
            {language === 'en' ? 'NL' : 'EN'}
          </button>

          <Button asChild>
            <Link to="/contact" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purpro-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className="text-purpro-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollTo({top: 0, behavior: 'smooth'});
                }}
              >
                {link.text}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => {
                  setIsMenuOpen(false);
                  scrollTo({top: 0, behavior: 'smooth'});
                }}>Get In Touch</Link>
            </Button>
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="text-purpro-700 hover:text-primary font-medium py-2 transition-colors"
            >
              {language === 'en' ? 'NL' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Expertise", href: "/expertise" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
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

        <div className="hidden md:block">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

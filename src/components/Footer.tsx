
import { Link } from 'react-router-dom';
import { 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon, 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purpro-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src="/logo.svg" alt="Pure Pro Soft" width={150} height={100} />
            <p className="text-gray-300 max-w-xs">
              Delivering clarity, integrity, and excellence in every software project we undertake.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/pure-pro-soft" className="text-gray-300 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Services</Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Expertise</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Custom Software Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Cloud Consulting & Migration</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Mobile & Web Application</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>End-to-End Test Automation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>             
              <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MailIcon size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300"><a href="mailto:info@pureprosoft.com">info@pureprosoft.com</a></span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPinIcon size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Paal, Belgium
                </span>
              </li>
            </ul>
            <br></br>
            <div className="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="https://www.pureprosoft.com/" data-a2a-title="Pure Pro Soft">
                <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a className="a2a_button_facebook"></a>
                <a className="a2a_button_linkedin"></a>
                <a className="a2a_button_reddit"></a>
                <a className="a2a_button_whatsapp"></a>
                <a className="a2a_button_x"></a>
                <a className="a2a_button_blogger"></a>
              </div> 
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} PureProSoft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

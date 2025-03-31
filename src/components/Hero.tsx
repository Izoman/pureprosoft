import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const Hero = () => {
  return (
    <div className="relative mt-20 flex items-center">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purpro-900/90 to-purpro-800/90 z-0"
        style={{
          backgroundImage: 'url(neon.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay'
        }}
      />

      <div className="container mx-auto px-4 z-10 py-20" style={{background: '#000000b3'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/services">
                {t('hero.exploreServices')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contact" className="flex items-center gap-2" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>
                {t('hero.contactUs')} <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

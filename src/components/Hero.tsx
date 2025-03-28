
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purpro-900/90 to-purpro-800/90 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay'
        }}
      />

      <div className="container mx-auto px-4 z-10 py-20" style={{background: '#000000b3'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Hub for Innovation <br /> and Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Delivering clarity, integrity, and excellence in every software project we undertake.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

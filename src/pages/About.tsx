
import { Shield, Trophy, Heart, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-purpro-900 text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pure Pro Soft</h1>
            <p className="text-xl text-blue-100">
              A team of passionate software experts committed to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-purpro-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  At Pure Pro Soft, we are committed to delivering clarity, integrity, and excellence in every project we undertake. Our name reflects our mission:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-purpro-800">Pure:</span> We prioritize authenticity, trustworthiness, and a transparent approach to software development.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-purpro-800">Pro:</span> With expertise and professionalism at the core, we provide cutting-edge software solutions and consultancy services tailored to your needs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-purpro-800">Soft:</span> Software is our passion and specialty, driving us to create innovative and reliable solutions that empower businesses to thrive.
                    </div>
                  </li>
                </ul>
                <p className="text-gray-600">
                  We specialize in developing high-quality, customized software solutions while offering expert consultancy to help businesses achieve their goals. At Pure Pro Soft, your success is our priority.
                </p>
              </div>
              <div className="relative">
                <div 
                  className="rounded-lg shadow-xl overflow-hidden"
                  style={{
                    backgroundImage: 'url(pro.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading">
              Our core values guide everything we do at Pure Pro Soft.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and strong moral principles in all our interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in all our work, constantly improving and innovating.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnerships to achieve common goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">Passion</h3>
              <p className="text-gray-600">
                We are deeply committed to our work and enthusiastic about creating impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div 
                  className="rounded-lg shadow-xl overflow-hidden"
                  style={{
                    backgroundImage: 'url(programming.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px'
                  }}
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-semibold text-purpro-800 mb-6">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  We strive to create innovative, scalable, and reliable software solutions that help businesses grow and succeed in the digital age. With a user-centric approach and a focus on cutting-edge technologies, we ensure that our solutions remain ahead of the curve.
                </p>
                <p className="text-gray-600 mb-6">
                  Our vision is to be recognized as a trusted partner for businesses seeking digital transformation, helping them navigate the complexities of technology while delivering exceptional value and results.
                </p>
                <Button asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purpro-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            At Pure Pro Soft, we are more than just a software company – we are your trusted partner in digital transformation.
          </p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

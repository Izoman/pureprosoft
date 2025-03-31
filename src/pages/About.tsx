import { Shield, Trophy, Heart, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-purpro-900 text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-blue-100">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-purpro-800 mb-6">{t('about.story')}</h2>
                <p className="text-gray-600 mb-4">{t('about.storyDescription')}</p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-purpro-800">{t('about.pure')}</span> {t('about.pureDescription')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-purpro-800">{t('about.pro')}</span> {t('about.proDescription')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-purpro-800">{t('about.soft')}</span> {t('about.softDescription')}
                    </div>
                  </li>
                </ul>
                <p className="text-gray-600">{t('about.priority')}</p>
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
            <h2 className="section-heading">{t('about.values')}</h2>
            <p className="section-subheading">{t('about.valuesDescription')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('about.integrity')}</h3>
              <p className="text-gray-600">{t('about.integrityDescription')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('about.excellence')}</h3>
              <p className="text-gray-600">{t('about.excellenceDescription')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('about.collaboration')}</h3>
              <p className="text-gray-600">{t('about.collaborationDescription')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('about.passion')}</h3>
              <p className="text-gray-600">{t('about.passionDescription')}</p>
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
                <h2 className="text-3xl font-semibold text-purpro-800 mb-6">{t('about.vision')}</h2>
                <p className="text-gray-600 mb-4">{t('about.visionDescription1')}</p>
                <p className="text-gray-600 mb-6">{t('about.visionDescription2')}</p>
                <Button asChild>
                  <Link to="/services">{t('about.exploreServices')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purpro-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.ctaTitle')}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">{t('about.ctaSubtitle')}</p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

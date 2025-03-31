import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { t } from 'i18next';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-purpro-900 text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-blue-100">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold text-purpro-800 mb-6">{t('contact.getInTouch')}</h2>
                <p className="text-gray-600 mb-8">{t('contact.getInTouchDescription')}</p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-purpro-800 text-lg">{t('contact.email')}</h3>
                      <p className="text-gray-600"><a href="mailto:info@pureprosoft.com">info@pureprosoft.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-purpro-800 text-lg">{t('contact.office')}</h3>
                      <p className="text-gray-600">
                        Paal, Belgium
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-medium text-purpro-800 text-lg mb-4">{t('contact.officeHours')}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('contact.mondayFriday')}</span>
                      <span className="text-gray-800 font-medium">9:00 - 17:00 CEST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('contact.saturday')}</span>
                      <span className="text-gray-800 font-medium">10:00 - 14:00 CEST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('contact.sunday')}</span>
                      <span className="text-gray-800 font-medium">{t('contact.closed')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

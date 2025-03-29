
import { ArrowRight, Code, Layers, Shield, CloudLightning, FileCheck, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ExpertiseCard from '@/components/ExpertiseCard';
import CertificationCard from '@/components/CertificationCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  // Services data
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailor-made solutions to meet your specific business needs and requirements.",
      icon: Code,
      link: "/services"
    },
    {
      title: "Cloud Consulting & Migration",
      description: "Expert guidance and seamless transition to AWS or Azure cloud platforms.",
      icon: CloudLightning,
      link: "/services"
    },
    {
      title: "Mobile & Web Application Development",
      description: "Creating engaging digital experiences for your customers across all platforms.",
      icon: Layers,
      link: "/services"
    },
    {
      title: "End-to-End Test Automation",
      description: "Enhancing software quality through comprehensive automated testing.",
      icon: FileCheck,
      link: "/services"
    }
  ];

  // Expertise data
  const expertise = [
    {
      title: ".NET & Blazor",
      description: "Robust backend and UI development for scalable applications.",
      icon: Code
    },
    {
      title: "WPF",
      description: "Advanced desktop application development.",
      icon: Layers
    },
    {
      title: "Angular & TypeScript",
      description: "Frontend development for dynamic and responsive web applications.",
      icon: Code
    },
    {
      title: "Azure & AWS",
      description: "Cloud solutions tailored for scalability, security, and performance.",
      icon: CloudLightning
    },
    {
      title: "Flutter, Android & iOS",
      description: "Cross-platform and native mobile development for intuitive user experiences.",
      icon: Layers
    },
    {
      title: "E2E Test Automation",
      description: "Ensuring software reliability and efficiency through automated testing.",
      icon: FileCheck
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Pure Pro Soft delivered an exceptional software solution that streamlined our operations and significantly improved our efficiency.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate Inc.",
      rating: 5
    },
    {
      quote: "Their expertise in cloud migration saved us countless hours and helped us modernize our infrastructure without any downtime.",
      author: "Michael Chang",
      role: "IT Director",
      company: "Global Solutions",
      rating: 5
    },
    {
      quote: "The mobile application they developed for us exceeded our expectations and received excellent feedback from our users.",
      author: "David Martinez",
      role: "Product Manager",
      company: "NextGen Apps",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading">About Pure Pro Soft</h2>
            <p className="text-gray-600 mb-8">
              At Pure Pro Soft, we are committed to delivering clarity, integrity, and excellence 
              in every project we undertake. Our name reflects our mission:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <h3 className="text-xl font-semibold text-purpro-800 mb-3">Pure</h3>
                <p className="text-gray-600">
                  We prioritize authenticity, trustworthiness, and a transparent approach to software development.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <h3 className="text-xl font-semibold text-purpro-800 mb-3">Pro</h3>
                <p className="text-gray-600">
                  With expertise and professionalism at the core, we provide cutting-edge software solutions and consultancy services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <h3 className="text-xl font-semibold text-purpro-800 mb-3">Soft</h3>
                <p className="text-gray-600">
                  Software is our passion and specialty, driving us to create innovative and reliable solutions that empower businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              We provide a wide range of software development and consulting services to help businesses thrive in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild>
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Expertise</h2>
            <p className="section-subheading">
              We offer a wide range of expertise in modern software development, covering various technologies and platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <ExpertiseCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-purpro-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold text-purpro-800 mb-6">Our Certifications</h2>
                <p className="text-gray-600 mb-8">
                  We uphold industry standards and continuously refine our expertise through recognized certifications, ensuring our solutions remain cutting-edge and reliable.
                </p>
                <div className="space-y-6">
                  <CertificationCard
                    title="AWS Solutions Architect - Associate"
                    issuer="Amazon Web Services"
                  />
                  <CertificationCard
                    title="Azure Fundamentals"
                    issuer="Microsoft"
                  />
                  <CertificationCard
                    title="Azure AI Fundamentals"
                    issuer="Microsoft"
                  />
                  <CertificationCard
                    title="Azure Data Fundamentals"
                    issuer="Microsoft"
                  />
                  <CertificationCard
                    title="Azure Security, Compliance, and Identity Fundamentals"
                    issuer="Microsoft"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-primary/10 p-8 rounded-lg">
                  <Shield className="w-full h-full text-primary/80" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading">
              Don't just take our word for it - here's what our clients have to say about our work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Ready to transform your business with cutting-edge software solutions? Get in touch with us today!
          </p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

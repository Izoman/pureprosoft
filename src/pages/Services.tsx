
import { Code, CloudLightning, Layers, FileCheck, ArrowRight, BarChart4, Database, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailor-made solutions to meet your specific business needs and requirements. We develop custom software applications that streamline operations, improve efficiency, and drive growth.",
      icon: Code,
      features: [
        "Scalable architecture design",
        "Full-stack development",
        "User-centered design",
        "Ongoing maintenance and support"
      ]
    },
    {
      title: "Cloud Consulting & Migration",
      description: "Expert guidance and seamless transition to AWS or Azure cloud platforms. We help you leverage the power of cloud computing to enhance flexibility, security, and performance.",
      icon: CloudLightning,
      features: [
        "Cloud readiness assessment",
        "Migration planning and execution",
        "Cloud optimization",
        "Security and compliance consulting"
      ]
    },
    {
      title: "Mobile & Web Application Development",
      description: "Creating engaging digital experiences for your customers across all platforms. We build responsive web applications and native/cross-platform mobile apps that deliver exceptional user experiences.",
      icon: Layers,
      features: [
        "Progressive Web Apps (PWA)",
        "Native iOS and Android development",
        "Cross-platform solutions with Flutter",
        "Responsive web design"
      ]
    },
    {
      title: "End-to-End Test Automation",
      description: "Enhancing software quality through comprehensive automated testing. We implement robust testing frameworks that ensure your software performs reliably under various conditions.",
      icon: FileCheck,
      features: [
        "Functional and regression testing",
        "Performance testing",
        "Security testing",
        "CI/CD integration"
      ]
    },
    {
      title: "Business Intelligence & Analytics",
      description: "Transform your data into actionable insights with our BI and analytics solutions. We help you make data-driven decisions that drive business growth and innovation.",
      icon: BarChart4,
      features: [
        "Data visualization dashboards",
        "Custom reporting solutions",
        "Predictive analytics",
        "ETL processes implementation"
      ]
    },
    {
      title: "Database Design & Optimization",
      description: "Efficient database solutions that ensure optimal performance and scalability. We design, implement, and optimize database systems to support your growing business needs.",
      icon: Database,
      features: [
        "Database architecture design",
        "Performance tuning",
        "Data migration",
        "High availability solutions"
      ]
    },
    {
      title: "DevOps Implementation",
      description: "Streamline your software development and operations with our DevOps solutions. We help you implement practices and tools that enhance collaboration and productivity.",
      icon: Code,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Monitoring and logging solutions"
      ]
    },
    {
      title: "Security Consulting",
      description: "Protect your digital assets with our comprehensive security solutions. We help you identify and address potential vulnerabilities to safeguard your software and data.",
      icon: ShieldCheck,
      features: [
        "Security assessment",
        "Vulnerability testing",
        "Compliance consulting",
        "Security best practices implementation"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-purpro-900 text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive software solutions to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-subheading">
              We provide a wide range of software development and consulting services tailored to your unique business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <service.icon className="text-primary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purpro-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading">Our Approach</h2>
              <p className="section-subheading">
                We follow a structured methodology to ensure successful project delivery.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Discovery & Planning</h3>
                    <p className="text-gray-600">
                      We start by understanding your business goals, challenges, and requirements. This initial phase involves in-depth discussions to define the scope, objectives, and success criteria for your project. We then create a detailed roadmap that outlines the development process, timeline, and key milestones.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Design & Architecture</h3>
                    <p className="text-gray-600">
                      Once the planning is complete, we move on to designing the system architecture and user interfaces. Our approach focuses on creating intuitive, user-friendly designs that align with your brand identity while ensuring the technical architecture supports your scalability and performance requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Development & Testing</h3>
                    <p className="text-gray-600">
                      Our development process follows agile methodologies, with regular sprints and frequent client updates. We implement rigorous testing protocols throughout development to ensure high-quality, bug-free software. This includes unit testing, integration testing, and end-to-end testing to validate functionality, performance, and security.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Deployment & Support</h3>
                    <p className="text-gray-600">
                      Once development is complete, we handle the deployment of your software to the appropriate environments. We ensure a smooth transition with minimal disruption to your operations. After launch, we provide ongoing support and maintenance to address any issues, implement updates, and make enhancements as your business evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

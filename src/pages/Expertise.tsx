import { Code, CloudLightning, Layers, FileCheck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CertificationCard from '@/components/CertificationCard';
import { t } from 'i18next';

const Expertise = () => {
  const technologies = [
    {
      category: ".NET & Blazor",
      icon: Code,
      description: "Robust backend and UI development for scalable applications.",
      skills: [
        "ASP.NET Core",
        "Blazor WebAssembly",
        "Blazor Server",
        "Entity Framework Core",
        "C# and F#",
        ".NET MAUI"
      ]
    },
    {
      category: "WPF",
      icon: Layers,
      description: "Advanced desktop application development.",
      skills: [
        "XAML UI Design",
        "MVVM Pattern",
        "Custom Controls",
        "Data Binding",
        "WPF Animation",
        "Styling and Theming"
      ]
    },
    {
      category: "Angular & TypeScript",
      icon: Code,
      description: "Frontend development for dynamic and responsive web applications.",
      skills: [
        "Angular 12+",
        "TypeScript",
        "RxJS",
        "NgRx",
        "Angular Material",
        "Responsive Design"
      ]
    },
    {
      category: "Azure & AWS",
      icon: CloudLightning,
      description: "Cloud solutions tailored for scalability, security, and performance.",
      skills: [
        "Azure App Service",
        "Azure Functions",
        "AWS Lambda",
        "Azure DevOps",
        "AWS EC2 and S3",
        "Azure Cognitive Services"
      ]
    },
    {
      category: "Flutter, Android & iOS",
      icon: Layers,
      description: "Cross-platform and native mobile development for intuitive user experiences.",
      skills: [
        "Flutter Framework",
        "Dart Programming",
        "Native Android (Kotlin)",
        "Native iOS (Swift)",
        "Firebase Integration",
        "RESTful API Consumption"
      ]
    },
    {
      category: "E2E Test Automation",
      icon: FileCheck,
      description: "Ensuring software reliability and efficiency through automated testing.",
      skills: [
        "Selenium WebDriver",
        "Cypress",
        "Jest",
        "Playwright",
        "Appium for Mobile",
        "Test Automation Frameworks"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-purpro-900 text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('expertise.title')}</h1>
            <p className="text-xl text-blue-100">{t('expertise.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('expertise.technicalExpertise')}</h2>
            <p className="section-subheading">{t('expertise.technicalExpertiseDescription')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <tech.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3">{tech.category}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.skills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading">{t('expertise.certifications')}</h2>
              <p className="section-subheading">{t('expertise.certificationsDescription')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="solutions-architect-associate.svg" 
                    alt="AWS Certification" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">AWS Solutions Architect - Associate</h3>
                <p className="text-gray-600 text-center">
                  Validates expertise in designing and deploying scalable systems on AWS.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="microsoft-certified-fundamentals-badge.svg" 
                    alt="Azure Fundamentals" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">Azure Fundamentals</h3>
                <p className="text-gray-600 text-center">
                  Demonstrates foundational knowledge of cloud services and Azure implementation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="azure-ai-fundamentals.svg" 
                    alt="Azure AI Fundamentals" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">Azure AI Fundamentals</h3>
                <p className="text-gray-600 text-center">
                  Confirms understanding of machine learning and AI concepts on Microsoft Azure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="azure-data-fundamentals.svg" 
                    alt="Azure Data Fundamentals" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">Azure Data Fundamentals</h3>
                <p className="text-gray-600 text-center">
                  Confirms understanding of data concepts and how they are implemented using Microsoft Azure data services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="azure-security-compliance-and-identity-fundamentals.svg" 
                    alt="Azure Security, Compliance, and Identity Fundamentals" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">Azure Security, Compliance, and Identity Fundamentals</h3>
                <p className="text-gray-600 text-center">
                  Confirms functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('expertise.developmentProcess')}</h2>
            <p className="section-subheading">
              We follow a structured agile methodology to ensure high-quality, efficient delivery of software solutions.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>
              
              <div className="space-y-16">
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('expertise.requirementsAnalysis')}</h3>
                    <p className="text-gray-600">{t('expertise.requirementsAnalysisDescription')}</p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 invisible md:visible"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 invisible md:visible order-1"></div>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 order-2">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('expertise.designArchitecture')}</h3>
                    <p className="text-gray-600">{t('expertise.designArchitectureDescription')}</p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('expertise.agileDevelopment')}</h3>
                    <p className="text-gray-600">{t('expertise.agileDevelopmentDescription')}</p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 invisible md:visible"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 invisible md:visible order-1"></div>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 order-2">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('expertise.testingQA')}</h3>
                    <p className="text-gray-600">{t('expertise.testingQADescription')}</p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">{t('expertise.deploymentSupport')}</h3>
                    <p className="text-gray-600">{t('expertise.deploymentSupportDescription')}</p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                      5
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 invisible md:visible"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purpro-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('expertise.ctaTitle')}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">{t('expertise.ctaSubtitle')}</p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact" onClick={() => scrollTo({top: 0, behavior: 'smooth'})}>Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

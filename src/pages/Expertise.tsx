
import { Code, CloudLightning, Layers, FileCheck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CertificationCard from '@/components/CertificationCard';

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl text-blue-100">
              Cutting-edge technologies and industry best practices for exceptional software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Technical Expertise</h2>
            <p className="section-subheading">
              We offer a wide range of expertise in modern software development, covering various technologies and platforms.
            </p>
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
              <h2 className="section-heading">Our Certifications</h2>
              <p className="section-subheading">
                We uphold industry standards and continuously refine our expertise through recognized certifications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c4f6e183cb7e9a1d700d9a6fe1a41a9cc.png" 
                    alt="AWS Certification" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">AWS Solutions Architecture Associate</h3>
                <p className="text-gray-600 text-center">
                  Validates expertise in designing and deploying scalable systems on AWS.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6 text-primary">
                  <img 
                    src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" 
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
                    src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" 
                    alt="Azure AI Fundamentals" 
                    className="h-24 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-purpro-800 mb-3 text-center">Azure AI Fundamentals</h3>
                <p className="text-gray-600 text-center">
                  Confirms understanding of machine learning and AI concepts on Microsoft Azure.
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
            <h2 className="section-heading">Our Development Process</h2>
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
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Requirements Analysis</h3>
                    <p className="text-gray-600">
                      We work closely with you to understand your business needs, user requirements, and project goals. This collaborative approach ensures that we develop solutions that align perfectly with your vision.
                    </p>
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
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Design & Architecture</h3>
                    <p className="text-gray-600">
                      Our expert architects design scalable, robust solutions that incorporate the latest technologies and best practices. We create detailed specifications that serve as the blueprint for development.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Agile Development</h3>
                    <p className="text-gray-600">
                      We employ agile methodologies with iterative development cycles, allowing for frequent feedback and adjustments. This approach ensures flexibility and enables us to deliver high-quality solutions efficiently.
                    </p>
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
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Testing & Quality Assurance</h3>
                    <p className="text-gray-600">
                      Our comprehensive testing process includes automated and manual testing to ensure that every aspect of your software functions correctly, securely, and efficiently.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-semibold text-purpro-800 mb-3">Deployment & Support</h3>
                    <p className="text-gray-600">
                      We handle the deployment process with care, ensuring smooth transitions and minimal disruption. Our ongoing support services ensure that your software continues to perform optimally.
                    </p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage Our Expertise?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Partner with us to bring your software vision to life with our technical expertise and industry knowledge.
          </p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

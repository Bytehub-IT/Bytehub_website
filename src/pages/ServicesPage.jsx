import React, { useState } from 'react';
import { ArrowRight, Lightbulb, GraduationCap, Code, FlaskConical, Stethoscope, PiggyBank, CircleCheck, Briefcase } from 'lucide-react';
import useInView from '../hooks/useInView.js'; // Corrected import path
import ServiceDetailsModal from '../modals/ServiceDetailsModal.jsx'; // Corrected import path
import { db, appId } from '../firebase.js'; // Corrected import path
import { collection, addDoc } from 'firebase/firestore'; // Specific function import

const ServicesPage = ({ user, userId, setCurrentPage }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [sectionServicesRef, sectionServicesInView] = useInView({ threshold: 0.1 });
  const [sectionCustomRef, sectionCustomInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      id: 'financial',
      icon: PiggyBank,
      title: "Financial Systems Solutions",
      description: "Secure, high-performance software for banking, fintech, and asset management, ensuring compliance and efficiency.",
      details: ["Real-time transaction processing", "Fraud detection AI", "Regulatory compliance frameworks", "Custom trading platforms"],
      learnMoreAction: {
        title: "Launch Interactive Dashboard Demo",
        description: "Experience a simulated, real-time financial dashboard. Explore key metrics, interact with data visualizations, and see how our systems provide actionable insights for decision-making. This demo highlights our intuitive UI and robust backend capabilities.",
        cta: "Launch Demo",
        demoType: "dashboard"
      }
    },
    {
      id: 'hospital',
      icon: Stethoscope,
      title: "Hospital Management Systems",
      description: "Integrated solutions for patient care, electronic health records (EHR), billing, and operational efficiency.",
      details: ["Patient portal development", "EHR/EMR integration", "Telemedicine platforms", "Inventory & supply chain management"],
      learnMoreAction: {
        title: "Experience Patient Flow Simulation",
        description: "Step through a virtual patient journey within our HMS. See how admissions, diagnostics, treatment, and discharge processes are seamlessly managed, improving efficiency and patient outcomes. Understand the integration of various departments.",
        cta: "Start Simulation",
        demoType: "patientFlow"
      }
    },
    {
      id: 'custom-software',
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet the unique operational challenges of any institution.",
      details: ["Enterprise Resource Planning (ERP)", "Customer Relationship Management (CRM)", "Supply Chain Management (SCM)", "Business Process Automation"],
      learnMoreAction: {
        title: "Start Your Project Discovery Tool",
        description: "Utilize our AI-powered tool to brainstorm initial project ideas. Describe your problem, and we'll suggest features and a simple roadmap.",
        cta: "Start Discovery",
        demoType: "discoveryTool" // This will now trigger the LLM feature
      }
    },
    {
      id: 'ai-ml',
      icon: Lightbulb,
      title: "AI & Machine Learning Integration",
      description: "Leveraging artificial intelligence to automate processes, gain predictive insights, and enhance decision-making.",
      details: ["Predictive analytics", "Natural Language Processing (NLP)", "Computer Vision", "Recommender systems"],
      learnMoreAction: {
        title: "Explore AI Use Case Visualizer",
        description: "Interactively explore various real-world AI applications. See how AI can be integrated into different industries to solve complex problems, from optimizing logistics to personalizing customer experiences. Discover the possibilities.",
        cta: "Explore Visualizer",
        demoType: "aiVisualizer"
      }
    },
    {
      id: 'web-mobile',
      icon: Briefcase,
      title: "Web & Mobile App Development",
      description: "Building intuitive, scalable, and secure web and mobile applications for diverse platforms and audiences.",
      details: ["Progressive Web Apps (PWAs)", "iOS & Android native apps", "E-commerce platforms", "API development & integration"],
      learnMoreAction: {
        title: "Preview Interactive Portfolio",
        description: "Browse a dynamic showcase of our most innovative web and mobile applications. Interact with mockups, watch short walkthroughs, and get a feel for the design aesthetics and user experience we deliver.",
        cta: "View Portfolio",
        demoType: "portfolio"
      }
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: "Tech Education & Mentorship",
      description: "Comprehensive training programs, hands-on workshops, and personalized mentorship for aspiring tech professionals.",
      details: ["Full-stack development courses", "Data science bootcamps", "Cybersecurity fundamentals", "Personalized career guidance"],
      learnMoreAction: {
        title: "Try a Free Micro-Lesson",
        description: "Get a taste of ByteHub's engaging educational experience. Access a short, interactive micro-lesson from one of our popular courses and use our AI-powered assistant to ask questions about the code.",
        cta: "Start Free Lesson",
        demoType: "microLesson" // This will now trigger the LLM feature
      }
    },
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  // Function to add a service to the user's portal (Firestore)
  const handleSelectService = async (service) => {
    if (!user || !userId || !db) {
      console.error("User not authenticated or Firestore not initialized.");
      // Show an error message to the user, or redirect to login
      setCurrentPage('signin'); // Redirect to sign-in if not logged in
      return;
    }

    try {
      const userServicesRef = collection(db, `artifacts/${appId}/users/${userId}/client_services`);
      await addDoc(userServicesRef, {
        serviceId: service.id,
        serviceName: service.title,
        description: service.description,
        selectedDate: new Date().toISOString(),
        status: 'pending-payment' // Initial status
      });
      // console.log(`Service '${service.title}' added to user's portal.`);
      setCurrentPage('dashboard'); // Redirect to dashboard after adding service
    } catch (error) {
      console.error("Error adding service to portal:", error);
      // Display error to user
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-16 animate-in">Our Advanced Services</h1>
      <p className={`text-xl text-center text-blue-200 mb-12 max-w-3xl mx-auto ${sectionServicesInView ? 'animate-in delay-100' : ''}`}>
        At ByteHub, we don't just offer services; we architect the future of technology for institutions and individuals worldwide. Our solutions are designed for unparalleled performance, security, and scalability.
      </p>

      <div ref={sectionServicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 flex flex-col justify-between card-hover-effect ${sectionServicesInView ? `animate-in delay-${100 * (index + 1)}` : ''}`}>
            <div>
              <service.icon className="w-16 h-16 text-blue-400 mb-6 glow-effect" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-blue-100 leading-relaxed mb-4">{service.description}</p>
              <ul className="text-blue-200 text-sm list-disc list-inside space-y-1 mb-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-400 mr-2">•</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
            {user ? (
              <button
                onClick={() => handleSelectService(service)}
                className="mt-auto px-6 py-3 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition duration-300 btn-hover-effect flex items-center justify-center"
              >
                Select Service <CircleCheck className="ml-2 w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => handleLearnMore(service)}
                className="mt-auto px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition duration-300 btn-hover-effect flex items-center justify-center"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div ref={sectionCustomRef} className={`text-center mt-16 bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 card-hover-effect ${sectionCustomInView ? 'animate-in delay-100' : ''}`}>
        <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
          Our expertise extends far beyond these categories. If you have a unique technological challenge or a visionary project, we are ready to engineer a bespoke solution that exceeds your expectations.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 btn-hover-effect">
          Request a Consultation
        </button>
      </div>

      {selectedService && (
        <ServiceDetailsModal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
};

export default ServicesPage;

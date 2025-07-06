import React from 'react';
import { ArrowRight, Lightbulb, GraduationCap, MapPin, Code, FlaskConical } from 'lucide-react';
import useInView from '../hooks/useInView';
import ParticleBackground from '../components/layout/ParticleBackground';
import ServiceCard from '../components/ServiceCard';

const HomePage = ({ setCurrentPage }) => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.1 });

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
        }}>
        {/* Dynamic Particle Background */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-80" style={{pointerEvents: 'none'}}></div>
        <ParticleBackground />

        {/* Hero Content */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto animate-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            ByteHub: <br className="md:hidden"/>
            <span className="relative inline-block animate-text-sequence h-20 overflow-hidden">
              <div className="absolute inset-0">Innovating Tomorrow's Digital Landscape.</div>
              <div className="absolute inset-0">Empowering Futures Through Technology.</div>
              <div className="absolute inset-0">Your Vision, Our Code.</div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-10 leading-relaxed animate-in delay-200">
            From groundbreaking software to empowering education, we are shaping the digital future.
          </p>
          <button
            onClick={() => setCurrentPage('services')}
            className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 btn-hover-effect flex items-center justify-center mx-auto animate-in delay-300"
          >
            Explore Our Services <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section ref={section1Ref} className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center text-blue-300 mb-12 ${section1InView ? 'animate-in' : ''}`}>Our Core Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={FlaskConical}
              title="Advanced Software Systems"
              description="Revolutionizing financial institutions, healthcare, and enterprise operations with bespoke, scalable solutions."
              inView={section1InView} delay="100"
            />
            <ServiceCard
              icon={Code}
              title="Web & Mobile Development"
              description="Crafting intuitive, high-performance web applications and mobile experiences for a connected world."
              inView={section1InView} delay="200"
            />
            <ServiceCard
              icon={GraduationCap}
              title="Tech Education & Mentorship"
              description="Empowering students with hands-on skills, expert tuition, and real-world project guidance."
              inView={section1InView} delay="300"
            />
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('services')}
              className={`px-8 py-3 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-900 transition duration-300 btn-hover-effect ${section1InView ? 'animate-in delay-400' : ''}`}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Impact & Outreach Section */}
      <section ref={section2Ref} className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold text-white mb-12 ${section2InView ? 'animate-in' : ''}`}>Making a Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 bg-gray-900 rounded-xl shadow-lg border border-blue-900 card-hover-effect ${section2InView ? 'animate-in delay-100' : ''}`}>
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-6 glow-effect" />
              <h3 className="text-2xl font-semibold text-white mb-4">Community Outreach</h3>
              <p className="text-blue-100 leading-relaxed">
                Reaching underserved areas to provide essential computer skills and access to technology.
              </p>
            </div>
            <div className={`p-8 bg-gray-900 rounded-xl shadow-lg border border-blue-900 card-hover-effect ${section2InView ? 'animate-in delay-200' : ''}`}>
              <Lightbulb className="w-16 h-16 text-blue-400 mx-auto mb-6 glow-effect" />
              <h3 className="text-2xl font-semibold text-white mb-4">Innovation Hubs</h3>
              <p className="text-blue-100 leading-relaxed">
                Fostering creativity and practical application through hands-on workshops and challenges.
              </p>
            </div>
            <div className={`p-8 bg-gray-900 rounded-xl shadow-lg border border-blue-900 card-hover-effect ${section2InView ? 'animate-in delay-300' : ''}`}>
              <GraduationCap className="w-16 h-16 text-blue-400 mx-auto mb-6 glow-effect" />
              <h3 className="text-2xl font-semibold text-white mb-4">Future-Ready Skills</h3>
              <p className="text-blue-100 leading-relaxed">
                Equipping the next generation with the digital competencies for global success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

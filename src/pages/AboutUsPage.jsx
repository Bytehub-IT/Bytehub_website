import React from 'react';
import { CircleCheck, Lightbulb } from 'lucide-react';
import useInView from '../hooks/useInView';

const AboutUsPage = () => {
  const [sectionMissionRef, sectionMissionInView] = useInView({ threshold: 0.1 });
  const [sectionFoundersRef, sectionFoundersInView] = useInView({ threshold: 0.1 });
  const [sectionJourneyRef, sectionJourneyInView] = useInView({ threshold: 0.1 });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-16 animate-in">About ByteHub</h1>

      {/* Mission & Vision */}
      <section ref={sectionMissionRef} className="mb-16">
        <div className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 card-hover-effect ${sectionMissionInView ? 'animate-in' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-100">
            <div className={sectionMissionInView ? 'animate-in delay-100' : ''}>
              <h3 className="text-2xl font-semibold text-blue-300 mb-3 flex items-center"><CircleCheck className="w-6 h-6 mr-2"/> Our Mission</h3>
              <p className="leading-relaxed">
                To empower businesses and individuals globally through cutting-edge technology solutions and transformative education, fostering innovation and bridging the digital divide.
              </p>
            </div>
            <div className={sectionMissionInView ? 'animate-in delay-200' : ''}>
              <h3 className="text-2xl font-semibold text-blue-300 mb-3 flex items-center"><Lightbulb className="w-6 h-6 mr-2"/> Our Vision</h3>
              <p className="leading-relaxed">
                To be the world's leading technology solutions and education provider, known for unparalleled innovation, ethical practice, and profound societal impact, making advanced tech accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section ref={sectionFoundersRef} className="mb-16">
        <h2 className={`text-4xl font-bold text-center text-white mb-12 ${sectionFoundersInView ? 'animate-in' : ''}`}>Meet Our Visionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Lorine Khanira */}
          <div className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 text-center card-hover-effect ${sectionFoundersInView ? 'animate-in delay-100' : ''}`}>
            <img
              src="https://placehold.co/150x150/003366/FFFFFF?text=Lorine"
              alt="Lorine Khanira"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600 shadow-xl glow-effect"
            />
            <h3 className="text-3xl font-bold text-blue-300 mb-2">Lorine Khanira</h3>
            <p className="text-blue-100 text-xl font-medium mb-4">Co-Founder & Data Specialist</p>
            <p className="text-blue-200 leading-relaxed">
              With a profound expertise in data science and analytics, Lorine drives ByteHub's data-driven strategies, transforming complex datasets into actionable insights that power our innovative solutions. Her passion lies in unlocking the true potential of information for our clients and students.
            </p>
          </div>
          {/* James Waithaka */}
          <div className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 text-center card-hover-effect ${sectionFoundersInView ? 'animate-in delay-200' : ''}`}>
            <img
              src="https://placehold.co/150x150/003366/FFFFFF?text=James"
              alt="James Waithaka"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600 shadow-xl glow-effect"
            />
            <h3 className="text-3xl font-bold text-blue-300 mb-2">James Waithaka</h3>
            <p className="text-blue-100 text-xl font-medium mb-4">Co-Founder & Computer Scientist</p>
            <p className="text-blue-200 leading-relaxed">
              A visionary computer scientist, James architectures the robust and scalable software systems that form the backbone of ByteHub's offerings. His commitment to cutting-edge technology and secure infrastructure ensures our solutions are not just powerful, but also reliable and future-proof.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey (placeholder for interactive timeline) */}
      <section ref={sectionJourneyRef} className="mb-16 bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 card-hover-effect">
        <h2 className={`text-4xl font-bold text-center text-white mb-8 ${sectionJourneyInView ? 'animate-in' : ''}`}>Our Journey</h2>
        <div className={`text-blue-200 text-center leading-relaxed ${sectionJourneyInView ? 'animate-in delay-100' : ''}`}>
          <p className="mb-4">
            From our headquarters in Kenya, ByteHub has embarked on an ambitious journey to redefine technology services globally.
          </p>
          <p>
            Imagine an interactive timeline here, visually showcasing key milestones: founding, first major client, expansion into new markets, launch of educational programs, and significant outreach initiatives. Each point on the timeline could animate, revealing more details and a sense of dynamic growth.
          </p>
          <p className="mt-4 text-blue-300">
            (Future Enhancement: An interactive 3D timeline showing global expansion.)
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

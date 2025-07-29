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
          {/* Grace Syonzau */}
          <div className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 text-center card-hover-effect ${sectionFoundersInView ? 'animate-in delay-300' : ''}`}>
            <img
              src="https://placehold.co/150x150/003366/FFFFFF?text=Grace"
              alt="Grace Syonzau"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600 shadow-xl glow-effect"
            />
            <h3 className="text-3xl font-bold text-blue-300 mb-2">Grace Syonzau</h3>
            <p className="text-blue-100 text-xl font-medium mb-4">Accountant</p>
            <p className="text-blue-200 leading-relaxed">
              With a B.S. in Accounting from KCA University and as an ongoing member of the CPA, I bring about two years of hands-on experience in accounting departments, particularly within large organizations such as hospitals. My focus is on <span className="italic">[mention a specific area if you have one, e.g., &quot;streamlining financial operations,&quot; &quot;ensuring financial accuracy,&quot; or &quot;data analysis&quot;]</span>.
            </p>
          </div>
          {/* Pauline */}
          <div className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 text-center card-hover-effect ${sectionFoundersInView ? 'animate-in delay-400' : ''}`}>
            <img
              src="https://placehold.co/150x150/003366/FFFFFF?text=Pauline"
              alt="Pauline"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600 shadow-xl glow-effect"
            />
            <h3 className="text-3xl font-bold text-blue-300 mb-2">Pauline</h3>
            <p className="text-blue-100 text-xl font-medium mb-4">Cloud Solutions Specialist</p>
            <p className="text-blue-200 leading-relaxed">
              A cloud solutions specialist &amp; certified KCNA professional. Pauline leads the strategic design of scalable IT systems tailored for startups. With a strong foundation in data management and a deep understanding of cloud-native technologies, she ensures our team delivers agile, cost-effective, and future-ready solutions that help small businesses thrive in a digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey (placeholder for interactive timeline) */}
      <section ref={sectionJourneyRef} className="mb-16 bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 card-hover-effect">
        <h2 className={`text-4xl font-bold text-center text-white mb-8 ${sectionJourneyInView ? 'animate-in' : ''}`}>Our Journey</h2>
        <div className={`text-blue-200 text-center leading-relaxed ${sectionJourneyInView ? 'animate-in delay-100' : ''}`}>
          <p className="mb-4">
            Headquartered in Kenya, ByteHub has undertaken a distinguished journey to transform the global technology landscape. Our commitment to excellence and innovation drives us to deliver impactful solutions that empower organizations and individuals worldwide.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

import React from 'react';
import { CircleCheck } from 'lucide-react';
import useInView from '../hooks/useInView.js'; // Corrected import path

const PricingPage = () => {
  const pricingTiers = [
    {
      name: "Startup Launchpad",
      description: "Perfect for new ventures and small businesses needing a strong digital presence.",
      price: "$2,500+",
      features: [
        "Responsive Web Design (up to 5 pages)",
        "Basic SEO Optimization",
        "CRM Integration (basic)",
        "1-month Post-Launch Support",
        "Access to ByteHub Education Fundamentals"
      ],
      color: "blue-500"
    },
    {
      name: "Growth Engine",
      description: "Designed for growing businesses seeking advanced features and expanded capabilities.",
      price: "$7,000+",
      features: [
        "Custom Web Application Development",
        "Database Integration",
        "E-commerce Functionality",
        "Advanced Analytics Dashboard",
        "3-month Dedicated Support",
        "Priority access to ByteHub Education Modules"
      ],
      color: "blue-600",
      highlight: true
    },
    {
      name: "Enterprise Platinum",
      description: "Comprehensive solutions for large corporations requiring bespoke, scalable software systems.",
      price: "Custom Quote",
      features: [
        "Full-Scale Enterprise Software Development",
        "AI/ML Integration & Consulting",
        "Robust Cybersecurity Audits",
        "Dedicated Project Management Team",
        "24/7 Premium Support",
        "Unlimited ByteHub Education & Mentorship"
      ],
      color: "blue-700"
    }
  ];

  const educationPricing = [
    {
      plan: "Foundations Course Pack",
      details: "Access to all fundamental courses (Web Dev Basics, Python for Data, Cybersecurity Intro).",
      price: "$499",
      per: "one-time"
    },
    {
      plan: "Advanced Skills Subscription",
      details: "Monthly access to all advanced modules, live workshops, and mentorship sessions.",
      price: "$99",
      per: "month"
    },
    {
      plan: "Personalized Mentorship",
      details: "One-on-one coaching and project guidance with a ByteHub expert.",
      price: "$150",
      per: "hour"
    }
  ];

  const [sectionServicePricingRef, sectionServicePricingInView] = useInView({ threshold: 0.1 });
  const [sectionEducationPricingRef, sectionEducationPricingInView] = useInView({ threshold: 0.1 });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-16 animate-in">Flexible Pricing for Your Success</h1>
      <p className={`text-xl text-center text-blue-200 mb-12 max-w-3xl mx-auto ${sectionServicePricingInView ? 'animate-in delay-100' : ''}`}>
        ByteHub offers transparent pricing models tailored to the scale and complexity of your project, ensuring maximum value and return on investment. We also have dedicated educational programs to foster the next generation of tech talent.
      </p>

      {/* Service Pricing Tiers */}
      <section ref={sectionServicePricingRef} className="mb-16">
        <h2 className={`text-4xl font-bold text-center text-white mb-12 ${sectionServicePricingInView ? 'animate-in' : ''}`}>Software & Development Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 p-8 rounded-xl shadow-lg border-2 ${tier.highlight ? 'border-blue-500 glow-effect' : 'border-blue-900'} text-center card-hover-effect flex flex-col justify-between ${sectionServicePricingInView ? `animate-in delay-${100 * (index + 1)}` : ''}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-3xl font-bold text-blue-300 mb-4">{tier.name}</h3>
                <p className="text-blue-100 text-lg mb-6">{tier.description}</p>
                <div className="text-5xl font-extrabold text-white mb-8">
                  {tier.price}
                </div>
                <ul className="text-blue-200 text-left mb-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CircleCheck className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full px-6 py-3 bg-${tier.color} text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 btn-hover-effect`}
              >
                {tier.price === "Custom Quote" ? "Get a Custom Quote" : "Inquire Now"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Education Pricing */}
      <section ref={sectionEducationPricingRef}>
        <h2 className={`text-4xl font-bold text-center text-white mb-12 ${sectionEducationPricingInView ? 'animate-in' : ''}`}>ByteHub Education Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationPricing.map((edu, index) => (
            <div key={index} className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 card-hover-effect ${sectionEducationPricingInView ? `animate-in delay-${100 * (index + 1)}` : ''}`}>
              <h3 className="text-3xl font-bold text-blue-300 mb-4">{edu.plan}</h3>
              <p className="text-blue-100 text-lg mb-6">{edu.details}</p>
              <div className="text-4xl font-extrabold text-white mb-6">
                {edu.price} <span className="text-blue-200 text-xl">/{edu.per}</span>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 btn-hover-effect">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
        <p className={`text-center text-blue-300 text-lg mt-12 ${sectionEducationPricingInView ? 'animate-in delay-300' : ''}`}>
          For scholarship opportunities or custom educational partnerships, please <a href="#" className="text-blue-400 hover:underline">contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default PricingPage;

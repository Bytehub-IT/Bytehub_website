import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Mail, GraduationCap } from 'lucide-react';

const Pricing = () => {
  const softwarePlans = [
    {
      name: "Startup Launchpad",
      price: "$2,500+",
      description: "Perfect for small businesses and startups looking to establish their digital presence",
      features: [
        "Custom Website Development",
        "Basic Mobile App",
        "Database Setup",
        "3 Months Support",
        "Basic SEO Optimization",
        "Email Integration"
      ],
      isPopular: false
    },
    {
      name: "Growth Engine",
      price: "$7,000+",
      description: "Comprehensive solution for growing businesses ready to scale their operations",
      features: [
        "Advanced Web Applications",
        "Cross-Platform Mobile Apps",
        "Custom Software Development",
        "API Integrations",
        "Cloud Infrastructure",
        "12 Months Support",
        "Advanced Analytics",
        "Security Implementation"
      ],
      isPopular: true
    },
    {
      name: "Enterprise Platinum",
      price: "Custom Quote",
      description: "Enterprise-grade solutions for large organizations with complex requirements",
      features: [
        "Full-Scale Software Systems",
        "AI/ML Integration",
        "Custom Architecture Design",
        "Dedicated Development Team",
        "24/7 Priority Support",
        "Advanced Security & Compliance",
        "Scalable Cloud Infrastructure",
        "Ongoing Maintenance & Updates"
      ],
      isPopular: false
    }
  ];

  const educationPrograms = [
    {
      name: "Foundations Course Pack",
      price: "$499",
      period: "one-time",
      description: "Essential programming and tech skills for beginners",
      features: [
        "HTML, CSS, JavaScript",
        "Python Fundamentals",
        "Database Basics",
        "Project-Based Learning",
        "Certificate of Completion",
        "Lifetime Access to Materials"
      ]
    },
    {
      name: "Advanced Skills Subscription",
      price: "$99",
      period: "/month",
      description: "Continuous learning with advanced topics and new technologies",
      features: [
        "Monthly New Courses",
        "Live Coding Sessions",
        "React, Node.js, Cloud",
        "Industry Best Practices",
        "Community Access",
        "Career Resources"
      ]
    },
    {
      name: "Personalized Mentorship",
      price: "$150",
      period: "/hour",
      description: "One-on-one guidance tailored to your specific goals and challenges",
      features: [
        "1-on-1 Video Sessions",
        "Personalized Learning Path",
        "Code Review & Feedback",
        "Career Guidance",
        "Portfolio Development",
        "Interview Preparation"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs and budget
          </p>
        </motion.div>

        {/* Software & Development Plans */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Software & Development Plans
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {softwarePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`card p-8 relative ${plan.isPopular ? 'ring-2 ring-gold scale-105' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold to-yellow-500 text-navy px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star size={16} className="mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h4>
                  <div className="text-4xl font-bold mb-4 text-navy dark:text-gold">
                    {plan.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="mailto:byte.hub77@gmail.com?subject=Consultation%20Request&body=Hello%20ByteHub%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.isPopular 
                      ? 'btn-secondary' 
                      : 'btn-primary'
                  }`}
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Programs */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white flex items-center justify-center"
          >
            <GraduationCap className="mr-3 text-gold" size={36} />
            Education Programs
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {educationPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card p-8"
              >
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {program.name}
                  </h4>
                  <div className="text-3xl font-bold mb-2 text-navy dark:text-gold">
                    {program.price}
                    <span className="text-lg font-normal text-gray-500">
                      {program.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {program.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="mailto:byte.hub77@gmail.com?subject=Education%20Program%20Enrollment&body=Hello%20ByteHub%2C%20I%20would%20like%20to%20enroll%20in%20your%20education%20programs."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Enroll Now</span>
                  <Mail className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
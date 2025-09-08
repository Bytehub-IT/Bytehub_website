import { motion } from 'framer-motion';
import { Code, Smartphone, GraduationCap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Advanced Software Systems",
      description: "Custom enterprise solutions, financial systems, hospital management, and AI-powered applications tailored to your business needs.",
      features: ["Enterprise Software", "AI Integration", "Custom APIs", "Database Design"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Web & Mobile Development",
      description: "Modern, responsive websites and mobile applications built with cutting-edge technologies and user-centric design principles.",
      features: ["React/Next.js", "Mobile Apps", "E-commerce", "Progressive Web Apps"]
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Tech Education & Mentorship",
      description: "Comprehensive training programs and personalized mentorship to build future-ready digital skills and technical expertise.",
      features: ["Coding Bootcamps", "1-on-1 Mentorship", "Industry Certifications", "Career Guidance"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Our Core Offerings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions that drive innovation and growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="card p-8 group cursor-pointer"
            >
              <div className="text-navy dark:text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-navy dark:text-gold font-semibold group-hover:text-gold dark:group-hover:text-yellow-400 transition-colors duration-300">
                <span className="mr-2">Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="mailto:byte.hub77@gmail.com?subject=Consultation%20Request&body=Hello%20ByteHub%2C%20I%20would%20like%20to%20request%20a%20consultation."
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center btn-primary text-lg group"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
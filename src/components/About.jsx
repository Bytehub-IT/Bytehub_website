import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

// Import team photos
import lorineImg from '../assets/images/lorine.jpg';
import jamesImg from '../assets/images/james.jpg';
import graceImg from '../assets/images/grace k.jpg';
import paulineImg from '../assets/images/pauline.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Lorine Khanira",
      role: "Co-Founder & Data Specialist",
      image: lorineImg,
      bio: "Expert in data analytics and business intelligence with a passion for transforming raw data into actionable insights that drive strategic decisions.",
      specialties: ["Data Analytics", "Business Intelligence", "Strategic Planning", "Market Research"]
    },
    {
      name: "James Bajee",
      role: "Co-Founder & Computer Scientist",
      image: jamesImg,
      bio: "Full-stack developer and computer scientist specializing in scalable software architecture and cutting-edge technology solutions.",
      specialties: ["Software Architecture", "Full-Stack Development", "AI/ML", "System Design"]
    },
    {
      name: "Grace Syonzau",
      role: "Accountant",
      image: graceImg,
      bio: "Financial expert ensuring sound fiscal management and strategic financial planning for sustainable business growth.",
      specialties: ["Financial Planning", "Budget Management", "Tax Strategy", "Business Analysis"]
    },
    {
      name: "Pauline",
      role: "Cloud Solutions Specialist",
      image: paulineImg,
      bio: "Cloud infrastructure expert focused on building scalable, secure, and efficient cloud-based solutions for modern businesses.",
      specialties: ["Cloud Architecture", "DevOps", "Security", "Infrastructure Management"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg">
      <div className="container mx-auto">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            About ByteHub
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-navy dark:text-gold">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower individuals and organizations with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in an increasingly digital world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-navy dark:text-gold">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading catalyst for digital transformation globally, creating a future where technology 
                serves as a bridge to opportunities, education, and sustainable development for all.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our Team
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to bringing your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
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
              className="card p-6 text-center group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {member.name}
              </h4>
              
              <p className="text-navy dark:text-gold font-semibold mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-colors duration-300"
                >
                  <Linkedin size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-colors duration-300"
                >
                  <Mail size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
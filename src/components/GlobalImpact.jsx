import { motion } from 'framer-motion';
import { Globe, Lightbulb, Rocket } from 'lucide-react';

const GlobalImpact = () => {
  const impacts = [
    {
      icon: <Globe size={48} />,
      title: "Community Outreach",
      description: "Training underserved areas to bridge the digital divide and create opportunities for economic growth through technology education."
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Innovation Hubs",
      description: "Organizing workshops, hackathons, and coding challenges to foster creativity and collaborative problem-solving in tech communities."
    },
    {
      icon: <Rocket size={48} />,
      title: "Future-Ready Skills",
      description: "Developing digital skills programs that prepare individuals for global success in the rapidly evolving technology landscape."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-navy to-blue-800 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Making a difference worldwide through technology and education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                <div className="text-gold mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {impact.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {impact.title}
                </h3>
                
                <p className="text-blue-100 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
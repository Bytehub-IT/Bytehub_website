import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import byteHubLogo from '../assets/images/byte_hub.jpg';

const Footer = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      url: 'https://wa.me/254790775978?text=Hi%20Lorine%2C%20I%20would%20like%20to%20chat%20with%20ByteHub!',
      color: 'hover:text-green-500'
    },
    {
      name: 'TikTok',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.12 20.14a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.16-.26z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@bytehub.it?_t=ZM-8zXHh3amSOc&_r=1',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/bytehub.it?igsh=c29ucWFkZ240bmZs',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:byte.hub77@gmail.com',
      color: 'hover:text-blue-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <img 
                  src={byteHubLogo} 
                  alt="ByteHub Logo" 
                  className="w-8 h-8 rounded-lg shadow-md"
                />
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                  ByteHub
                </span>
              </motion.div>
              
              <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
                Innovating Tomorrow's Digital Landscape. Empowering futures through technology with cutting-edge solutions and comprehensive education programs.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full transition-colors duration-300 ${link.color}`}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-100 hover:text-gold transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gold">Get in Touch</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:byte.hub77@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-100 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="mr-3" size={18} />
                  byte.hub77@gmail.com
                </motion.a>
                
                <motion.a
                  href="https://wa.me/254790775978?text=Hi%20Lorine%2C%20I%20would%20like%20to%20chat%20with%20ByteHub!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-100 hover:text-gold transition-colors duration-300"
                >
                  <MessageCircle className="mr-3" size={18} />
                  +254 790 775 978
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-blue-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 ByteHub. All rights reserved.
            </p>
            
            <p className="text-gold font-medium text-sm">
              "Innovating Tomorrow's Digital Landscape"
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
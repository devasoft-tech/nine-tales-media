'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Content Creation',
    'Meta Ads',
    'Google Ads',
    'TVC Production',
    'E-commerce Marketing',
    'Web Development',
    'AI Chatbot Integration',
    'Custom Software Development',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary to-background-tertiary -z-10" />
      
      {/* Animated wave divider */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L1200,0 L1200,20 C1050,60 850,0 600,40 C350,80 150,20 0,40 L0,0 Z"
            fill="url(#footer-gradient)"
            animate={{
              d: [
                "M0,0 L1200,0 L1200,20 C1050,60 850,0 600,40 C350,80 150,20 0,40 L0,0 Z",
                "M0,0 L1200,0 L1200,40 C1050,20 850,60 600,20 C350,40 150,60 0,20 L0,0 Z",
                "M0,0 L1200,0 L1200,20 C1050,60 850,0 600,40 C350,80 150,20 0,40 L0,0 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a0a0f" />
              <stop offset="50%" stopColor="#0a0a0f" />
              <stop offset="100%" stopColor="#0a0a0f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="max-width-container pt-32 pb-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-5"
            variants={itemVariants}
          >
            <div className="mb-6">
              <img
                src="/logo_white.png"
                alt="Nine Tales Media Logo"
                style={{ height: '64px', width: 'auto' }}
              />
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Crafting digital narratives that captivate, engage, and convert. We blend creativity with cutting-edge technology to bring your brand&apos;s story to life in the digital landscape.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mt-1">
                  <EnvelopeIcon className="h-5 w-5 text-primary-orange" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email us at</p>
                  <a href="mailto:info@ninetalesmedia.co.in" className="text-white hover:text-primary-orange transition-colors">
                    info@ninetalesmedia.co.in
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mt-1">
                  <PhoneIcon className="h-5 w-5 text-primary-orange" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call us at</p>
                  <a href="tel:+15551234567" className="text-white hover:text-primary-orange transition-colors">
                    +918743077753
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mt-1">
                  <MapPinIcon className="h-5 w-5 text-primary-orange" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit us at</p>
                  <address className="text-white not-italic">
                    Delhi, IN
                  </address>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <h3 className="text-white font-display font-semibold text-lg mb-6 relative inline-block">
              Services
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <ul className="space-y-3 columns-2">
              {services.map((service) => (
                <li key={service}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-primary-orange transition-colors duration-200 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 opacity-70"></span>
                      {service}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <h3 className="text-white font-display font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-orange transition-colors duration-200 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 opacity-70"></span>
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            
            <h3 className="text-white font-display font-semibold text-lg mt-8 mb-4 relative inline-block">
              Legal
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <ul className="space-y-3">
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/privacy" className="text-gray-400 hover:text-primary-orange text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 opacity-70"></span>
                    Privacy Policy
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/terms" className="text-gray-400 hover:text-primary-orange text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 opacity-70"></span>
                    Terms of Service
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <h3 className="text-white font-display font-semibold text-lg mb-6 relative inline-block">
              Stay Connected
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form className="mb-6">
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-orange"
                  required
                />
                <motion.button 
                  type="submit"
                  className="bg-gradient-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:shadow-lg hover:shadow-primary-orange/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-primary hover:text-white transition-all duration-300 border border-gray-700/50"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="text-sm font-semibold">
                      {social.icon.charAt(0).toUpperCase()}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Border with enhanced design */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} Nine Tales Media. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-500 text-xs">Made with</span>
              <motion.span 
                className="text-primary-red"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              <span className="text-gray-500 text-xs">in San Francisco</span>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <motion.a
        href="#top"
        className="fixed bottom-6 right-24 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg z-30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
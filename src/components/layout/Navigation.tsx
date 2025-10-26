'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Handle scroll direction to show/hide navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setScrolled(latest > 50);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname?.startsWith(path);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ width: '100%' }}
      >
        <div className="max-width-container">
          <div className="flex justify-between items-center h-20 px-4">
            {/* Enhanced Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <img
                  src="/logo_white.png"
                  alt="Nine Tales Media Logo"
                  className="h-12 w-auto"
                  style={{ height: '48px', width: 'auto' }}
                />
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-4 md:ml-10 flex items-baseline space-x-2 md:space-x-4">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mx-2"
                    >
                      <Link
                        href={item.href}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group inline-block hover:bg-white/5 ${
                          active ? 'text-primary-orange' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.name}
                        <motion.span 
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-primary rounded-full ${
                            active ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                          transition={{ duration: 0.3 }}
                          layoutId="navIndicator"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="relative overflow-hidden bg-gradient-primary text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 inline-block shadow-md hover:shadow-lg ml-4"
                >
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span 
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation with Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full justify-center items-center">
              <div className="space-y-8 py-6 px-4 w-full max-w-sm mx-auto">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className={`block text-center py-4 my-2 text-2xl font-display font-medium transition-all duration-300 relative hover:bg-white/5 rounded-lg ${
                          active ? 'text-primary-orange' : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {active && (
                          <motion.div 
                            className="absolute -bottom-1 left-1/2 w-12 h-0.5 bg-gradient-primary"
                            layoutId="mobileNavIndicator"
                            initial={{ x: '-50%' }}
                            animate={{ x: '-50%' }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  className="mt-12 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-primary text-white w-full py-4 rounded-full font-semibold inline-block text-center hover:shadow-lg hover:shadow-primary-orange/25 transition-all duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
                
                {/* Social links */}
                <motion.div 
                  className="flex justify-center space-x-6 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 + 0.2 }}
                >
                  {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-primary hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.charAt(0)}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
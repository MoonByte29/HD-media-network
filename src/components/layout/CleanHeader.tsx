import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

const CleanHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      
      // Add a small delay to ensure menu closes smoothly
      setTimeout(() => {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const handleClick = (href: string) => {
    const isAnchor = href.includes("#");
    
    if (isAnchor) {
      const id = href.split("#")[1];
      
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        // Close mobile menu immediately
        setIsOpen(false);
        
        navigate("/");
        
        // Wait longer for navigation to complete, then scroll
        setTimeout(() => {
          scrollToElement(id);
        }, 300);
      } else {
        // We're already on home page, just scroll
        scrollToElement(id);
      }
    } else {
      // Regular navigation
      setIsOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "917509683151";
    const message = "Hello HD Media Team, \n I'm interested in learning more about your services. Could you please share the details and how I can get started?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Close mobile menu
    setIsOpen(false);
    
    window.open(whatsappUrl, "_blank");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('header')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={logo} alt="HD Media Network Logo" className="w-full h-full object-contain" />
            </div>
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-900 font-display"
              onClick={() => setIsOpen(false)}
            >
              HD Media Network
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => handleClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 relative z-60"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-50 lg:hidden"
              >
                <div className="px-6 py-6">
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 text-left py-2 border-b border-gray-100 last:border-b-0"
                        onClick={() => handleClick(item.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                      className="pt-4"
                    >
                      <button 
                        className="btn btn-primary w-full text-lg py-4"
                        onClick={handleWhatsAppClick}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default CleanHeader;
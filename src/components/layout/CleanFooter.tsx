import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Globe2, Clock, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const CleanFooter = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    services: [
      { name: "Web Development", href: "/servicepage" },
      { name: "Mobile Apps", href: "/servicepage" },
      { name: "Digital Marketing", href: "/servicepage" },
      { name: "SEO Optimization", href: "/servicepage" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/hdmedianetwork/", icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/hdmedianetwork/?igshid=YmMyMTA2M2Y%3D", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/hdmedianetwork.hdmn", icon: Facebook }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "BT-1, BIO TECHNOLOGY PARK, Sitapura\nJaipur, Rajasthan 302022 India",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 7509683151",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "management@hdmedianetwork.in\nsupport@hdmedianetwork.in",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9am - 5pm\nSat - Sun: Closed",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <span className="text-2xl font-bold">HD Media Network</span>
                <div className="text-sm text-gray-400">Digital Excellence</div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              We provide innovative IT solutions to help businesses thrive in the digital landscape. 
              Our services are designed to meet your unique needs and drive sustainable growth.
            </motion.p>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-6 text-white/80"
            >
              Company
            </motion.h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          <div className="md:pl-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-6 text-white/80"
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-6 text-white/80"
            >
              Contact
            </motion.h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <info.icon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm whitespace-pre-line">
                    {info.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 hover:text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} HD Media Network. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default CleanFooter;
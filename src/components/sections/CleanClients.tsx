// import React from "react";
import { motion } from "framer-motion";
import { partners } from "../../data/Partner";

const CleanClients = () => {
  // Duplicate clients for seamless loop
  const duplicatedClients = [...partners, ...partners];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We're proud to work with amazing companies across various industries
          </motion.p>
        </div>

        {/* Mobile Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {partners.slice(0, 12).map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="clean-card p-4 text-center group cursor-pointer border-2 border-transparent hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 mb-2">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full w-auto h-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Scrolling Animation */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling container */}
          <motion.div
            className="flex space-x-8 py-4"
            animate={{ x: [0, -50 * partners.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedClients.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="clean-card p-6 w-32 h-20 flex items-center justify-center border-1 border-transparent hover:border-purple-500 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanClients;

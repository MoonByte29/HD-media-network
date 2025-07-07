// import React from "react";
import { ArrowRight, CheckCircle, SearchCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { Link } from "react-router-dom";

const CleanHero = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-white min-h-screen flex items-center cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Trusted by 120+ companies worldwide
            </motion.div>

            {/* Main Headline - Mobile optimized */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight font-display"
            >
              Digital Solutions
              <br />
              <span className="text-purple-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                That Drive Growth
              </span>
            </motion.h1>

            {/* Subtitle - Mobile optimized */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We create exceptional digital experiences that transform businesses through innovative design and cutting-edge technology.
            </motion.p>

            {/* Features - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              {[
                "Experienced Team",
                "Global Presence",
                "24/7 Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                <a href="#contact" className="flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                <Link to="/services" className="flex items-center justify-center">
                  <SearchCheck className="w-4 h-4 mr-2" />
                  Explore Services
                </Link>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Mobile optimized Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center order-1 lg:order-2 py-0 my-0"
          >
            {/* Lottie Container with responsive dimensions and reduced mobile spacing */}
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
              <motion.div
                className="relative w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <DotLottiePlayer
                  src="https://assets-v2.lottiefiles.com/a/9e6592e6-117c-11ee-af91-97b244f52abf/AcTBfj6I3L.lottie"
                  autoplay
                  loop
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '200px',
                    maxHeight: '280px'
                  }}
                  className="sm:min-h-[200px] sm:max-h-[400px] lg:min-h-[400px] lg:max-h-[500px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanHero;
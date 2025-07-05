// import React from "react";
import { ArrowRight, CheckCircle, SearchCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { Link } from "react-router-dom";

const CleanHero = () => {
  return (
    <section className="pt-24 pb-16 bg-white min-h-screen flex items-center cursor-pointer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Trusted by 120+ companies worldwide
            </motion.div>

            {/* Main Headline - Reduced font sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight font-display"
            >
              Digital Solutions
              <br />
              <span className="text-purple-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                That Drive Growth
              </span>
            </motion.h1>

            {/* Subtitle - Reduced font size and margin */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl"
            >
              We create exceptional digital experiences that transform businesses through innovative design and cutting-edge technology.
            </motion.p>

            {/* Features - Reduced margin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                "Experiencced Team",
                "Global Presence",
                "24/7 Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Reduced padding and font size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary px-6 py-3"
              >
                <a href="#contact">Start Your Project</a>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary px-6 py-3"
              >
                <SearchCheck className="w-4 h-4 mr-2" />
                <Link to="/services">Explore Services</Link>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Fixed Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            {/* Lottie Container with proper dimensions */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                className="relative w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <DotLottiePlayer
                  src="https://assets-v2.lottiefiles.com/a/9e6592e6-117c-11ee-af91-97b244f52abf/AcTBfj6I3L.lottie"
                  // src="https://assets-v2.lottiefiles.com/a/0a752064-118c-11ee-a64c-b7274d346b48/eF9SgDR4rk.lottie"
                  autoplay
                  loop
                  style={{
                    width: '100%',
                    height: '700px',
                    minHeight: '400px',
                    maxHeight: '500px'
                  }}
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
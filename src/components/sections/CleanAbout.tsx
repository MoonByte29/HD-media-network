// import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CleanAbout = () => {
  const stats = [
    { icon: Users, value: "120+", label: "Happy Clients" },
    { icon: CheckCircle, value: "200+", label: "Projects Completed" },
    { icon: Award, value: "2+", label: "Years Experience" },
    { icon: Target, value: "99%", label: "Success Rate" },
  ];

  const features = [
    "Custom Web Development",
    "Mobile App Development", 
    "Digital Marketing Solutions",
    "SEO & Performance Optimization",
    "24/7 Support & Maintenance",
    "Scalable Cloud Solutions"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Transforming Ideas Into
            <span className="text-purple-600"> Digital Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            At HD Media Network, we believe in the power of technology to transform businesses through innovative solutions and strategic thinking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose HD Media Network?
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We combine creativity, technical expertise, and industry knowledge to deliver 
                exceptional results that exceed client expectations. Our team is committed to 
                quality, transparency, and continuous improvement.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
              >
                <Link to="/aboutpage" >Learn More About Us</Link>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Workspace Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Workspace Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              
              <img
                src="/src/assets/About copy.jpg"
                alt="HD Media Network Modern Workspace"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💻</span>
                  <span className="font-semibold text-sm">Modern Workspace</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-60"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-60"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="clean-card text-center"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="clean-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Modern Work Environment
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our state-of-the-art workspace is designed to foster creativity, collaboration, and innovation. 
              We believe that a modern, comfortable environment helps our team deliver exceptional results 
              for every project. From cutting-edge technology to collaborative spaces, we've created an 
              atmosphere where great ideas come to life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanAbout;
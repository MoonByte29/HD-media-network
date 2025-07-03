import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../../data/Testimonialdata";

const CleanTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!autoplay || isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, currentSlide, isHovered]);

  const handleWhatsAppClick = () => {
  const phoneNumber = "917509683151"; // No spaces or symbols, include country code

  const message = "Hello HD Media Team, \n I’m interested in learning more about your services. Could you please share the details and how I can get started?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <section id="testimonials" className="py-20 bg-white">
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Real feedback from real clients who've experienced our exceptional service and results.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Navigation Buttons - Removed hover effects */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 transition-all duration-300 minimal-shadow"
            onClick={() => {
              prevSlide();
              setAutoplay(false);
              setTimeout(() => setAutoplay(true), 10000);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 transition-all duration-300 minimal-shadow"
            onClick={() => {
              nextSlide();
              setAutoplay(false);
              setTimeout(() => setAutoplay(true), 10000);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="px-4"
              >
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-16 h-16 text-purple-600" />
                  </div>

                  <div className="relative z-10">
                    
                    {/* Stars */}
                    <div className="flex items-center justify-center mb-6">
                      {Array(5).fill(0).map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 text-center mb-8 leading-relaxed font-medium italic">
                      "{testimonials[currentSlide].content}"
                    </blockquote>
                    
                    {/* Author Section */}
                    <div className="flex flex-col items-center">
                      {/* Avatar */}
                      <div className="relative mb-4">
                        <motion.img
                          src={testimonials[currentSlide].gender}
                          alt={testimonials[currentSlide].name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Author Info */}
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className="text-gray-600 font-medium">
                          {testimonials[currentSlide].position}
                        </p>
                        <p className="text-purple-600 font-semibold text-sm">
                          {testimonials[currentSlide].company}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 -z-10"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 10000);
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-purple-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: autoplay && !isHovered ? "100%" : "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              key={currentSlide}
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { value: "4.9/5", label: "Average Rating", icon: "⭐", color: "text-yellow-600" },
            { value: "120+", label: "Happy Clients", icon: "😊", color: "text-green-600" },
            { value: "99%", label: "Satisfaction Rate", icon: "🎯", color: "text-purple-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center clean-card group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className={`text-3xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="clean-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help transform your business with our proven digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="btn btn-primary"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanTestimonials;
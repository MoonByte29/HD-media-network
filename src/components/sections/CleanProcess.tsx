// import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, ArrowRight } from "lucide-react";

const CleanProcess = () => {
  const process = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "We begin by understanding your business objectives, target audience, and requirements to develop a strategic plan.",
      step: "01"
    },
    {
      icon: Palette,
      title: "Design & Prototype",
      description: "Our creative team designs visually appealing interfaces that align with your brand and provide exceptional user experience.",
      step: "02"
    },
    {
      icon: Code,
      title: "Development & Build",
      description: "Skilled developers transform designs into functional, responsive, and scalable solutions using cutting-edge technologies.",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Launch & Optimize",
      description: "Rigorous testing ensures your product is bug-free and performs optimally before it reaches your audience.",
      step: "04"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
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
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Our proven four-step process ensures we deliver high-quality solutions that meet your business needs and exceed expectations.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 z-20">
                  {step.step}
                </div>

                <div className="clean-card">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-30">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CleanProcess;
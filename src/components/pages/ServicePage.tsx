import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "../../data/Servicedata";
import { Helmet } from "react-helmet-async";

const ServicesPage: React.FC = () => {
  const handleWhatsAppClick = (serviceTitle: string) => {
    const phoneNumber = "917509683151"; // with country code
    const message = `Hello HD Media Team, I’m interested in getting a quote for your "${serviceTitle}" service. Please share the details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Our Services | HD Media Network</title>
        <meta
          name="description"
          content="Explore the wide range of digital services offered by HD Media Network including web development, SEO, mobile apps, and marketing solutions."
        />
        <meta
          name="keywords"
          content="HD Media Network services, web development, app development, SEO, digital marketing, UI/UX design, chatbot, analytics"
        />
        <meta property="og:title" content="Our Services | HD Media Network" />
        <meta
          property="og:description"
          content="Discover tailored digital solutions that empower your business to grow online — from design to deployment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hdmedianetwork.in/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | HD Media Network" />
        <meta
          name="twitter:description"
          content="Explore our expert digital services and find the perfect solution for your business goals."
        />
        <link rel="canonical" href="https://hdmedianetwork.in/services" />
      </Helmet>

      
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
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

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Our Services
                <br />
                <span className="text-purple-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  That Drive Growth
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Discover our comprehensive range of digital solutions designed
                to elevate your business and drive exceptional results.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {["Lightning Fast", "99.9% Uptime", "24/7 Support"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden border border-gray-100">
                    {/* Service Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        {service.features.length > 4 && (
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-400 font-medium">
                              +{service.features.length - 4} more features
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Learn More Link */}
                      <div className="flex items-center justify-between">
                        <div
                          onClick={() => handleWhatsAppClick(service.title)}
                          className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300 cursor-pointer"
                        >
                          <span className="text-sm">Get Quote</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;

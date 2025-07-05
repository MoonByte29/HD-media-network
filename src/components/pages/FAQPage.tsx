import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does HD Media Network offer?",
      answer:
        "We provide website development, social media marketing, SEO optimization, graphic designing, PPC advertising, app development, chatbot automation, data analytics, digital marketing, machine learning solutions, payment gateway integration, and API integration.",
      category: "Services",
    },
    {
      id: 2,
      question: "How can HD Media Network help my business grow online?",
      answer:
        "Our services enhance brand visibility, drive targeted traffic, boost customer engagement, and increase conversions. We create comprehensive digital strategies tailored to your business goals.",
      category: "Business Growth",
    },
    {
      id: 3,
      question: "Does HD Media Network offer custom solutions?",
      answer:
        "Yes, we tailor our services to meet your specific business needs. Every project is customized based on your requirements, industry, target audience, and business objectives.",
      category: "Services",
    },
    {
      id: 4,
      question: "How experienced is HD Media Network?",
      answer:
        "We have years of industry experience and a proven track record of success with numerous satisfied clients. Our team has delivered 200+ projects across 15+ countries with 95% client satisfaction.",
      category: "Company",
    },
    {
      id: 5,
      question: "How do I contact HD Media Network?",
      answer:
        "Call us at +91 8517858410, email us at support@hdmedianetwork.in, or visit our office in Jaipur, Rajasthan. We're always ready to discuss your project requirements.",
      category: "Contact",
    },
    {
      id: 6,
      question: "What are your business hours?",
      answer:
        "We are open Monday to Friday from 9:00 AM to 5:00 PM (IST). For urgent matters, you can reach us via email and we'll respond as soon as possible.",
      category: "Contact",
    },
    {
      id: 7,
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance for websites and apps. This includes regular updates, security monitoring, performance optimization, and technical support.",
      category: "Support",
    },
    {
      id: 8,
      question: "Where can I learn about the latest digital marketing trends?",
      answer:
        "Follow our blog and social media channels for updates, or contact us for expert advice. We regularly share insights about the latest trends in digital marketing and technology.",
      category: "Resources",
    },
    {
      id: 9,
      question: "What technologies do you use for development?",
      answer:
        "We use modern technologies including React, Node.js, Python, PHP, WordPress, mobile app frameworks, cloud services, and the latest digital marketing tools to deliver cutting-edge solutions.",
      category: "Technical",
    },
    {
      id: 10,
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. Website development typically takes 2-6 weeks, mobile apps 3-8 weeks, and marketing campaigns can be launched within 1-2 weeks.",
      category: "Timeline",
    },
    {
      id: 11,
      question: "Do you work with international clients?",
      answer:
        "Yes, we work with clients globally. We have experience serving clients across different time zones and can accommodate various communication preferences and business requirements.",
      category: "Company",
    },
    {
      id: 12,
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on scope, complexity, and requirements. We provide detailed quotes after understanding your needs and offer competitive rates for all our services.",
      category: "Pricing",
    },
  ];

  const categories = [
    "All",
    "Services",
    "Business Growth",
    "Company",
    "Contact",
    "Support",
    "Resources",
    "Technical",
    "Timeline",
    "Pricing",
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>FAQ's | HD Media Network</title>
        <meta
          name="description"
          content="Learn more about HD Media Network — our vision, mission, and the passionate team behind our innovative digital solutions."
        />
        <meta
          name="keywords"
          content="about HD Media Network, our team, company mission, IT company background, tech experts"
        />
        <meta property="og:title" content="About Us | HD Media Network" />
        <meta
          property="og:description"
          content="Get to know the story and people behind HD Media Network, your trusted digital growth partner."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hdmedianetwork.in/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | HD Media Network" />
        <meta
          name="twitter:description"
          content="Learn about HD Media Network’s journey, expertise, and the values that drive us forward."
        />
        <link rel="canonical" href="https://hdmedianetwork.in/faq" />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-0 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get instant answers to your questions
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Frequently Asked
                <br />
                <span className="text-purple-600">Questions</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Find answers to common questions about our services, pricing,
                and processes. Can't find what you're looking for? Contact our
                support team.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative max-w-md mx-auto"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 justify-center mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {faq.question}
                      </h3>
                      <span className="text-sm text-purple-600 font-medium">
                        {faq.category}
                      </span>
                    </div>
                    <div className="ml-4">
                      {activeItem === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeItem === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No FAQs Found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filter.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-slate-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Still Have Questions?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our support team is here to help. Get in touch and we'll respond
                as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 8517858410",
                    action: "tel:+918517858410",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "support@hdmedianetwork.in",
                    action: "mailto:support@hdmedianetwork.in",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Mon - Fri: 9am - 5pm (IST)",
                    action: null,
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${
                      contact.action ? "cursor-pointer hover:bg-white/20" : ""
                    } transition-all duration-300`}
                    onClick={() =>
                      contact.action && window.open(contact.action, "_blank")
                    }
                  >
                    <contact.icon className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-slate-200">
                      {contact.title}
                    </h3>
                    <p className="text-purple-100">{contact.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
              >
                <h3 className="text-lg font-semibold mb-3 text-slate-200">
                  Visit Our Office
                </h3>
                <p className="text-purple-100">
                  📍BT-1, BIO TECHNOLOGY PARK, Sitapura <br/> Jaipur, Rajasthan 302022 India
                  <br />
                  We welcome in-person consultations by appointment
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;

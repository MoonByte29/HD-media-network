import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  CreditCard,
  FileText,
  Phone,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const RefundPolicyPage: React.FC = () => {
  const policyItems = [
    {
      icon: Clock,
      title: "5-Day Reporting Window",
      description:
        "Refund requests must be submitted within 5 days of service initiation to support@hdmedianetwork.in. This ensures we can address your concerns promptly and effectively.",
    },
    {
      icon: CheckCircle,
      title: "14-Day Review Process",
      description:
        "HD Media Network will review your refund request within 14 days. If deemed eligible, we'll process the refund according to the payment method used for the original transaction.",
    },
    {
      icon: CreditCard,
      title: "Service-Specific Refunds",
      description:
        "Refund amounts are limited to the fees paid for the specific services causing the refund request. Additional costs incurred by the client, such as third-party expenses, will not be refunded.",
    },
    {
      icon: FileText,
      title: "Documentation Required",
      description:
        "Refund requests must include a detailed description of the issues and any supporting documentation to help us understand and address your concerns.",
    },
  ];

  const eligibilityItems = [
    "Issues reported promptly with reasonable time for HD Media Network to address concerns",
    "Problems directly related to services provided by HD Media Network",
    "Issues not resulting from actions or changes made by the client or third parties",
    "Proper documentation and detailed description of the problems",
    "Request submitted within 5 days of service initiation",
  ];

  const nonRefundableItems = [
    "Customized or personalized services",
    "Third-party licenses or services",
    "Services explicitly stated as non-refundable in the agreement or Statement of Work",
    "Third-party expenses incurred by the client",
    "Services where issues result from client or third-party actions",
  ];

  const cancellationSteps = [
    {
      step: "01",
      title: "Written Communication Required",
      description:
        "Cancellation of services must be communicated to HD Media Network in writing at least 2 days prior to the scheduled start date of the services.",
    },
    {
      step: "02",
      title: "Submit Refund Request",
      description:
        "Contact support@hdmedianetwork.in within 5 days of service initiation with a detailed description of issues and supporting documentation.",
    },
    {
      step: "03",
      title: "Review Process",
      description:
        "HD Media Network will review your request within 14 days and determine eligibility based on our refund policy criteria.",
    },
    {
      step: "04",
      title: "Refund Processing",
      description:
        "If approved, refunds are processed according to the original payment method used for the transaction.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Refund Policy | HD Media Network</title>
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
        <meta
          property="og:url"
          content="https://hdmedianetwork.in/refundpolicy"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | HD Media Network" />
        <meta
          name="twitter:description"
          content="Learn about HD Media Network’s journey, expertise, and the values that drive us forward."
        />
        <link
          rel="canonical"
          href="https://hdmedianetwork.in/refundpolicy"
        />
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
                <Shield className="w-4 h-4 mr-2" />
                High-quality IT services guarantee
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Refund Policy
                <br />
                <span className="text-purple-600">Fair & Transparent</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                HD Media Network aims to provide high-quality IT services to our
                clients. In the event that you are dissatisfied with our
                services, we offer a refund under specific conditions.
              </motion.p>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-gray-500"
              >
                Effective Date: December 14, 2023
              </motion.div>
            </div>
          </div>
        </section>

        {/* Policy Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Refund Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're committed to delivering exceptional IT services. Our
                refund policy ensures transparency and fairness in addressing
                any concerns you may have.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Eligible for Refund */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Refund Eligibility
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {eligibilityItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Not Eligible for Refund */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Non-Refundable Items
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {nonRefundableItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cancellation Policy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cancellation of services must be communicated in writing at
                least 2 days prior to the scheduled start date. If you cancel
                within 5 days of the start date, a cancellation fee may apply.
              </p>
            </motion.div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-16">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3" />
                <h3 className="text-lg font-semibold text-amber-800">
                  Important Note
                </h3>
              </div>
              <p className="text-amber-700 leading-relaxed">
                Cancellations within 5 days of the scheduled start date may
                incur a cancellation fee. Please plan accordingly and
                communicate any changes as early as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Request a Refund
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Follow these steps to request a refund. We're committed to
                addressing your concerns promptly and fairly.
              </p>
            </motion.div>

            <div className="space-y-8">
              {cancellationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Changes */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Changes to Refund Policy
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  HD Media Network reserves the right to modify or amend this
                  refund policy at any time. Clients will be notified of any
                  changes, and the updated policy will be effective for all
                  future transactions. By engaging with our services, you
                  acknowledge that you have read, understood, and agree to this
                  Refund Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Need Help with a Refund?
              </h2>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our support team is ready to assist you with any refund-related
                questions or concerns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="mailto:support@hdmedianetwork.in"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <Mail className="w-8 h-8 mx-auto mb-4 text-slate-200" />
                <h3 className="text-lg font-semibold mb-2 text-slate-200">
                  Primary Support
                </h3>
                <p className="text-purple-100 text-sm">
                  support@hdmedianetwork.in
                </p>
              </motion.a>

              <motion.a
                href="mailto:support@hdmedianetwork.in"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 text-slate-200 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <PhoneCall className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-20 text-slate-200">
                  Alternative Support
                </h3>
                <p className="text-slate-200 text-sm">+91 75096 83151</p>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-slate-200 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-200">
                  Office Address
                </h3>
                <p className="text-purple-100 text-sm">
                  📍BT-1, BIO TECHNOLOGY PARK, Sitapura
                  <br />
                  Jaipur, Rajasthan 302022 India
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RefundPolicyPage;

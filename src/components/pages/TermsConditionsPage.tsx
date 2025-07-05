import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  Globe,
  AlertTriangle,
  CheckCircle,
  Scale,
  Lock,
  CreditCard,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TermsConditionsPage: React.FC = () => {
  const mainTerms = [
    {
      title: "1. Introduction",
      content: [
        'These Terms and Conditions ("Terms") govern the provision of IT services by HD Media Network, a company registered in Jaipur, Rajasthan ("Company").',
        "By engaging with or using our Services, you agree to be bound by these Terms.",
        "If you do not agree with any part of these Terms, you may not use our Services.",
      ],
    },
    {
      title: "2. Service Description",
      content: [
        'HD Media Network agrees to provide IT services as described in the agreed-upon Statement of Work ("SOW") or Proposal.',
        "The scope, deliverables, and timelines will be outlined in the SOW.",
      ],
    },
    {
      title: "3. Client Responsibilities",
      content: [
        "The client agrees to provide necessary cooperation, access to information, and resources to facilitate the timely delivery of the Services.",
        "Failure to do so may result in delays, and HD Media Network will not be held responsible for any resulting issues.",
      ],
    },
    {
      title: "4. Fees and Payment Terms",
      content: [
        "The client agrees to pay HD Media Network the agreed-upon fees as outlined in the SOW or Proposal.",
        "Payment terms, including invoicing schedules and methods, will be specified in the agreement.",
      ],
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All intellectual property developed or provided by HD Media Network as part of the Services will remain the property of HD Media Network unless otherwise agreed upon in writing.",
        "The client is granted a non-exclusive, non-transferable license to use any deliverables solely for its internal business purposes.",
      ],
    },
    {
      title: "6. Confidentiality",
      content: [
        "Both parties agree to keep confidential any proprietary or confidential information obtained during the provision of Services.",
        "This obligation extends beyond the termination of the agreement.",
      ],
    },
    {
      title: "7. Termination",
      content: [
        "Either party may terminate the agreement in the event of a material breach by the other party.",
        "Termination for convenience may also be allowed, subject to terms outlined in the agreement.",
      ],
    },
    {
      title: "8. Warranty and Liability",
      content: [
        "HD Media Network warrants that the Services will be performed in a professional manner.",
        "The client agrees to report any deficiencies promptly.",
        "HD Media Network's liability will be limited to the fees paid for the specific Services causing the claim.",
      ],
    },
    {
      title: "9. Force Majeure",
      content: [
        "Neither party shall be liable for any failure or delay in performance due to events beyond their control.",
        "Such events include acts of nature, war, terrorism, or other unforeseen circumstances.",
      ],
    },
    {
      title: "10. Governing Law and Dispute Resolution",
      content: [
        "These Terms are governed by the laws of Rajasthan, India.",
        "Any disputes arising out of or in connection with these Terms will be resolved through arbitration in accordance with the rules of the Arbitration Organization and held in Jaipur, Rajasthan.",
      ],
    },
    {
      title: "11. Amendments",
      content: [
        "These Terms may only be amended in writing and signed by both parties.",
        "By engaging with our Services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.",
        "If you have any questions, please contact support@hdmedianetwork.in",
      ],
    },
  ];

  const refundPolicyItems = [
    {
      title: "1. Refund Eligibility",
      content: [
        "HD Media Network aims to provide high-quality IT services to our clients. In the event that you are dissatisfied with our services, we offer a refund under the following conditions:",
        "• The client has reported issues promptly, providing reasonable time for HD Media Network to address and rectify the concerns.",
        "• The issues reported are directly related to the services provided by HD Media Network and are not a result of actions or changes made by the client or third parties.",
      ],
    },
    {
      title: "2. Refund Process",
      content: [
        "To commence the process of requesting a refund after services have commenced, the client needs to reach out to HD Media Network via support@hdmedianetwork.online within 5 days of the service initiation.",
        "The refund request must include a detailed description of the issues and any supporting documentation.",
        "HD Media Network will review the request within 14 days and, if deemed eligible, will process the refund according to the payment method used for the original transaction.",
      ],
    },
    {
      title: "3. Refund Amount",
      content: [
        "The refund amount will be limited to the fees paid by the client for the specific services causing the refund request.",
        "Any additional costs incurred by the client, such as third-party expenses, will not be refunded.",
      ],
    },
    {
      title: "4. Non-Refundable Items",
      content: [
        "Certain items or services may be non-refundable. These may include but are not limited to:",
        "• Customized or personalized services",
        "• Third-party licenses or services",
        "• Services explicitly stated as non-refundable in the agreement or Statement of Work",
      ],
    },
    {
      title: "5. Cancellation Policy",
      content: [
        "Cancellation of services must be communicated to HD Media Network in writing at least 2 days prior to the scheduled start date of the services.",
        "If the client cancels within 5 days of the start date, a cancellation fee may apply.",
      ],
    },
    {
      title: "6. Changes to Refund Policy",
      content: [
        "HD Media Network reserves the right to modify or amend this refund policy at any time.",
        "Clients will be notified of any changes, and the updated policy will be effective for all future transactions.",
        "By engaging with our services, you acknowledge that you have read, understood, and agree to this Refund Policy.",
        "If you have any questions, please contact support@hdmedianetwork.online.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | HD Media Network</title>
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
        <meta property="og:url" content="https://hdmedianetwork.in/termsandconditions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | HD Media Network" />
        <meta
          name="twitter:description"
          content="Learn about HD Media Network’s journey, expertise, and the values that drive us forward."
        />
        <link rel="canonical" href="https://hdmedianetwork.in/termsandconditions" />
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
                <Scale className="w-4 h-4 mr-2" />
                Legal framework for our services
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Terms & Conditions
                <br />
                <span className="text-purple-600">HD Media Network</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                These terms and conditions outline the rules and regulations for
                the use of HD Media Network's services and establish the legal
                framework for our business relationship.
              </motion.p>

              {/* Effective Date */}
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

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {mainTerms.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                >
                  <h3 className="text-xl font-bold text-purple-600 mb-6">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    {item.content.map((content, contentIndex) => (
                      <motion.div
                        key={contentIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: contentIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">
                          {content}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Important Legal Notice
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Acknowledgment:</strong> By engaging with our
                      services, you acknowledge that you have read, understood,
                      and agree to these Terms and Conditions.
                    </p>
                    <p>
                      <strong>Governing Law:</strong> These Terms are governed
                      by the laws of Rajasthan, India, and any disputes will be
                      resolved through arbitration in Jaipur, Rajasthan.
                    </p>
                    <p>
                      <strong>Amendments:</strong> These Terms may only be
                      amended in writing and signed by both parties. We reserve
                      the right to update these terms with proper notification
                      to clients.
                    </p>
                    <p>
                      <strong>Questions:</strong> If you have any questions
                      about these terms, please contact our support team at
                      support@hdmedianetwork.in.
                    </p>
                  </div>
                </div>
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
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our support team is available to clarify any questions about
                these terms and conditions or assist with refund requests.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-200 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <Link to="/faq">General Inquiries</Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-slate-200 text-slate font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-black flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <Link to="/refundpolicy">Refund Support</Link>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditionsPage;

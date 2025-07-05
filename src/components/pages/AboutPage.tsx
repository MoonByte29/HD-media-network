import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Code,
  Lightbulb,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Building2,
  Rocket,
  Shield,
  Zap,
  Star,
  Trophy,
} from "lucide-react";
import hd from "../../assets/hd.jpg";
import { Helmet } from "react-helmet-async";

const AboutPage: React.FC = () => {
  const companyStats = [
    {
      icon: Building2,
      number: "2022",
      label: "Founded",
      description: "Established with a vision to transform businesses",
    },
    {
      icon: Users,
      number: "120+",
      label: "Happy Clients",
      description: "Trusted by companies worldwide",
    },
    {
      icon: Trophy,
      number: "200+",
      label: "Projects Completed",
      description: "Successful digital transformations",
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "Global reach with local expertise",
    },
  ];

  const founderAchievements = [
    {
      icon: Award,
      number: "2+",
      label: "Years Experience",
      description: "In software development and digital innovation",
    },
    {
      icon: Star,
      number: "95%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
    },
    {
      icon: Rocket,
      number: "50+",
      label: "Startups Helped",
      description: "From concept to successful launch",
    },
    {
      icon: Code,
      number: "100+",
      label: "Technologies",
      description: "Mastered across multiple domains",
    },
  ];

  const companyValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing and quality checks to ensure exceptional results.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships through transparent communication.",
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description:
        "Fast, iterative development cycles that adapt to your evolving business needs.",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Technical Leadership",
      description:
        "Leading cross-functional teams and architecting scalable platforms",
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Aligning technical execution with business objectives",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Exploring emerging technologies and creating cutting-edge solutions",
    },
    {
      icon: Heart,
      title: "Human-Centered Design",
      description: "Creating meaningful experiences that solve real problems",
    },
  ];

  const services = [
    "Custom Web Applications",
    "Mobile App Development",
    "Digital Marketing Solutions",
    "Cloud Infrastructure",
    "E-commerce Platforms",
    "CRM/ERP Systems",
  ];

  return (
    <>
      <Helmet>
        <title>About Us | HD Media Network</title>
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
        <meta property="og:url" content="https://hdmedianetwork.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | HD Media Network" />
        <meta
          name="twitter:description"
          content="Learn about HD Media Network’s journey, expertise, and the values that drive us forward."
        />
        <link rel="canonical" href="https://hdmedianetwork.in/about" />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gray-50">
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
                About HD Media Network
                <br />
                <span className="text-purple-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  & Our Founder
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Discover the story behind our innovative digital solutions and
                meet the visionary leader driving transformation across
                industries.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {["Innovation Driven", "Client Focused", "Global Reach"].map(
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

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Company Story */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Company Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-purple-600">
                      HD Media Network
                    </strong>{" "}
                    was founded in 2022 with a simple yet powerful vision: to
                    help businesses thrive in the digital landscape through
                    innovative technology solutions.
                  </p>
                  <p>
                    What started as a passion project has evolved into a trusted
                    partner for companies worldwide, delivering exceptional
                    digital experiences that drive real business results.
                  </p>
                  <p>
                    We specialize in creating custom digital solutions that are
                    not just technically sound, but strategically aligned with
                    our clients' business objectives. From startups to
                    enterprise-level organizations, we've helped transform ideas
                    into successful digital realities.
                  </p>
                </div>

                {/* Services List */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Core Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <ArrowRight className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700 font-medium text-sm">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Company Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-black mb-2">
                      {stat.label}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Company Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founder
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The visionary leader driving innovation at{" "}
                <span className="font-semibold text-purple-600">
                  HD Media Network
                </span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Founder Image and Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  {/* Professional placeholder image */}
                  <div className="w-full max-w-md mx-auto aspect-square bg-purple-100 rounded-2xl shadow-2xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={hd} alt="Hardik" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400 rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Name and Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Hardik Sharma
                  </h3>
                  <p className="text-xl text-purple-600 font-semibold mb-4">
                    Founder & CEO
                  </p>
                  <div className="flex justify-center space-x-4">
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Tech Entrepreneur
                    </span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      Innovation Leader
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    The Driving Force Behind Innovation
                  </h4>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-purple-600">Hardik Sharma</strong>{" "}
                      is a passionate innovator and tech entrepreneur with a
                      clear mission—help businesses thrive in the digital
                      landscape through intelligent, scalable solutions.
                    </p>

                    <p>
                      With over a decade of experience in{" "}
                      <strong className="text-gray-900">
                        software development, digital marketing, web
                        technologies
                      </strong>
                      , and{" "}
                      <strong className="text-gray-900">
                        cloud infrastructure
                      </strong>
                      , Hardik has been instrumental in launching successful
                      digital products across industries.
                    </p>

                    <p>
                      Starting as a self-taught programmer, Hardik has evolved
                      into a strategic leader who combines technical expertise
                      with business acumen. His hands-on approach ensures deep
                      understanding of client needs and strategic alignment with
                      technical execution.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Founder Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Founder's Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {founderAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-500 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-black mb-2">
                      {achievement.label}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 bg-slate-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
                Our Vision & Mission
              </h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-purple-100 mb-8">
                "Always eager to explore emerging technologies and collaborative
                opportunities, we're committed to creating meaningful digital
                experiences that not only solve problems but also inspire
                innovation and drive long-term growth for businesses worldwide."
              </p>
              <div className="mt-8">
                <span className="text-2xl font-bold">
                  — Hardik Sharma, Founder & CEO
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

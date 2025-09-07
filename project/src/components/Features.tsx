import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Protection',
    description: 'Full legal coverage for your business and personal matters with proven expertise.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned attorneys with decades of combined experience across multiple practice areas.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock legal assistance when you need it most, ensuring peace of mind.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Track record of successful cases and satisfied clients with measurable outcomes.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Why Choose Sutan Legal Corp?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine legal expertise with personalized service to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-serif font-bold">Sutan Legal Corp</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional legal services with integrity, expertise, and dedication to our clients' success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/surajnandan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Business Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Employment Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Real Estate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contract Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Family Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Personal Injury</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Our Attorneys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Case Results</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Legal Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 6203484989</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">surajnandan78@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Kishanganj<br />Bihar 855107<br />India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h5 className="font-semibold mb-2">Attorney Disclaimer</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              The information provided on this website is for general informational purposes only and does not constitute legal advice. 
              No attorney-client relationship is established by viewing this website or contacting our firm. 
              Each case is unique, and you should not act or rely on any information on this website without seeking the advice of a qualified attorney.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Sutan Legal Corp. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
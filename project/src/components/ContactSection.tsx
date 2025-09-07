import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, Briefcase, Home } from 'lucide-react';

const quickQuestions = [
  { icon: FileText, text: "Contract Review", category: "Business Law" },
  { icon: Briefcase, text: "Employment Issue", category: "Labor Law" },
  { icon: Home, text: "Real Estate Matter", category: "Property Law" }
];

const ContactSection = () => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setQuery('');
      alert('Your question has been received. We\'ll get back to you within 24 hours!');
    }, 2000);
  };

  const handleQuickQuestion = (questionText: string) => {
    setQuery(questionText);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Get Legal Help Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ask your question below or choose from common legal inquiries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your legal question or concern in detail..."
                className="w-full p-6 border-2 border-gray-200 rounded-xl resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-lg"
                rows={6}
                aria-label="Legal question input"
              />
              <button
                type="submit"
                disabled={!query.trim() || isSubmitting}
                className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors group"
                aria-label="Send question"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'}`} />
              </button>
            </div>
          </form>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {quickQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleQuickQuestion(question.text)}
                  className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left group"
                >
                  <question.icon className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-gray-900">{question.text}</div>
                  <div className="text-sm text-gray-600">{question.category}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600"
        >
          <p>Free initial consultation • Confidential • No obligation</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
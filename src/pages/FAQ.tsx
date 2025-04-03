import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What types of dental courses do you offer?',
    answer: 'We offer comprehensive courses in Advanced Implant Dentistry and General Dentistry Masterclass. Our programs are designed for dental professionals looking to enhance their skills and knowledge in specific areas of dentistry.',
  },
  {
    question: 'How long are the courses?',
    answer: 'Course duration varies by program. The Advanced Implant Dentistry course runs for 6 months, while the General Dentistry Masterclass is a 3-month program. Both include theoretical and practical components.',
  },
  {
    question: 'What are your payment options for courses?',
    answer: 'We offer flexible payment plans including full payment, installment options, and early bird discounts. Please contact our education department for detailed information about current pricing and payment plans.',
  },
  {
    question: 'Do you provide certification upon course completion?',
    answer: 'Yes, all our courses provide official certification upon successful completion. Our certificates are recognized by major dental associations and institutions.',
  },
  {
    question: 'What is included in the course fees?',
    answer: 'Course fees include all learning materials, practical sessions, assessment fees, and certification. Some courses may require additional materials or equipment, which will be clearly communicated before enrollment.',
  },
  {
    question: 'Can I book a consultation before starting treatment?',
    answer: "Yes, we encourage initial consultations for all new patients. During this session, we'll discuss your dental concerns, examine your oral health, and create a personalized treatment plan.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our services and courses</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="px-6 py-4 bg-gray-50"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
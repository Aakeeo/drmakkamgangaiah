import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, BookOpen, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Excellence in Dental Care & Education
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Providing top-tier dental services and professional education for the next generation of dental practitioners.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-x-4"
            >
              <Link 
                to="/courses" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center"
              >
                Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg inline-flex items-center"
              >
                Book Appointment <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">General Dentistry</h3>
              <p className="text-gray-600 mb-4">Comprehensive dental care including cleanings, fillings, and preventive treatments.</p>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Implant Dentistry</h3>
              <p className="text-gray-600 mb-4">State-of-the-art dental implant procedures and restorative solutions.</p>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Dental Education</h3>
              <p className="text-gray-600 mb-4">Professional courses and training programs for dental practitioners.</p>
              <Link to="/courses" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
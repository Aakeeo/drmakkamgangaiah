import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
              DentEssence
              <span className="text-blue-400">Pro</span>
            </h1>
            <div className="h-1 w-24 bg-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Where Dental Excellence Meets Professional Education, 
            Setting New Standards in Oral Healthcare
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <a 
              href="#courses" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg inline-flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#services" 
          className="text-white animate-bounce inline-block"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope, Users, BookOpen, Star, Building2, Microscope, Lightbulb } from 'lucide-react';

const Profile = () => {
  return (
    <section id="profile" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="relative mb-24 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative p-8 md:p-12">
            <div className="text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-3">Dr. Makam Gangaiah</h2>
                <p className="text-xl md:text-2xl text-primary-100 mb-2">MDS - Prosthodontics</p>
                <p className="text-lg text-primary-200">Prosthodontist and Implantologist</p>
                <div className="mt-4 inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Building2 className="h-5 w-5 mr-2" />
                  <span>Ex Professor at Raja Rajeshwari Dental College and Hospital</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card p-8 border-t-4 border-primary-600"
          >
            <GraduationCap className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
            <ul className="space-y-3">
              {[
                'BDS - Bachelor of Dental Surgery',
                'MDS - Master of Dental Surgery (Prosthodontics)',
                'FBOCI - Fellow of British Academy of Clinical Implantology',
                'FDTRDO - Fellow of Digital Technology in Restorative Dentistry and Orthodontics'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card p-8 border-t-4 border-primary-600"
          >
            <Microscope className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Clinical Expertise</h3>
            <ul className="space-y-3">
              {[
                'Advanced Implant Dentistry',
                'Complex Prosthodontic Cases',
                'Digital Smile Design',
                'Full Mouth Rehabilitation',
                'Digital Workflow Integration'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card p-8 border-t-4 border-primary-600"
          >
            <Lightbulb className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Teaching Excellence</h3>
            <ul className="space-y-3">
              {[
                'Former Professor at RRDCH',
                'International Workshop Conductor',
                'Clinical Training Expert',
                'Digital Dentistry Mentor',
                'Research Publications'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-secondary-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
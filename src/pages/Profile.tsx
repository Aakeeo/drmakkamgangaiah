import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope } from 'lucide-react';

const Profile = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Profile Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              alt="Dr. Sarah Johnson"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h1>
            <p className="text-xl text-blue-600">Lead Dental Surgeon & Education Director</p>
          </motion.div>
        </div>

        {/* Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Education</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Doctor of Dental Surgery (DDS) - Harvard School of Dental Medicine</li>
              <li>Masters in Implant Dentistry - NYU College of Dentistry</li>
              <li>Advanced Certificate in Prosthodontics - Columbia University</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Certifications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Board Certified Implant Specialist</li>
              <li>American Academy of Implant Dentistry Fellow</li>
              <li>Certified Dental Educator</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Specialties</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Dental Implant Surgery</li>
              <li>Advanced Prosthodontics</li>
              <li>Dental Education & Training</li>
            </ul>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">About Dr. Johnson</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              With over 15 years of experience in dental surgery and education, Dr. Sarah Johnson has established herself as a leading figure in implant dentistry and professional dental education. Her innovative approach to dental care combines cutting-edge techniques with a deep commitment to patient comfort and education.
            </p>
            <p className="mb-4">
              Dr. Johnson has successfully performed over 5,000 implant procedures and trained more than 1,000 dental professionals through her comprehensive education programs. Her teaching methodology emphasizes hands-on experience and practical application of advanced dental techniques.
            </p>
            <p>
              As the founder of DentalCare Pro's education division, she has developed a curriculum that bridges the gap between theoretical knowledge and clinical practice, helping dental professionals advance their careers and provide better patient care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
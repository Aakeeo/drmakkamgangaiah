import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Clock, Users } from 'lucide-react';

const courses = [
  {
    title: 'Advanced Implant Dentistry',
    duration: '6 months',
    capacity: '15 students',
    description: 'Comprehensive training in modern implant techniques and procedures.',
    syllabus: '/path/to/implant-syllabus.pdf',
    topics: [
      'Treatment Planning',
      'Surgical Techniques',
      'Prosthetic Considerations',
      'Complex Cases',
    ],
  },
  {
    title: 'General Dentistry Masterclass',
    duration: '3 months',
    capacity: '20 students',
    description: 'Essential skills and latest developments in general dentistry.',
    syllabus: '/path/to/general-syllabus.pdf',
    topics: [
      'Preventive Care',
      'Restorative Procedures',
      'Patient Management',
      'Emergency Care',
    ],
  },
];

const Courses = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Dental Courses</h1>
          <p className="text-xl text-gray-600">Advance your career with our specialized dental education programs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    {course.capacity}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Topics</h3>
                  <ul className="space-y-2">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-center text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    Enroll Now
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Syllabus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
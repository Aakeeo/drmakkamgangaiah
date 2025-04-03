import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  modules: {
    title: string;
    description: string;
  }[];
}

const courses: Course[] = [
  {
    title: 'Advanced Implant Dentistry',
    description: 'A comprehensive hands-on program led by Dr. Makam Gangaiah, combining theoretical knowledge with practical experience in implant dentistry.',
    modules: [
      {
        title: 'Fundamentals of Implantology',
        description: 'Core principles, treatment protocols, and case selection criteria.'
      },
      {
        title: 'Practical Training & Simulation',
        description: 'Hands-on experience with implant placement tools and techniques.'
      },
      {
        title: 'Advanced Treatment Planning',
        description: 'CBCT interpretation, 3D visualization, and guided surgery principles.'
      },
      {
        title: 'Clinical Practice',
        description: 'Live patient cases and surgical procedure training.'
      },
      {
        title: 'Prosthetic Considerations',
        description: 'Impression techniques, abutment selection, and prosthetic design.'
      }
    ]
  },
  {
    title: 'General Dentistry Masterclass',
    description: 'A comprehensive program covering all aspects of general dentistry, from diagnosis to advanced procedures.',
    modules: [
      {
        title: 'Diagnosis & Treatment Planning',
        description: 'Comprehensive examination, radiographic interpretation, and treatment strategies.'
      },
      {
        title: 'Conservative & Preventive Dentistry',
        description: 'Modern restorative techniques and minimally invasive procedures.'
      },
      {
        title: 'Endodontics',
        description: 'Root canal therapy, access preparation, and obturation techniques.'
      },
      {
        title: 'Crown & Bridge Procedures',
        description: 'Crown preparation, tissue management, and temporary fabrication.'
      },
      {
        title: 'Oral Surgery',
        description: 'Extraction techniques, flap design, and post-operative care.'
      },
      {
        title: 'Emergency Care',
        description: 'Managing dental emergencies and acute pain conditions.'
      }
    ]
  }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
          <p className="text-gray-600 mb-6">{course.description}</p>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Course Modules
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.modules.map((module, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">{module.title}</h5>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Dental Courses</h2>
          <p className="text-xl text-gray-600">Advance your career with our specialized dental education programs</p>
        </motion.div>

        <div className="space-y-12">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
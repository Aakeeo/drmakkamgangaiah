import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  education: string[];
  experience: string[];
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Makam Gangaiah',
    role: 'Lead Prosthodontist & Program Director',
    specialization: 'Implant Dentistry & Prosthodontics',
    education: [
      'MDS - Prosthodontics',
      'Advanced Certification in Implantology',
      'Digital Dentistry Fellowship'
    ],
    experience: [
      'FBOCI - Fellow of British Academy of Clinical Implantology',
      'FDTRDO - Fellow of Digital Technology in Restorative Dentistry'
    ],
    description: ''
  },
  {
    name: 'Prof. Dr. Sowmya Gangaiah',
    role: 'Orthodontist & Dentofacial Orthopaedician',
    specialization: 'BDS, MDS',
    education: [
      'Bachelor of Dental Surgery - M.S. Ramaiah Faculty of Dental Sciences, Bengaluru (2003)',
      'MDS in Orthodontics & Dentofacial Orthopaedics - A.B.Shetty Memorial Institute of Dental Sciences (2008)'
    ],
    experience: [
      'Leading orthodontist in Bengaluru',
      'Lecturer experience in clinical training',
      '14+ Years of Clinical Experience'
    ],
    description: 'Prof. Dr. Sowmya Gangaiah is a best and leading well known orthodontist in Bengaluru. She worked as lecturer in the same university for 1 year training undergraduates in clinicals and academics.'
  },
  {
    name: 'Dr. G Praveen Kumar',
    role: 'Dental Surgeon',
    specialization: 'BDS, FBOCI',
    education: [
      'Bachelor of Dental Surgery (BDS)',
      'Fellow of British Academy of Clinical Implantology (FBOCI)'
    ],
    experience: [
      '8+ years of clinical practice',
      'Expert in dental implant procedures',
      'Specialized in advanced dental surgeries',
      'Comprehensive patient care specialist'
    ],
    description: 'Dr. G Praveen Kumar brings 8 years of dedicated experience in dental surgery and implantology. His expertise in clinical practice and commitment to patient care has established him as a trusted dental professional.'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600">Meet our experienced professionals dedicated to dental excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.specialization}</p>
              </div>

              {member.description && (
                <p className="text-gray-600 mb-6 text-sm">{member.description}</p>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    Education
                  </h4>
                  <ul className="space-y-1">
                    {member.education.map((edu, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">{edu}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <ul className="space-y-1">
                    {member.experience.map((exp, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
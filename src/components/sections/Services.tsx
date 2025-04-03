import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Award, 
  BookOpen, 
  ChevronRight, 
  Bluetooth as Tooth, 
  Syringe, 
  Microscope, 
  Calendar, 
  CheckCircle2, 
  Clock,
  Users,
  Smile,
  Scan,
  Timer,
  HeartPulse
} from 'lucide-react';
import Modal from '../Modal';

const serviceDetails = {
  general: {
    title: 'General Dentistry',
    description: 'Comprehensive dental care for your entire family',
    features: [
      {
        icon: <Tooth className="h-6 w-6 text-blue-600" />,
        title: 'Preventive Care',
        description: 'Regular check-ups, cleanings, and early detection of dental issues'
      },
      {
        icon: <Microscope className="h-6 w-6 text-blue-600" />,
        title: 'Diagnostic Services',
        description: 'Advanced imaging and comprehensive oral examinations'
      },
      {
        icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />,
        title: 'Restorative Treatments',
        description: 'Fillings, crowns, and bridges using premium materials'
      }
    ],
    procedures: [
      'Dental Cleanings',
      'Cavity Fillings',
      'Root Canal Therapy',
      'Gum Disease Treatment',
      'Emergency Dental Care'
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80'
  },
  orthodontic: {
    title: 'Orthodontic Therapy',
    description: 'Advanced orthodontic treatments and clear aligner therapy for a perfect smile',
    features: [
      {
        icon: <Scan className="h-6 w-6 text-blue-600" />,
        title: '3D Digital Planning',
        description: 'Custom treatment planning using advanced 3D scanning technology'
      },
      {
        icon: <Smile className="h-6 w-6 text-blue-600" />,
        title: 'Clear Aligners',
        description: 'Invisible alignment solution for discrete teeth straightening'
      },
      {
        icon: <HeartPulse className="h-6 w-6 text-blue-600" />,
        title: 'Personalized Care',
        description: 'Treatment plans tailored to your unique dental needs'
      }
    ],
    procedures: [
      'Clear Aligner Therapy',
      'Traditional Braces',
      'Ceramic Braces',
      'Retainers',
      'Bite Correction',
      'Early Intervention Treatment'
    ],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80'
  },
  implant: {
    title: 'Implant Dentistry',
    description: 'State-of-the-art implant solutions for missing teeth',
    features: [
      {
        icon: <Syringe className="h-6 w-6 text-blue-600" />,
        title: 'Advanced Technology',
        description: '3D imaging and computer-guided implant placement'
      },
      {
        icon: <Calendar className="h-6 w-6 text-blue-600" />,
        title: 'Treatment Planning',
        description: 'Personalized implant strategies for optimal results'
      },
      {
        icon: <Clock className="h-6 w-6 text-blue-600" />,
        title: 'Efficient Recovery',
        description: 'Minimally invasive techniques for faster healing'
      }
    ],
    procedures: [
      'Single Tooth Implants',
      'Full Arch Replacements',
      'Implant-Supported Bridges',
      'All-on-4 Dental Implants',
      'Bone Grafting'
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80'
  },
  education: {
    title: 'Dental Education',
    description: 'Professional development for dental practitioners',
    features: [
      {
        icon: <BookOpen className="h-6 w-6 text-blue-600" />,
        title: 'Comprehensive Curriculum',
        description: 'Theory and hands-on practical training'
      },
      {
        icon: <Award className="h-6 w-6 text-blue-600" />,
        title: 'Certification',
        description: 'Internationally recognized qualifications'
      },
      {
        icon: <Users className="h-6 w-6 text-blue-600" />,
        title: 'Expert Mentorship',
        description: 'Learn from industry-leading professionals'
      }
    ],
    procedures: [
      'Advanced Implant Techniques',
      'Digital Dentistry',
      'Practice Management',
      'Patient Communication',
      'Clinical Photography'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<keyof typeof serviceDetails | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">General Dentistry</h3>
            <p className="text-gray-600 mb-4">Comprehensive dental care including cleanings, fillings, and preventive treatments.</p>
            <button 
              onClick={() => setSelectedService('general')}
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Smile className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Orthodontic Therapy</h3>
            <p className="text-gray-600 mb-4">Expert orthodontic care with clear aligners and traditional braces options.</p>
            <button 
              onClick={() => setSelectedService('orthodontic')}
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Implant Dentistry</h3>
            <p className="text-gray-600 mb-4">State-of-the-art dental implant procedures and restorative solutions.</p>
            <button 
              onClick={() => setSelectedService('implant')}
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Dental Education</h3>
            <p className="text-gray-600 mb-4">Professional courses and training programs for dental practitioners.</p>
            <button 
              onClick={() => setSelectedService('education')}
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="p-6 sm:p-8">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src={serviceDetails[selectedService].image}
                alt={serviceDetails[selectedService].title}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{serviceDetails[selectedService].title}</h3>
            <p className="text-gray-600 mb-8">{serviceDetails[selectedService].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {serviceDetails[selectedService].features.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  {feature.icon}
                  <h4 className="font-semibold mt-3 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Available Procedures & Services:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceDetails[selectedService].procedures.map((procedure, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    {procedure}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;
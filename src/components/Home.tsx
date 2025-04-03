import React from 'react';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Profile from './sections/Profile';
import Courses from './sections/Courses';
import Team from './sections/Team';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Services - Light pattern background */}
      <div className="section-pattern">
        <Services />
      </div>
      
      {/* Profile - Blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <Profile />
      </div>
      
      {/* Courses - White background */}
      <div className="bg-white">
        <Courses />
      </div>

      {/* Team - Blue gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100">
        <Team />
      </div>
      
      {/* Contact - Clean white */}
      <div className="bg-white">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
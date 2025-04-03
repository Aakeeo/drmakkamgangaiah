import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Profile', href: '#profile' },
    { name: 'Courses', href: '#courses' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center group">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-secondary-900' : 'text-white'} font-display tracking-tight`}>
                DentEssence<span className="text-primary-400">Pro</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled 
                    ? 'text-secondary-600 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                } px-5 py-2 text-sm font-medium transition-colors relative group`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-secondary-600' : 'text-white'} hover:text-primary-400`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-secondary-600 hover:bg-primary-50 hover:text-primary-600 px-4 py-3 text-base font-medium border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
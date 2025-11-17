'use client';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: 'Audit Defense', path: '/services/audit-defense' },
    { name: 'Managed Services', path: '/services/managed-services' },
    { name: 'License Optimization', path: '/services/license-optimization' },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setIsServicesOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="SAM Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white font-semibold tracking-wider text-lg">
              Aniva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* About Link */}
            <button
              onClick={() => handleNavClick('/#about')}
              className="relative text-sm font-medium tracking-wide transition-all duration-300 text-gray-300 hover:text-white group cursor-pointer"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-white/70 to-white/20 transition-all duration-500 group-hover:w-full" />
            </button>

            {/* Services Dropdown */}
            <div
              className="relative group/services"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => handleNavClick('/#services')}
                className="relative text-sm font-medium tracking-wide transition-all duration-300 text-gray-300 hover:text-white group cursor-pointer flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-white/70 to-white/20 transition-all duration-500 group-hover:w-full" />
              </button>

              {/* Dropdown Menu with padding area for easier hover */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                  isServicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                  {services.map((service, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(service.path)}
                      className="w-full text-left px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Link */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="relative text-sm font-medium tracking-wide transition-all duration-300 text-white group cursor-pointer"
            >
              Contact Us
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-white/70 to-white/20 transition-all duration-500 group-hover:w-full" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white transition-colors z-50"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-zinc-950/90 to-black/95 
                      border-l border-white/10 p-8 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-6 mt-20">
            {/* About */}
            <button
              onClick={() => handleNavClick('/#about')}
              className="text-left text-lg font-medium transition-colors text-gray-300 hover:text-white"
            >
              About
            </button>

            {/* Services with Mobile Accordion */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-lg font-medium transition-colors text-gray-300 hover:text-white flex items-center justify-between"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'max-h-96 mt-3' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                  {services.map((service, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(service.path)}
                      className="text-left text-base font-normal text-gray-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="text-left text-lg font-medium transition-colors text-white hover:text-primary"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
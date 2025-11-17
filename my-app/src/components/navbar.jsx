import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-pink-300 flex justify-between items-center px-8 py-5 font-sans shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-gray-800 tracking-tight">Kimberly Michela</div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        {links.map(({ name, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                path === href
                  ? 'text-blue-600 bg-blue-100'
                  : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
        <div className={`absolute top-0 right-0 h-full w-64 bg-pink-300 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-gray-800 rotate-45"></span>
              <span className="block w-6 h-0.5 bg-gray-800 -rotate-45 -mt-0.5"></span>
            </button>
          </div>
          <ul className="px-6 py-4 space-y-4">
            {links.map(({ name, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    path === href
                      ? 'text-blue-600 bg-blue-100'
                      : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

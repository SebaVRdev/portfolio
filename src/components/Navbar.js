'use client'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-opacity duration-300 z-50 ${isScrolled ? 'bg-gray-900 opacity-80' : 'bg-gray-900 opacity-100'} py-4`}>
      <div className="container mx-auto flex justify-center space-x-8">
        {/* Enlaces con color blanco */}
        <a href="#home" className={`text-white hover:text-gray-400 transition duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>Inicio</a>
        <a href="#projects" className={`text-white hover:text-gray-400 transition duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>Proyectos</a>
        <a href="#about" className={`text-white hover:text-gray-400 transition duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>Sobre mí</a>
        <a href="#contact" className={`text-white hover:text-gray-400 transition duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;

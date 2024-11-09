'use client'
import { useEffect, useState } from 'react';

const Navbar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determina si se está desplazando hacia abajo o hacia arriba
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-opacity duration-300 z-50 ${isScrolled ? 'bg-black opacity-100' : 'bg-black opacity-100'} py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Icono de hamburguesa */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none transition-transform duration-300">
            {menuOpen ? (
              <svg className="w-8 h-8 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        <div></div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-gray-400 transition duration-300">Inicio</a>
          <a href="#projects" className="text-white hover:text-gray-400 transition duration-300">Proyectos</a>
          <a href="#about" className="text-white hover:text-gray-400 transition duration-300">Sobre mí</a>
          <a href="#contact" className="text-white hover:text-gray-400 transition duration-300">Contacto</a>
        </div>
        <div></div>
    </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div
        className={`md:hidden bg-black text-white flex flex-col items-center overflow-hidden transition-all duration-300 
        ${menuOpen ? 'max-h-60 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4 pointer-events-none'}`}
      >
        <a href="#home" className="py-2 hover:text-gray-400 transition duration-300">Inicio</a>
        <a href="#projects" className="py-2 hover:text-gray-400 transition duration-300">Proyectos</a>
        <a href="#about" className="py-2 hover:text-gray-400 transition duration-300">Sobre mí</a>
        <a href="#contact" className="py-2 hover:text-gray-400 transition duration-300">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar2;
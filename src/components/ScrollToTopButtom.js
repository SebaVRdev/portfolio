'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'; // Ícono de flecha hacia arriba

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);  

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`}
    >
      <button 
        onClick={scrollToTop} 
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition-transform duration-300 hover:scale-110"
      >
        <FaArrowUp className="text-2xl" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
'use client'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import ArrowAnimation from './arrow.json'

const ScrollToTopButtom = () => {
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
        <div className={`scroll-to-top ${visible ? 'visible' : ''}`}>
            <button onClick={scrollToTop} className="scroll-button">
                <Lottie className='w-8 h-8' animationData={ArrowAnimation} />
            </button>
        </div>
    )
}

export default ScrollToTopButtom
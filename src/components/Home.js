'use client';
import { useEffect, useState } from 'react';

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 100);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4 pt-8">
      {/* Imagen en la parte superior en móviles y a la derecha en pantallas grandes */}
      <div className="w-full md:w-1/2 mb-2 md:mb-0">
        <img 
          src="/img/home.jpg" 
          alt="Descripción de la imagen" 
          className={`w-full h-auto rounded-full border-4 border-black transition-opacity duration-1000 ease-in ${showText ? 'opacity-100' : 'opacity-0'} delay-1000 shadow-lg`} 
          style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.5)' }} // Sombra blanca
        />
      </div>

      {/* Contenido de texto alineado a la izquierda */}
      <div className="text-left max-w-md mx-auto md:w-1/2">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-medium text-white transition-opacity duration-1000 ease-in ${showText ? 'opacity-100' : 'opacity-0'}`}>
          ¡Hola! Soy <span className="font-extrabold text-gray-300">Sebastian Valenzuela</span>
        </h1>
        <p className={`mt-2 text-lg sm:text-xl md:text-2xl font-normal text-gray-400 transition-opacity duration-1000 ease-in ${showText ? 'opacity-100' : 'opacity-0'} delay-500`}>
          Estudiante de Ingeniería Civil en Informática con una fuerte pasión por la creación de soluciones digitales innovadoras.
        </p>
      </div>

      {/* Ajustes de espaciado para pantallas pequeñas */}
      <style jsx>{`
        @media (max-width: 640px) {
          img {
            margin-bottom: 20px; /* Ajusta este valor según sea necesario */
          }
          p {
            margin-top: 0; /* Reduce el margen superior del texto */
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
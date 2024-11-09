'use client'
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Para íconos
import './Contact2.css'; // Asegúrate de importar el CSS adecuado

const Contact2 = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center text-white py-20">
      {/* Contenedor de burbujas */}
      <div className="bubbles">
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 24 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 23 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 20 }}></span>
        <span style={{ '--i': 22 }}></span>
        <span style={{ '--i': 25 }}></span>
        {/* Puedes añadir más burbujas según sea necesario */}
      </div>

      {/* Contenido del contacto */}
      <div className="text-center space-y-8 relative z-10">
        <h2 className="text-4xl font-bold text-gray-100">
          ¡Escríbeme a cualquiera de mis redes sociales!
        </h2>
        
        {/* Contenedor de los enlaces */}
        <div className="flex justify-center gap-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/56958138659"  // Reemplaza con tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transform transition-all duration-300"
          >
            <FaWhatsapp className="text-white text-3xl" />
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sebastian-valenzuela-484906204/"  // Reemplaza con tu perfil de LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-600 p-4 rounded-full shadow-xl hover:scale-110 transform transition-all duration-300"
          >
            <FaLinkedinIn className="text-white text-3xl" />
          </a>

          {/* Correo */}
          <a
            href="mailto:sebarm177@gmail.com"  // Reemplaza con tu correo
            className="flex items-center justify-center bg-red-500 p-4 rounded-full shadow-xl hover:scale-110 transform transition-all duration-300"
          >
            <FaEnvelope className="text-white text-3xl" />
          </a>
        </div>

        {/* Texto adicional */}
        <p className="text-lg text-gray-200 mt-4">
          ¡Conéctemos y colaboremos!
        </p>
      </div>
    </section>
  );
};

export default Contact2;
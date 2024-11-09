'use client'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  useEffect(() => {
    // Función para generar estrellas dinámicamente
    const generateStars = (numStars) => {
      const sky = document.querySelector(".stars");  // El contenedor de las estrellas
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        
        // Posicionamiento aleatorio de cada estrella
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Tamaño aleatorio
        const size = Math.random() * 3 + 2; // Estrellas entre 2px y 5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Animación aleatoria para las estrellas
        const animationDuration = Math.random() * 5 + 5; // Duración aleatoria entre 5s y 10s
        star.style.animationDuration = `${animationDuration}s`;

        sky.appendChild(star);
      }
    };

    // Generar un número de estrellas al cargar el componente
    generateStars(100); // Puedes ajustar el número de estrellas aquí
  }, []);

  return (
    <section id="contact" className="relative min-h-screen bg-gray-900 flex items-center justify-center text-white">
    {/* Lado decorativo con cielo estrellado */}
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden hidden md:block">
      <div className="stars absolute inset-0 w-full h-full"></div>
    </div>

    {/* Formulario de Contacto */}
    <div className="relative z-10 bg-transparent p-8 rounded-xl shadow-lg w-full max-w-xl mx-auto space-y-6">
      {/* Título "Contáctame" con animación usando Intersection Observer */}
      <h2 
        ref={titleRef}  // Asigna la referencia del `inView`
        className={`text-3xl md:text-4xl font-bold text-gray-100 text-center mb-8 transition-opacity transform duration-500 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `0.1s` }}
      >
        Contáctame
      </h2>
      
      {/* Formulario de Contacto */}
      <form 
        ref={formRef}
        className={`space-y-6 transition-opacity transform duration-500 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `0.3s` }}
      >
        <div className="flex flex-col">
          <label className="text-gray-300 font-semibold">Nombre</label>
          <input 
            type="text" 
            className="mt-2 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="Tu nombre"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-semibold">Correo</label>
          <input 
            type="email" 
            className="mt-2 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500" 
            placeholder="Tu correo"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-semibold">Mensaje</label>
          <textarea 
            className="mt-2 p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 w-full h-32 resize-none"
            placeholder="Escribe tu mensaje"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 mt-4 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;
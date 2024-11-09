'use client'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-200 py-16">
      <div ref={ref} className={`transition-opacity transform duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} max-w-4xl px-4`}>
        {/* Foto */}
        <div className="flex justify-center mb-8">
          <img 
            src="/img/seba.png" 
            alt="Foto de Sebastián" 
            className="rounded-full w-32 h-32 object-cover border-4 border-gray-300 shadow-lg"
          />
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Sobre mí</h2>

        {/* Texto descriptivo */}
        <p className="mt-4 text-lg text-gray-600 text-justify">
          🚀 Como Desarrollador Full Stack, no solo me enfoco en la creación de soluciones web escalables, sino que también tengo un fuerte enfoque en la integración de la nube y el trabajo en equipo eficiente. He trabajado con plataformas de nube como Google Cloud Platform (GCP) y Amazon Web Services (AWS), utilizando sus poderosas herramientas para diseñar y administrar aplicaciones escalables y seguras.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-justify">
          📈 En mi día a día, utilizo metodologías ágiles como Kanban para gestionar mis proyectos, empleando herramientas como Jira para asegurar que todo el equipo se mantenga sincronizado y que los flujos de trabajo sean eficientes. La colaboración y la transparencia son claves en mi enfoque de trabajo, utilizando GitHub para control de versiones y colaboración en el código con otros desarrolladores.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-justify">
          🔍 Además, tengo una fuerte orientación hacia el testing de código, asegurando la calidad del software mediante pruebas automatizadas y buenas prácticas de testing para garantizar un desarrollo robusto y libre de errores.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-justify">
          🤝 Me considero una persona proactiva, colaborativa y con una actitud positiva hacia el trabajo en equipo. Creo firmemente que la colaboración efectiva es clave para alcanzar el éxito en cualquier proyecto y estoy entusiasmado por contribuir con mi experiencia y habilidades a nuevos desafíos.
        </p>
      </div>
    </section>
  );
};

export default About;
const Projects = () => {
    return (
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-gray-900">Mis Proyectos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 border rounded-lg hover:bg-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold">Proyecto 1</h3>
            <p className="mt-2">Descripción breve del proyecto 1.</p>
          </div>
          <div className="p-6 border rounded-lg hover:bg-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold">Proyecto 2</h3>
            <p className="mt-2">Descripción breve del proyecto 2.</p>
          </div>
        </div>
      </section>
    );
  };
  
export default Projects;
  
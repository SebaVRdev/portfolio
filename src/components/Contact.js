const Contact = () => {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md">
          <h2 className="text-4xl font-bold text-gray-900">Contáctame</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Nombre</label>
              <input className="w-full mt-2 p-2 border rounded-lg" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Correo</label>
              <input className="w-full mt-2 p-2 border rounded-lg" type="email" />
            </div>
            <div>
              <label className="block text-gray-700">Mensaje</label>
              <textarea className="w-full mt-2 p-2 border rounded-lg" rows="4"></textarea>
            </div>
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg">Enviar</button>
          </form>
        </div>
      </section>
    );
  };
  
export default Contact;
  
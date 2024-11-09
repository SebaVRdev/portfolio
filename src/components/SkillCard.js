// SkillCard.js
import React from 'react';

const SkillCard = ({ name, img, level }) => {
    return (
      <div className="p-4 w-40 bg-gray-100 rounded-md shadow-md flex flex-col items-center hover:bg-gray-200 transition duration-300">
        {/* Contenedor para el logo y el nombre, alineados horizontalmente y centrados */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src={img} alt={"Imagen de " + name} className="w-12 h-12" />
          <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
        
        {/* Barra de nivel, alineada al fondo */}
        <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
};  

export default SkillCard;
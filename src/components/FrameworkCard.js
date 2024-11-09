// FrameworkCard.js
import React from 'react';

const FrameworkCard = ({ name, img, level }) => {
  return (
    <div className="p-4 w-44 h-44 sm:w-56 sm:h-56 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-200 transition duration-300">
      <img src={img} alt={"Imagen de " + name} className="w-20 h-20 sm:w-24 sm:h-24 mb-4" />
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FrameworkCard;
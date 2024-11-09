// Skills.js
import React from 'react';
import FrameworkCard from './FrameworkCard';
import SkillCard from './SkillCard';

const frameworks = [
  { id: 0, name: "Angular", img: "/img/skills/angular.png", level: 70 },
  { id: 1, name: "Node JS", img: "/img/skills/node.png", level: 90 },
  { id: 2, name: "Express", img: "/img/skills/express.png", level: 80 },
  { id: 3, name: "Sequelize", img: "/img/skills/sequelize.png", level: 65 },
  { id: 4, name: "React", img: "/img/skills/react.png", level: 70 },
  { id: 5, name: "NestJS", img: "/img/skills/nest.png", level: 75 },
];

const languages = [
  { id: 0, name: "Javascript", img: "/img/skills/javascript.png", level: 95 },
  { id: 1, name: "TypeScript", img: "/img/skills/typescript.png", level: 85 },
  { id: 2, name: "Python", img: "/img/skills/python.png", level: 60 },
  { id: 3, name: "Java", img: "/img/skills/java.png", level: 50 },
];

const databases = [
  { id: 0, name: "Postgres", img: "/img/skills/postgresql.png", level: 80 },
  { id: 1, name: "MySQL", img: "/img/skills/mysql.png", level: 75 },
  { id: 2, name: "MongoDB", img: "/img/skills/mongo.png", level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Tecnologías</h2>

      {/* Frameworks - Cards grandes */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 px-4">
        {frameworks.sort((a, b) => (b.level - a.level)).map((framework) => (
          <FrameworkCard key={framework.id} name={framework.name} img={framework.img} level={framework.level} />
        ))}
      </div>

      {/* Lenguajes - Cards pequeñas */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Lenguajes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-center px-4">
          {languages.map((lang) => (
            <SkillCard key={lang.id} name={lang.name} img={lang.img} level={lang.level} />
          ))}
        </div>
      </div>

      {/* Bases de Datos - Cards pequeñas */}
      <div className="mt-8 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Bases de Datos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-center px-4">
          {databases.map((db) => (
            <SkillCard key={db.id} name={db.name} img={db.img} level={db.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
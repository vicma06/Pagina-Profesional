import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  const skills = [
    {
      category: "Frontend & Diseño",
      icon: <Globe className="w-6 h-6" />,
      items: ["React", "Angular", "HTML5", "CSS/Tailwind", "JavaScript/TypeScript"]
    },
    {
      category: "Backend & Lenguajes",
      icon: <Code className="w-6 h-6" />,
      items: ["Java", "Python", "Node.js"]
    },
    {
      category: "IA & Especialidades",
      icon: <Cpu className="w-6 h-6" />,
      items: ["Google AI Studio", "Unity (Game Dev)", "Machine Learning Basics"]
    },
    {
      category: "Herramientas",
      icon: <Wrench className="w-6 h-6" />,
      items: ["Git/GitHub", "VS Code", "Docker", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-gray-400">Mi arsenal tecnológico actual</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              <div 
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-30"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.08), transparent 40%)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform ring-1 ring-white/10">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 group-hover:bg-primary transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

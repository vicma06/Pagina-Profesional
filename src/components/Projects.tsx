import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Utensils, Gamepad2, Car } from 'lucide-react';

const Projects = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  const projects = [
    {
      title: "CRM Empresarial",
      description: "Sistema integral de gestión de clientes diseñado para optimizar flujos de venta y seguimiento de un restaurante. Implementa autenticación segura, dashboard de métricas y gestión de contactos.",
      tags: ["Java", "Spring Boot", "MySQL", "Angular", "Google AI Studio"],
      links: { github: undefined, demo: undefined },
      icon: Utensils
    },
    {
      title: "Juego del Impostor",
      description: "Proyecto personal de videojuego multijugador inspirado en mecánicas de deducción social. Desarrollado con React.",
      tags: ["React", "Google AI Studio", "Firebase", "MongoDB"],
      links: {demo: "https://impostor-game-vicma.web.app" },
      icon: Gamepad2,
      demoLabel: "¡Pruébalo Ahora!"
    },
    {
      title: "Ingeniero IA de F1",
      description: "Asistente inteligente en desarrollo para estrategias de carrera en el videojuego F1 25. Utiliza algoritmos de predicción y análisis de datos históricos para sugerir paradas en pits.",
      tags: ["Python", "Google AI Studio", "Ollama", "Machine Learning"],
      status: "En Desarrollo",
      links: { github: undefined, demo: undefined },
      icon: Car
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-gray-400">Una selección de mi trabajo reciente</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5 flex flex-col group relative"
            >
              <div 
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-30"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.06), transparent 40%)`
                }}
              />
              {project.status === "En Desarrollo" && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/20">
                    En Desarrollo
                  </span>
                </div>
              )}
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-primary-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <Github size={18} /> Código
                    </a>
                  )}
                  {project.links?.demo && (
                     <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm transition-all ${
                        // @ts-ignore
                        project.demoLabel 
                          ? "bg-primary text-background px-4 py-2 rounded-lg font-bold hover:scale-105 shadow-lg shadow-primary/20" 
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <ExternalLink size={18} /> 
                      {/* @ts-ignore */}
                      {project.demoLabel || "Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

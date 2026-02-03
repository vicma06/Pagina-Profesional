import { motion } from 'framer-motion';
import { User, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <User className="text-primary h-6 w-6" />
            <h2 className="text-3xl font-bold text-center">Sobre Mí</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenedor de Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group mx-auto md:mx-0 max-w-sm"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative bg-surface-800">
                <img 
                  src="/profile.png" 
                  alt="Víctor Martínez" 
                  className="object-cover w-full h-full transform transition duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; // Imagen de respaldo
                  }}
                />
              </div>
            </motion.div>

            {/* Contenido de Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-primary/20 transition-colors shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Code2 className="w-24 h-24 text-primary" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Como estudiante de <span className="text-primary font-medium">Desarrollo de Aplicaciones Multiplataforma</span>, mi objetivo es transformar ideas complejas en experiencias digitales fluidas y eficientes. 
                <br /><br />
                Mi enfoque combina la sólida ingeniería del backend con la creatividad del frontend, buscando siempre escribir código limpio, mantenible y escalable. Me apasiona el aprendizaje continuo y actualmente estoy explorando las fronteras entre la Inteligencia Artificial y el desarrollo tradicional.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

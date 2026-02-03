import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">¿Listo para crear algo increíble?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Siempre estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres saludar, ¡hablemos!
          </p>

          <div className="flex justify-center gap-8 mb-16">
            <a href="mailto:vicmagarciaa@gmail.com" className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Email</span>
            </a>
            <a href="https://github.com/vicma06" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/víctor-martínez-garcía-a876723a1/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">
              Diseñado y Desarrollado por Víctor Martínez
            </p>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer p-2 bg-surface rounded-lg hover:bg-white/10 transition-colors">
              <ArrowUp size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

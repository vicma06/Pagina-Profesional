import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-20 animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >


          <h2 className="text-gray-400 font-medium tracking-[0.2em] text-sm md:text-base mb-6 uppercase">Hola, soy</h2>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
              Víctor Martínez
            </span>
          </h1>
          
          <h3 className="text-xl md:text-2xl text-primary/90 font-light mb-8 max-w-2xl">
            Estudiante de Desarrollo de Aplicaciones Multiplataforma
          </h3>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10 font-light">
            Busco fusionar creatividad y lógica para construir soluciones innovadoras.
            <br className="hidden md:block"/>
            Desde el backend más robusto hasta la experiencia de usuario más fluida.
          </p>

          <div className="flex flex-col items-center gap-8 mb-12">
            <a 
              href="/cv.pdf" 
              download="Victor_Martinez_CV.pdf"
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 transform hover:-translate-y-1"
            >
              <FileText size={20} />
              Descargar CV
            </a>

            <div className="flex justify-center gap-6">
              <a href="https://github.com/vicma06" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full hover:bg-white/10 hover:text-primary transition-all border border-white/5">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/víctor-martínez-garcía-a876723a1/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full hover:bg-white/10 hover:text-primary transition-all border border-white/5">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vicmagarciaa@gmail.com" className="p-3 bg-surface rounded-full hover:bg-white/10 hover:text-primary transition-all border border-white/5">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <Link to="about" smooth={true} duration={500} className="cursor-pointer inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Descubre más</span>
            <ChevronDown className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

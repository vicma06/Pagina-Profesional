import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QRModal from './QRModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Sobre mí', to: 'about' },
    { name: 'Habilidades', to: 'skills' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isOpen 
            ? 'bg-transparent' 
            : scrolled 
              ? 'nav-glass py-2' 
              : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-background rounded-full p-1">
                  <Code2 className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tighter group-hover:text-primary transition-colors">Víctor Martínez</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-baseline space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                ))}
              </div>
              
              <button 
                onClick={() => setShowQR(true)}
                className="p-2 text-gray-400 hover:text-primary transition-colors hover:bg-white/5 rounded-full border border-transparent hover:border-white/10"
                title="Compartir con QR"
              >
                <QrCode size={20} />
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setShowQR(true)}
                className="text-gray-300 hover:text-white"
              >
                <QrCode size={24} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 z-50 relative"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 md:hidden liquid-glass flex flex-col justify-center items-center"
            >
              <div className="flex flex-col space-y-8 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-light text-white hover:text-primary transition-colors tracking-wide cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      <QRModal isOpen={showQR} onClose={() => setShowQR(false)} url={window.location.href} />
    </>
  );
};

export default Header;

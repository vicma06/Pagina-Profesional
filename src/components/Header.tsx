import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2, QrCode, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

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

  const toggleQR = () => {
    if (!showQR) {
      setIsOpen(false);
      setShowQR(true);
    } else {
      setShowQR(false);
    }
  };

  const toggleMenu = () => {
    if (isOpen || showQR) {
      setIsOpen(false);
      setShowQR(false);
    } else {
      setIsOpen(true);
    }
  };

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
        className={`fixed w-full z-[90] transition-all duration-500 ${
          scrolled || isOpen || showQR ? 'py-2' : 'py-6'
        } ${
           isOpen ? 'bg-transparent' : 
           (showQR ? 'bg-transparent md:nav-glass' : 
           (scrolled ? 'nav-glass' : 'bg-transparent'))
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
              
              <div className="relative">
                <button 
                    onClick={toggleQR}
                    className={`p-2 transition-colors hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 ${showQR ? 'text-primary bg-white/5' : 'text-gray-400 hover:text-primary'}`}
                    title="Compartir con QR"
                >
                    <QrCode size={20} />
                </button>

                <AnimatePresence>
                    {showQR && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-4 w-72 z-50"
                    >
                        <div className="nav-glass border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                            {/* Decor */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            
                            <div className="flex flex-col items-center text-center relative z-10">
                                <h3 className="text-lg font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Compartir</h3>
                                <p className="text-gray-400 text-xs mb-4">Escanea para llevarte mi portafolio.</p>

                                <div className="bg-white p-2 rounded-xl mb-4 shadow-lg ring-2 ring-white/5">
                                    <QRCodeSVG 
                                        value={window.location.href} 
                                        size={140}
                                        level="H"
                                        includeMargin={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => {
                   if (showQR) {
                     // If QR is open, switch to Menu
                     setShowQR(false);
                     setIsOpen(true);
                   } else if (isOpen) {
                     // If Menu is open, switch to QR
                     setIsOpen(false);
                     setShowQR(true);
                   } else {
                     // If nothing is open, just open QR
                     toggleQR();
                   }
                }}
                className={`text-gray-300 hover:text-white transition-colors ${showQR ? 'text-primary' : ''}`}
              >
                {showQR ? <Menu size={24} /> : <QrCode size={24} />}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2 z-50 relative"
              >
                {(isOpen || showQR) ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Unified Overlay */}
      <AnimatePresence>
        {(isOpen || showQR) && (
          <motion.div
            initial={{ clipPath: "inset(0 0 calc(100% - 5rem) 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 calc(100% - 5rem) 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] md:hidden nav-glass pt-20"
          >
            {/* Liquid Orbs Background */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-75 pointer-events-none"></div>

            <div className="relative w-full h-full overflow-hidden">
                <motion.div 
                    className="flex w-[200%] h-full"
                    animate={{ x: isOpen ? '-50%' : '0%' }}
                    initial={false}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* QR Section (Left Half) */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center p-4">
                        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/5 max-w-sm w-full mx-auto">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            
                            <div className="flex flex-col items-center text-center relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10 shadow-lg backdrop-blur-md">
                                <Share2 size={28} className="text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Compartir</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                Escanea para llevarte mi portafolio<br/>a cualquier parte.
                                </p>

                                <div className="bg-white p-3 rounded-2xl mb-8 shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)] ring-4 ring-white/5">
                                <QRCodeSVG 
                                    id="qr-code-svg"
                                    value={window.location.href} 
                                    size={200}
                                    level="H"
                                    includeMargin={false}
                                />
                                </div>

                                <div className="text-xs text-gray-400/80 font-mono bg-black/20 px-4 py-2 rounded-full border border-white/5 break-all select-all hover:bg-white/5 transition-colors cursor-pointer w-full text-center">
                                {window.location.href}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Menu Section (Right Half) */}
                    <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-8">
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
                            className="text-4xl font-light text-white hover:text-primary transition-all tracking-wider cursor-pointer"
                            >
                            {link.name}
                            </Link>
                        </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const QRModal = ({ isOpen, onClose, url }: QRModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "inset(0 0 calc(100% - 5rem) 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 calc(100% - 5rem) 0)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] nav-glass flex flex-col items-center justify-center pt-20"
        >
          {/* Liquid Orbs Background */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-75 pointer-events-none"></div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors z-50 bg-white/5 hover:bg-white/10 p-2 rounded-full backdrop-blur-md"
          >
            <X size={24} />
          </button>

          {/* Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative p-8 max-w-sm w-full mx-4"
          >
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                {/* Internal Card Decor */}
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
                      value={url} 
                      size={200}
                      level="H"
                      includeMargin={false}
                    />
                  </div>

                  <div className="text-xs text-gray-400/80 font-mono bg-black/20 px-4 py-2 rounded-full border border-white/5 break-all select-all hover:bg-white/5 transition-colors cursor-pointer w-full">
                    {url}
                  </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QRModal;

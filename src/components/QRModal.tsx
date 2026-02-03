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
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-sm h-fit z-[70] p-4"
          >
            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              {/* Background ambient glow */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none"></div>

              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 hover:bg-white/10 p-1 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center relative z-0">
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

                <div className="text-xs text-gray-400/80 font-mono bg-black/20 px-4 py-2 rounded-full border border-white/5 break-all select-all hover:bg-white/5 transition-colors cursor-pointer">
                  {url}
                </div>

                {/* Optional: Add download or copy link buttons here if needed */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QRModal;

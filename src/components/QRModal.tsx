import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const QRModal = ({ isOpen, onClose, url }: QRModalProps) => {
  const downloadQR = () => {
    const svg = document.getElementById("qr-code-svg");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "victor-martinez-qr.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      img.src = "data:image/svg+xml;base64," + btoa(svgData);
    }
  };

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
            <div className="bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Share2 size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">Compartir Perfil</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Escanea este código QR para abrir el portafolio en otro dispositivo o compartirlo.
                </p>

                <div className="bg-white p-4 rounded-xl mb-6">
                  <QRCodeSVG 
                    id="qr-code-svg"
                    value={url} 
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                </div>

                <div className="text-xs text-gray-500 font-mono bg-black/30 px-3 py-1 rounded-full mb-6 border border-white/5 break-all">
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

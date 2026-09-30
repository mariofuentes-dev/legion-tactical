import { useState, useEffect } from 'react';
import { Image as ImageIcon, ImagePlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbysmXyxBiWErZEZtOjano4fQEcjUAL7ivAN_16wbQA7Xp_Tk2MzSDu834YaE-WVAwfHUQ/exec');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setImages(data);
          }
        }
      } catch (err) {
        console.error('Error fetching gallery images:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-surface border-b border-outline-variant" id="gallery">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 text-primary-container font-mono text-xs uppercase tracking-widest font-bold">
            <ImagePlus className="w-4 h-4" />
            <span>GALERÍA</span>
          </div>
          <h2 className="font-display text-5xl text-primary uppercase">
            INTELIGENCIA <span className="text-primary-container">VISUAL</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
             <div className="col-span-full text-center font-mono text-sm text-on-surface-variant animate-pulse uppercase tracking-widest py-16">
               Sincronizando banco de imágenes...
             </div>
          ) : images.length > 0 ? (
            images.map((url, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="group relative aspect-video bg-surface-container-high hud-border flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] overflow-hidden"
              >
                <img src={url} alt={`Galería ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center border border-dashed border-primary-container/30 bg-primary-container/5 py-12 px-6">
              <span className="font-mono text-sm text-primary-container font-bold uppercase tracking-widest block animate-pulse">
                NO HAY IMÁGENES EN LA CARPETA
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

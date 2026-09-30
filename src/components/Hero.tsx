import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 md:px-16 py-12 overflow-hidden border-b border-outline-variant">
      <div className="absolute inset-0 z-0 bg-surface-container">
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain opacity-80 mix-blend-screen" 
          style={{ backgroundImage: "url('/logo-legion.svg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block border border-primary-container px-4 py-1 mb-4 text-primary-container font-mono text-xs uppercase tracking-widest bg-primary-container/10 font-bold"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse mr-2"></span> SYSTEM STATUS: ONLINE
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-primary uppercase leading-tight md:leading-none max-w-5xl mx-auto font-semibold"
        >
          FORJADOS EN EL COMBATE,<br className="hidden md:block" /> UNIDOS POR LA LEGIÓN
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm tracking-[0.25em] uppercase text-primary-container/80 mt-6"
        >
          Colectivo de Simulación Airsoft de Élite
        </motion.p>
        

      </div>
    </section>
  );
}

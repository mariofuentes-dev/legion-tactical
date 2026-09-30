import { Menu, Instagram } from 'lucide-react';

export default function TopNavBar() {
  return (
    <nav className="bg-surface/90 backdrop-blur-md sticky top-0 w-full border-b border-outline-variant shadow-[0_0_15px_rgba(255,215,0,0.1)] z-50">
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo-legion.svg" alt="Legion-IX Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain mix-blend-screen opacity-90" />
          <div className="font-display text-xl md:text-2xl tracking-tighter text-primary">LEGION-IX</div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest font-bold" href="#calendar">PRÓXIMOS EVENTOS</a>
          <a className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest font-bold" href="#intel">CONÓCENOS</a>
          <a className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest font-bold" href="#gallery">GALERÍA</a>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://www.instagram.com/leg_ix_airsoft?igsh=YTZpZDM5MGNhN3hz" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary border border-primary/30 px-3 py-1.5 hover:bg-primary hover:text-on-primary transition-all duration-200 tactical-glow-hover">
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-mono text-[10px] md:text-xs tracking-widest hidden lg:inline-block font-bold mt-0.5">INSTAGRAM</span>
          </a>
          <a className="bg-primary-container text-on-primary font-mono text-xs px-6 py-2 tactical-glow-hover transition-all duration-150 uppercase tracking-widest hidden md:inline-block font-bold" href="#contact">ÚNETE A LEGION-IX</a>
          <button className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full bottom-0 border-t-2 border-primary-container relative z-10">
      <div className="w-full py-12 px-6 flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-3">
          <div className="font-display text-3xl text-primary uppercase whitespace-nowrap">LEGION-IX</div>
          <a href="https://www.instagram.com/leg_ix_airsoft?igsh=YTZpZDM5MGNhN3hz" target="_blank" rel="noreferrer" className="text-primary hover:text-on-primary hover:bg-primary border border-transparent hover:border-primary px-4 py-2 transition-all duration-200 flex items-center gap-2 tactical-glow-hover">
            <Instagram className="w-6 h-6" />
            <span className="font-mono text-sm uppercase tracking-widest font-bold">@leg_ix_airsoft</span>
          </a>
        </div>
        <div className="font-mono text-xs text-on-surface-variant text-center uppercase tracking-widest font-bold">
          © 2026 LEGION-IX COLLECTIVE. TODOS LOS DERECHOS RESERVADOS. SYSTEM STATUS: ONLINE.
        </div>
      </div>
    </footer>
  );
}

import { Eye, Shield, Target, Users, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Intel() {
  const niveles = [
    { level: 1, hours: 20, rank: <span className="font-bold text-xl leading-none text-primary-container">I</span> },
    { level: 2, hours: 40, rank: <span className="font-bold text-xl leading-none tracking-widest text-primary-container">II</span> },
    { level: 3, hours: 60, rank: <span className="font-bold text-xl leading-none tracking-widest text-primary-container">III</span> },
    { level: 4, hours: 80, rank: <div className="w-4 h-1 bg-primary-container"></div> },
    { level: 5, hours: 100, rank: <div className="flex flex-col gap-1"><div className="w-4 h-1 bg-primary-container"></div><div className="w-4 h-1 bg-primary-container"></div></div> },
    { level: 6, hours: 130, rank: <div className="flex flex-col gap-1"><div className="w-4 h-1 bg-primary-container"></div><div className="w-4 h-1 bg-primary-container"></div><div className="w-4 h-1 bg-primary-container"></div></div> },
    { level: 7, hours: 160, rank: <ChevronUp size={24} strokeWidth={4} className="text-primary-container" /> },
    { level: 8, hours: 200, rank: <div className="flex flex-col -space-y-3 text-primary-container"><ChevronUp size={24} strokeWidth={4} /><ChevronUp size={24} strokeWidth={4} /></div> },
    { level: 9, hours: 250, rank: <div className="flex flex-col -space-y-3 text-primary-container"><ChevronUp size={24} strokeWidth={4} /><ChevronUp size={24} strokeWidth={4} /><ChevronUp size={24} strokeWidth={4} /></div> },
    { level: 10, hours: 300, rank: <Star size={16} fill="currentColor" className="text-primary-container" /> },
    { level: 11, hours: 350, rank: <div className="flex gap-1 text-primary-container"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div> },
    { level: 12, hours: 400, rank: <div className="flex flex-col items-center -space-y-1 text-primary-container"><Star size={14} fill="currentColor" /><div className="flex gap-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div></div> },
    { level: 13, hours: 500, rank: <div className="flex flex-col items-center -space-y-1 text-primary-container"><Star size={14} fill="currentColor" /><ChevronDown size={24} strokeWidth={4} /></div> },
    { level: 14, hours: 600, rank: <div className="flex flex-col items-center text-primary-container"><div className="flex flex-col items-center gap-0.5"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div><ChevronDown size={24} strokeWidth={4} className="-mt-1" /></div> },
    { level: 15, hours: 800, rank: <div className="flex flex-col items-center text-primary-container"><div className="flex flex-col items-center gap-0.5"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div><ChevronDown size={24} strokeWidth={4} className="-mt-1" /></div> },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-surface border-b border-outline-variant relative" id="intel">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 items-center text-center"
          >
            <div className="inline-flex items-center gap-2 text-primary-container font-mono text-xs uppercase tracking-widest font-bold">
              <Eye className="w-4 h-4" />
              <span>SOBRE NOSOTROS</span>
            </div>
            <h2 className="font-display text-5xl text-primary uppercase leading-tight">
              HISTORIA DEL <span className="text-primary-container">EQUIPO</span>
            </h2>
            <div className="w-16 h-1 bg-primary-container"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 text-on-surface-variant font-body text-lg"
          >
            {/* Quiénes Somos */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl text-primary uppercase border-l-4 border-primary-container pl-4">¿Quiénes somos?</h3>
              <p className="leading-relaxed">
                Fundados en 2019, nacimos con una filosofía muy clara: en nuestro equipo, <span className="text-primary font-semibold">nadie es más que nadie</span>. Somos un grupo abierto a todo el mundo, donde lo que realmente prima es el buen ambiente, el buen rollo y las ganas de disfrutar del airsoft en estado puro.
              </p>
              <p className="leading-relaxed">
                No buscamos "lobos solitarios"; somos un equipo y, como tal, lo que pedimos es compromiso para jugar juntos, apoyarnos en el campo y disfrutar de cada partida como una piña.
              </p>
            </div>

            {/* Objetivo y Misión/Visión en dos columnas */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-8 hud-border flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-primary-container w-6 h-6" />
                  <h3 className="font-display text-2xl text-primary uppercase">OBJETIVO</h3>
                </div>
                <p className="italic text-on-surface-variant/90 leading-relaxed border-l-2 border-primary-container pl-4">
                  "Practicar airsoft en equipo desde el compañerismo y el fairplay, divirtiéndonos, enriqueciéndonos y mejorando tanto como personas como equipo."
                </p>
              </div>

              <div className="bg-surface-container-low p-8 hud-border flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="text-primary-container w-6 h-6" />
                  <h3 className="font-display text-2xl text-primary uppercase">MISIÓN / VISIÓN</h3>
                </div>
                <p className="leading-relaxed text-sm">
                  <span className="text-primary-container font-bold">.- Nuestra Misión:</span> Practicar airsoft desde el trabajo en equipo, apostando siempre por la mejora, el aprendizaje continuo en cada entrenamiento y partida.
                </p>
                <p className="leading-relaxed text-sm">
                  <span className="text-primary-container font-bold">.- Nuestra Visión:</span> Llegar a ser un equipo reconocido y respetado por nuestro comportamiento, estilo de juego y honestidad tanto en el ámbito del airsoft como fuera de él.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="text-primary-container w-6 h-6" />
                <h3 className="font-display text-3xl text-primary uppercase border-l-4 border-primary-container pl-4">VALORES</h3>
              </div>
              <p className="mb-2">El pegamento que nos mantiene unidos dentro y fuera del campo se resume en cuatro pilares innegociables:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-container p-4 border border-outline-variant/30 flex flex-col gap-2">
                  <span className="text-primary-container font-display text-xl uppercase">1. Seguridad</span>
                  <span className="text-sm">Lo primero es lo primero. Siempre gafas.</span>
                </div>
                <div className="bg-surface-container p-4 border border-outline-variant/30 flex flex-col gap-2">
                  <span className="text-primary-container font-display text-xl uppercase">2. Respeto</span>
                  <span className="text-sm">Hacia los compañeros, los rivales, árbitros y organizadores.</span>
                </div>
                <div className="bg-surface-container p-4 border border-outline-variant/30 flex flex-col gap-2">
                  <span className="text-primary-container font-display text-xl uppercase">3. Juego Limpio</span>
                  <span className="text-sm">El airsoft es un juego de honor. Cantar las bajas y ser honestos es nuestra mayor victoria.</span>
                </div>
                <div className="bg-surface-container p-4 border border-outline-variant/30 flex flex-col gap-2">
                  <span className="text-primary-container font-display text-xl uppercase">4. Compañerismo</span>
                  <span className="text-sm">Nadie se queda atrás. La fuerza del equipo está en cada uno de sus miembros.</span>
                </div>
              </div>
            </div>

            {/* Sistema de Niveles */}
            <div className="flex flex-col gap-4 mt-6 bg-surface-container-low p-8 hud-border relative overflow-hidden" id="niveles-internos">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <Users className="text-primary-container w-6 h-6" />
                <h3 className="font-display text-3xl text-primary uppercase border-l-4 border-primary-container pl-4">SISTEMA DE NIVELES</h3>
              </div>
              <div className="relative z-10 space-y-4">
                <p className="leading-relaxed">
                  En Legion-IX contamos con un sistema de niveles internos, pero con una regla de oro: lo único que aportan los niveles son horas de juego y experiencia acumulada.
                </p>
                
                {/* Grid de Niveles */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 py-6">
                  {niveles.map((n) => (
                    <div key={n.level} className="flex flex-col items-center justify-center p-3 bg-surface border border-outline-variant/30 rounded shadow-sm hover:border-primary-container/50 transition-colors">
                      <div className="h-12 flex items-center justify-center">
                        {n.rank}
                      </div>
                      <span className="font-mono text-[10px] text-on-surface-variant mt-2 uppercase tracking-widest">NIVEL {n.level}</span>
                      <span className="font-display text-primary text-sm font-bold">{n.hours}H</span>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed">
                  Aquí los niveles NO dan privilegios. Un nivel más alto unicamente significa que llevas más batallas a la espalda, pero el respeto, las decisiones y el valor de cada miembro en el grupo es exactamente el mismo. La veterania es un grado.
                </p>
                <p className="leading-relaxed">
                  Los veteranos están para ayudar y al servicio de los nuevos reclutas que quieran incorporarse a nuestras filas, es aquí donde reside la verdadera esencia de la Legion-IX... <span className="text-primary font-bold uppercase tracking-widest">¡Fuerza y Honor!</span>
                </p>
              </div>
            </div>

            {/* CTA Final */}
            <div className="mt-8 text-center bg-primary-container/10 border border-primary-container p-8">
              <h4 className="font-display text-2xl text-primary uppercase mb-4">¿Quieres unirte a las filas de Legion-IX?</h4>
              <p className="max-w-2xl mx-auto mb-6">
                Tanto si tienes experiencia como si eres nuevo en el airsoft. Si buscas un sitio donde jugar, divertirte en serio pero sin malos rollos, donde aprender táctica y, sobre todo, donde reírte y pasarlo bien... <span className="text-primary-container font-bold">este es tu equipo.</span>
              </p>
              <a href="#contact" className="bg-primary-container text-on-primary font-mono text-sm px-8 py-3 tactical-glow-hover transition-all duration-150 uppercase tracking-widest font-bold inline-block">
                INICIAR RECLUTAMIENTO
              </a>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [contactEmail, setContactEmail] = useState('jsfarma@gmail.com');

  useEffect(() => {
    async function fetchEmail() {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9NwZ3Q9PrxoT6jeH96bIMbp0nIPYO1vXlWK8kFEhVF25Lx356cU5zE3ORfRocadvjqycOrFZqvK1l/pub?output=csv');
        if (response.ok) {
          const text = await response.text();
          const email = text.split(/\r?\n/)[0]?.trim();
          if (email && email.includes('@')) {
            setContactEmail(email);
          }
        }
      } catch (err) {
        console.error('Error fetching contact email:', err);
      }
    }
    fetchEmail();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyPp4KLTi5N1Gp19z5L1Ex6aYNwxwOGkC6wLAxAsvxFZoR_LzdQswesK_OVrBLM6bjHYA/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        console.error('Error enviando la transmisión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-24 px-6 md:px-16 bg-surface-container-low border-b border-outline-variant relative" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-primary-container font-mono text-xs uppercase tracking-widest font-bold">
              <Mail className="w-4 h-4" />
              <span>CONTACTO</span>
            </div>
            <h2 className="font-display text-5xl text-primary uppercase leading-tight">
              ÚNETE A <span className="text-primary-container">LEGION-IX</span>
            </h2>
            <div className="w-16 h-1 bg-primary-container"></div>
            <p className="font-body text-lg text-on-surface-variant">
              ¿Quieres unirte a nuestras filas o coordinar una operación conjunta? Envía tu transmisión. Responderemos a la brevedad.
            </p>
            <div className="mt-4 p-6 hud-border bg-surface-container">
              <span className="block font-mono text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-2">CORREO DE CONTACTO</span>
              <a href={`mailto:${contactEmail}`} className="font-display text-xl md:text-2xl text-primary hover:text-primary-container transition-colors block mt-2">
                {contactEmail}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full p-8 hud-border bg-surface-container"
          >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-2">NOMBRE</label>
                <input type="text" id="name" name="nombre" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors font-body" placeholder="Tu nombre..." />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-2">EMAIL</label>
                <input type="email" id="email" name="email" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors font-body" placeholder="tu@email.com..." />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-2">MENSAJE</label>
                <textarea id="message" name="mensaje" required rows={4} className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors font-body resize-none" placeholder="Transmite tu mensaje..."></textarea>
              </div>
              <button type="submit" disabled={loading} className="bg-primary-container text-on-primary font-mono text-sm px-6 py-3 tactical-glow-hover transition-all duration-150 uppercase tracking-widest font-bold mt-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-on-primary border-t-transparent animate-spin"></div>
                    TRANSMITIENDO...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    ENVIAR TRANSMISIÓN
                  </>
                )}
              </button>
              {success && (
                <div className="mt-2 p-4 border border-primary-container bg-primary-container/10 text-primary-container font-mono text-sm text-center uppercase tracking-widest font-bold animate-pulse">
                  TRANSMISIÓN RECIBIDA. NOS PONDREMOS EN CONTACTO.
                </div>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

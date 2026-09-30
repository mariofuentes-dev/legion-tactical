import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface Event {
  title: string;
  date: string;
  location: string;
}

const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFxE7K4-jMr4vtMO3oQzwQBlGRVGKi5mxenzqhhomYP-4K0kqWBDo9r2a-y3wQEtirY7qFq4PPvbeB/pub?output=csv';

export default function Calendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(sheetUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const csvText = await response.text();

        const lines = csvText.split(/\r?\n/);
        const parsedEvents: Event[] = [];

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;

          let columns: string[] = [];
          let current = '';
          let inQuotes = false;

          for (let char of line) {
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              columns.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          columns.push(current.trim());

          if (columns.length >= 3) {
            parsedEvents.push({
              title: columns[0].replace(/^"|"$/g, ''),
              date: columns[1].replace(/^"|"$/g, ''),
              location: columns[2].replace(/^"|"$/g, '')
            });
          }
        }

        setEvents(parsedEvents);
        setError(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-surface-container-low border-b border-outline-variant" id="calendar">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 text-primary-container font-mono text-xs uppercase tracking-widest font-bold">
            <CalendarIcon className="w-4 h-4" />
            <span>CALENDARIO / PRÓXIMOS DESPLIEGUES</span>
          </div>
          <h2 className="font-display text-5xl text-primary uppercase">
            <span className="text-primary-container">EVENTOS</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {loading ? (
            <div className="text-center font-mono text-sm text-on-surface-variant animate-pulse uppercase tracking-widest py-8">
              CONECTANDO CON LA RED TÁCTICA...
            </div>
          ) : error || events.length === 0 ? (
            <div className="text-center border border-dashed border-primary-container/30 bg-primary-container/5 py-12 px-6">
              <span className="font-mono text-sm text-primary-container font-bold uppercase tracking-widest block animate-pulse">
                NO HAY DESPLIEGUES PROGRAMADOS ACTUALMENTE
              </span>
            </div>
          ) : (
            events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container hud-border p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:bg-surface-container-high transition-colors"
              >
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <h3 className="font-display text-2xl text-primary uppercase">{ev.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs font-bold tracking-widest">
                      <CalendarIcon className="text-primary-container w-4 h-4" /> {ev.date}
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs font-bold tracking-widest">
                      <MapPin className="text-primary-container w-4 h-4" /> {ev.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

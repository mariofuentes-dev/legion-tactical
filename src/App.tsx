import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import Intel from './components/Intel';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen relative overflow-x-hidden grid-bg">
      <div className="scanline"></div>
      <TopNavBar />
      <Hero />
      <Intel />
      <Gallery />
      <Calendar />
      <Contact />
      <Footer />
    </div>
  );
}

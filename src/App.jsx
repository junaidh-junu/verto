import { useSmoothScroll } from './hooks/useSmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Projects />
        <Awards />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;

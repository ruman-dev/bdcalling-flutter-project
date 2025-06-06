
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-cosmic-dark text-center py-8">
        <p className="text-white/60">
          © 2025 Sudarshan. Made with ❤️ and lots of ☕
        </p>
      </footer>
    </div>
  );
};

export default Index;

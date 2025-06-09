
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden cosmic-gradient">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white animate-glow">
            Hi, I'm{' '}
            <span className="cosmic-gradient-text">
              Sudarshan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer passionate about building 
            <span className="cosmic-gradient-text font-semibold"> scalable</span> and 
            <span className="cosmic-gradient-text font-semibold"> robust</span> web applications with .NET Core and React
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="glass-card hover:scale-105 transition-all duration-300 text-white border-white/30"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover:scale-105 transition-all duration-300 text-white border-white/30 hover:bg-white/10"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/sudarshan-ghayal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 text-white hover:text-cosmic-cyan"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/sudarshan-ghayal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 text-white hover:text-cosmic-blue"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sudarshan.ghayal@example.com"
              className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 text-white hover:text-cosmic-pink"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

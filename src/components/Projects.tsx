
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "https://example.com",
      github: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS"],
      demo: "https://example.com",
      github: "https://github.com",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with detailed forecasts, interactive maps, and location-based weather alerts using OpenWeather API.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "OpenWeather API", "Chart.js"],
      demo: "https://example.com",
      github: "https://github.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, interactive elements, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      demo: "https://example.com",
      github: "https://github.com",
      featured: true
    },
    {
      title: "Social Media App",
      description: "A social networking platform with real-time messaging, post sharing, and user profiles. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      demo: "https://example.com",
      github: "https://github.com",
      featured: false
    },
    {
      title: "Crypto Tracker",
      description: "A cryptocurrency tracking application with real-time price updates, portfolio management, and detailed market analysis.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tech: ["React", "CoinGecko API", "Redux"],
      demo: "https://example.com",
      github: "https://github.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-cosmic-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-cosmic-blue rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-cosmic-orange rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="cosmic-gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card border-white/20 overflow-hidden hover:scale-105 transition-all duration-500 group animate-scale-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-purple text-sm rounded-full border border-cosmic-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-cosmic-purple hover:bg-cosmic-purple/80 text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-card border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

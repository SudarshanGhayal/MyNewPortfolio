
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Settings } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Backend Development",
      description: ".NET Core, Web API, C#",
      color: "cosmic-purple"
    },
    {
      icon: Database,
      title: "Database Management", 
      description: "SQL Server, Oracle",
      color: "cosmic-blue"
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "React, TypeScript, Modern UI",
      color: "cosmic-pink"
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      description: "Git, Azure DevOps, Deployment",
      color: "cosmic-cyan"
    }
  ];

  const tools = [
    "Visual Studio", "VS Code", "Git", "Grafana", "Azure DevOps"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cosmic-dark to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cosmic-purple rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cosmic-pink rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-cosmic-cyan rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="cosmic-gradient-text">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm Sudarshan Dilip Ghayal, a passionate Full Stack Developer with expertise in 
            building enterprise-level applications using .NET Core ecosystem and modern frontend technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="glass-card border-white/20 hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-${skill.color}/20 mb-4`}>
                  <skill.icon size={32} className={`text-${skill.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-white/70">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-6">My Technical Stack</h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xl font-semibold text-cosmic-cyan mb-2">Core Technologies</h4>
                <p className="text-white/80 leading-relaxed">
                  .NET Core, SQL Server, Oracle, Web API, React TypeScript, Git
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cosmic-pink mb-2">Development Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-purple text-sm rounded-full border border-cosmic-purple/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              I specialize in creating robust backend solutions with .NET Core and engaging 
              frontend experiences with React TypeScript, ensuring seamless integration and 
              optimal performance across the full stack.
            </p>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-white mb-6">Professional Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Projects Delivered</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Technologies Mastered</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Years of Coding</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Lines of Code</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">100K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

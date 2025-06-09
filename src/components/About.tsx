
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "cosmic-purple"
    },
    {
      icon: Globe,
      title: "Backend Development", 
      description: "Node.js, Express, MongoDB, PostgreSQL",
      color: "cosmic-blue"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research",
      color: "cosmic-pink"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS/Android",
      color: "cosmic-cyan"
    }
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
            I'm a passionate developer with 3+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality. I love turning ideas 
            into reality through clean, efficient code.
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
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Started my coding journey in 2021 with a passion for creating beautiful web experiences. 
              Since then, I've worked on numerous projects ranging from small business websites to 
              complex web applications.
            </p>
            <p className="text-white/80 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              My goal is to create digital experiences that not only look great but also provide 
              exceptional user experiences.
            </p>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-white mb-6">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Projects Completed</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Years Experience</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Happy Clients</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Coffee Cups</span>
                  <span className="text-2xl font-bold cosmic-gradient-text">∞</span>
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

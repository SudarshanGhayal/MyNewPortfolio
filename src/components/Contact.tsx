
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 cosmic-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            Get In <span className="text-black">Touch</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to build something amazing with .NET Core and React!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 glass-card rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-white/80">sudarshan.ghayal@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 glass-card rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-white/80">+91 XXX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 glass-card rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-white/80">India</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-cyan rounded-full mr-3"></span>
                  Full Stack .NET Core Expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-pink rounded-full mr-3"></span>
                  Modern React TypeScript Solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-orange rounded-full mr-3"></span>
                  Database Design & Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-purple rounded-full mr-3"></span>
                  DevOps & Deployment Ready
                </li>
              </ul>
            </div>
          </div>

          <Card className="glass-card border-white/20 animate-slide-in-right">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">First Name</label>
                    <Input 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">Last Name</label>
                    <Input 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Email</label>
                  <Input 
                    type="email"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Subject</label>
                  <Input 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Full Stack Development Project"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Message</label>
                  <Textarea 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 min-h-[120px]"
                    placeholder="Tell me about your .NET Core or React project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-cosmic-dark hover:bg-white/90 hover:scale-105 transition-all duration-300"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

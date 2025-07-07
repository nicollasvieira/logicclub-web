
import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Globe, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PayFlow Enterprise",
      description: "Plataforma completa de pagamentos para grandes corporações com processamento em tempo real, analytics avançados e sistema de gestão de riscos integrado.",
      image: "bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700",
      stats: {
        transactions: "1M+",
        users: "50K+",
        uptime: "99.9%"
      },
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      year: "2024",
      category: "Enterprise Solution"
    },
    {
      title: "FinTech Mobile App",
      description: "Aplicativo móvel revolucionário para gestão financeira pessoal com integração bancária completa e IA para insights financeiros personalizados.",
      image: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700",
      stats: {
        downloads: "100K+",
        rating: "4.8",
        countries: "15+"
      },
      technologies: ["React Native", "Python", "PostgreSQL", "GCP"],
      year: "2023",
      category: "Mobile App"
    },
    {
      title: "Blockchain Payment Gateway",
      description: "Gateway de pagamentos inovador baseado em blockchain para transações internacionais com taxas ultra baixas e segurança máxima.",
      image: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      stats: {
        volume: "$10M+",
        countries: "25+",
        partners: "50+"
      },
      technologies: ["Solidity", "Web3", "Next.js", "Docker"],
      year: "2023",
      category: "Blockchain Solution"
    }
  ];

  return (
    <section id="projetos" className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Award size={16} />
            Nossos Projetos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Casos de sucesso que
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              transformaram negócios
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para revolucionar operações financeiras 
            e gerar resultados extraordinários para nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group h-full"
            >
              <div className="h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className={`h-56 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <Github size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{project.year}</span>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize font-medium">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

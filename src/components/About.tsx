
import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <User size={16} />
            Sobre Nós
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Transformando o futuro das
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              operações financeiras
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Somos especialistas em soluções financeiras inovadoras, dedicados a revolucionar 
            a forma como empresas gerenciam suas operações financeiras com tecnologia de ponta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <User size={28} className="text-primary" />,
              title: "10+ Anos",
              subtitle: "Experiência",
              description: "Mais de uma década desenvolvendo soluções fintech para empresas de todos os tamanhos."
            },
            {
              icon: <Award size={28} className="text-primary" />,
              title: "Certificação",
              subtitle: "Internacional",
              description: "Padrões de segurança de nível bancário e certificações reconhecidas mundialmente."
            },
            {
              icon: <Target size={28} className="text-primary" />,
              title: "Soluções",
              subtitle: "Personalizadas",
              description: "Cada projeto é único e desenvolvido para atender necessidades específicas do cliente."
            },
            {
              icon: <Heart size={28} className="text-primary" />,
              title: "Suporte",
              subtitle: "Dedicado",
              description: "Relacionamento duradouro com suporte 24/7 e acompanhamento contínuo."
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-primary font-medium">{item.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

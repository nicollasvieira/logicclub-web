import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard, Zap, UserCheck, Wrench, Brain, Headphones, Bot } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: <Zap size={28} className="text-primary" />,
      title: 'Atendimento Ágil',
      description: 'Respostas rápidas e comunicação transparente do início ao fim do projeto.'
    },
    {
      icon: <Wrench size={28} className="text-primary" />,
      title: 'Soluções Personalizadas',
      description: 'Cada projeto é único, feito sob medida para sua necessidade.'
    },
    {
      icon: <Brain size={28} className="text-primary" />,
      title: 'Tecnologia e IA',
      description: 'Utilizamos inteligência artificial e automação para acelerar entregas e inovar.'
    },
    {
      icon: <Bot size={28} className="text-primary" />,
      title: 'Especialistas em Bots',
      description: 'Experiência comprovada em bots para Discord, automações e scripts para FiveM.'
    },
    {
      icon: <Headphones size={28} className="text-primary" />,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento pós-entrega e suporte técnico sempre que precisar.'
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="diferenciais" className="w-full py-24 px-6 md:px-12 bg-card/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
            <UserCheck size={16} />
            Por que escolher a gente?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Mais do que tecnologia, entregamos parceria, inovação e resultados reais para o seu projeto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

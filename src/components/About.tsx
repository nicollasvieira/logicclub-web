import React from 'react';
import { ClipboardList, FileText, Code, Rocket, LifeBuoy } from 'lucide-react';
import { Reveal } from './Reveal';

const About = () => {
  const steps = [
    {
      icon: <ClipboardList size={28} className="text-primary" />,
      title: 'Briefing',
      description: 'Entendemos sua necessidade, objetivos e ideias para criar uma solução sob medida.'
    },
    {
      icon: <FileText size={28} className="text-primary" />,
      title: 'Proposta',
      description: 'Enviamos uma proposta detalhada, com prazos, valores e escopo do projeto.'
    },
    {
      icon: <Code size={28} className="text-primary" />,
      title: 'Desenvolvimento',
      description: 'Desenvolvimento ágil, com acompanhamento e feedbacks constantes.'
    },
    {
      icon: <Rocket size={28} className="text-primary" />,
      title: 'Entrega',
      description: 'Publicação, testes finais e entrega do projeto pronto para uso.'
    },
    {
      icon: <LifeBuoy size={28} className="text-primary" />,
      title: 'Suporte',
      description: 'Suporte pós-entrega para garantir o funcionamento e evolução da solução.'
    }
  ];

  return (
    <section id="como-trabalhamos" className="w-full py-24 px-2 md:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-medium animate-pulse">
            <ClipboardList size={18} />
            Como Trabalhamos
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Nosso processo de desenvolvimento
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Transparência, agilidade e parceria em cada etapa do seu projeto digital.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-6xl flex flex-col items-center">
            {/* Linha conectando os cards no desktop */}
            <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-border z-0" style={{transform: 'translateY(-50%)'}} />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 md:gap-10 xl:gap-6 w-full items-stretch justify-center">
              {steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 120} className="relative z-10">
                  <div
                    className={
                      `group flex flex-col items-center justify-center text-center bg-card border border-border rounded-2xl shadow-sm px-6 py-10 min-h-[210px] max-w-[260px] mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-md`
                    }
                  >
                    {/* Badge de etapa minimalista */}
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-muted text-muted-foreground text-xs font-semibold px-2 py-0.5 rounded-full z-20 whitespace-nowrap shadow-sm border border-border">
                      {idx + 1}
                    </span>
                    <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border shadow-sm">
                      {step.icon}
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2 max-w-[90%] mx-auto">{step.description}</p>
                  </div>
                  {/* Pontinho de conexão na linha (desktop) */}
                  {idx < steps.length - 1 && (
                    <span className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-20">
                      <span className="block w-3 h-3 rounded-full bg-border"></span>
                    </span>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { ClipboardList, FileText, Code, Rocket, LifeBuoy } from 'lucide-react';

const About = () => {
  const steps = [
    {
      icon: (
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
          <ClipboardList size={32} className="text-primary" />
        </span>
      ),
      title: 'Briefing',
      description: 'Entendemos sua necessidade, objetivos e ideias para criar uma solução sob medida.'
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
          <FileText size={32} className="text-primary" />
        </span>
      ),
      title: 'Proposta',
      description: 'Enviamos uma proposta detalhada, com prazos, valores e escopo do projeto.'
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
          <Code size={32} className="text-primary" />
        </span>
      ),
      title: 'Desenvolvimento',
      description: 'Desenvolvimento ágil, com acompanhamento e feedbacks constantes.'
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
          <Rocket size={32} className="text-primary" />
        </span>
      ),
      title: 'Entrega',
      description: 'Publicação, testes finais e entrega do projeto pronto para uso.'
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
          <LifeBuoy size={32} className="text-primary" />
        </span>
      ),
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-12 items-stretch justify-center">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={
                    `group relative flex flex-col items-center justify-center text-center max-w-[260px] min-h-[220px] mx-auto bg-white rounded-2xl shadow-xl px-6 py-10 transition-all duration-300 animate-fade-in-up` +
                    ' hover:-translate-y-1 hover:shadow-2xl'
                  }
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  {/* Badge de etapa minimalista */}
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full z-20 whitespace-nowrap">
                    {idx + 1}
                  </span>
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2 max-w-[90%] mx-auto">{step.description}</p>
                </div>
                {/* Seta SVG curva, fina e translúcida entre os cards no desktop */}
                {idx < steps.length - 1 && (
                  <span className="hidden xl:flex items-center justify-center mx-2">
                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12 Q24 24 42 12" stroke="#a3a3a3" strokeWidth="1.5" fill="none" opacity="0.3" />
                      <path d="M42 12 L36 6 M42 12 L36 18" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                    </svg>
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

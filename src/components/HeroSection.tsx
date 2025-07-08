import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedKeyboard from './AnimatedKeyboard';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge animada */}
        <div className="flex justify-center animate-fade-in-down">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Soluções digitais sob medida para sua ideia
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        {/* Título restaurado com cor original */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-balance text-foreground">
          Transforme seu projeto digital em realidade
        </h1>
        {/* Parágrafo com fade-in */}
        <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> 
          Somos especialistas em desenvolvimento de sites modernos, bots para Discord, automações e scripts exclusivos para FiveM. Da ideia ao suporte, entregamos inovação, performance e resultados reais para empresas, comunidades e criadores.
        </p>
        {/* Botões restaurados com cores originais */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] animate-shine">
            Solicitar Orçamento
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] animate-shine">
            Falar com Especialista
          </Button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-center" style={{scrollBehavior: 'smooth'}}>
            Entrar em contato
          </a>
        </div>
        <div className="pt-6 text-sm text-muted-foreground">
          Atendimento ágil • Soluções personalizadas • Suporte contínuo
        </div>
      </div>
      
      {/* Animated Keyboard */}
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <AnimatedKeyboard />
      </div>
    </section>
  );
};

export default HeroSection;

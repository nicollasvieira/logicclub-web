import React from 'react';
import { CreditCard, Shield, BarChart3, Settings, Globe, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} className="text-primary" />,
      title: "Desenvolvimento de Sites",
      description: "Criação de sites modernos, responsivos e otimizados para todos os dispositivos. Sua presença digital com performance e design profissional.",
      features: ["Landing pages", "Lojas virtuais", "Sites institucionais"]
    },
    {
      icon: <Zap size={28} className="text-primary" />,
      title: "Bots para Discord",
      description: "Automatize comunidades e servidores com bots personalizados para Discord. Comandos, integrações, moderação e muito mais.",
      features: ["Comandos customizados", "Integração com APIs", "Moderação automática"]
    },
    {
      icon: <Settings size={28} className="text-primary" />,
      title: "Bots e Scripts para FiveM",
      description: "Desenvolvimento de scripts e sistemas para servidores FiveM. Experiências únicas para sua comunidade de GTA RP.",
      features: ["Sistemas exclusivos", "Automação de eventos", "Integração com bancos de dados"]
    },
    {
      icon: <BarChart3 size={28} className="text-primary" />,
      title: "Painéis e Dashboards",
      description: "Visualize dados em tempo real com dashboards personalizados para web. Tome decisões com base em informações claras e acessíveis.",
      features: ["Gráficos interativos", "Filtros avançados", "Acesso seguro"]
    },
    {
      icon: <CreditCard size={28} className="text-primary" />,
      title: "Integrações e APIs",
      description: "Conecte sistemas, automatize processos e integre plataformas com APIs sob medida para o seu negócio.",
      features: ["Pagamentos online", "Integração com ERPs", "Automação de tarefas"]
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: "Consultoria e Suporte",
      description: "Conte com especialistas para tirar dúvidas, planejar projetos e garantir o funcionamento contínuo das suas soluções digitais.",
      features: ["Atendimento ágil", "Suporte técnico", "Planejamento de projetos"]
    }
  ];

  return (
    <section id="servicos" className="w-full py-24 px-6 md:px-12 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
            <Settings size={16} />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Soluções digitais sob medida para
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              sua empresa ou comunidade
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Somos especialistas em desenvolvimento web, automações, bots e integrações. Atendemos empresas, criadores de conteúdo e servidores de jogos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group h-full hover:scale-[1.06] hover:shadow-2xl hover:shadow-primary/20 transition-transform duration-300 animate-fade-in-up delay-[${index * 120}ms]`}
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm hover:bg-background hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:rotate-6 duration-300">
                    {service.icon}
                  </div>
                  <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

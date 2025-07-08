import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Site Institucional - Agência X",
      description: "Desenvolvimento de site institucional moderno, responsivo e otimizado para SEO, com painel de administração personalizado.",
      image: "bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700",
      stats: {
        paginas: "10+",
        tempo: "15 dias",
        tecnologia: "Next.js"
      },
      technologies: ["Next.js", "Tailwind", "Vercel"],
      year: "2024",
      category: "Website"
    },
    {
      title: "Bot Discord - Comunidade Y",
      description: "Bot personalizado para Discord com comandos de moderação, integração com APIs externas e sistema de níveis para engajamento.",
      image: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700",
      stats: {
        comandos: "20+",
        membros: "5.000+",
        uptime: "99.99%"
      },
      technologies: ["Node.js", "Discord.js", "MongoDB"],
      year: "2024",
      category: "Bot Discord"
    },
    {
      title: "Scripts FiveM - Servidor Z",
      description: "Desenvolvimento de scripts exclusivos para servidor FiveM, incluindo sistemas de economia, inventário e eventos automatizados.",
      image: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      stats: {
        scripts: "8 exclusivos",
        jogadores: "200+",
        suporte: "24/7"
      },
      technologies: ["Lua", "MySQL", "FiveM"],
      year: "2024",
      category: "FiveM"
    },
    {
      title: "E-commerce - Loja W",
      description: "Loja virtual completa, com integração de pagamentos, painel de controle e automação de estoque.",
      image: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500",
      stats: {
        produtos: "200+",
        vendas: "R$ 100mil+",
        plataforma: "Shopify"
      },
      technologies: ["Shopify", "React", "Node.js"],
      year: "2023",
      category: "E-commerce"
    },
    {
      title: "Dashboard Analytics - Empresa Q",
      description: "Dashboard de métricas em tempo real, gráficos interativos e relatórios customizados.",
      image: "bg-gradient-to-br from-cyan-500 via-blue-400 to-blue-700",
      stats: {
        gráficos: "12",
        usuários: "1.000+",
        integração: "API"
      },
      technologies: ["React", "Chart.js", "Express"],
      year: "2023",
      category: "Dashboard"
    },
    {
      title: "Landing Page - Startup V",
      description: "Landing page otimizada para conversão, com animações, formulário integrado e SEO avançado.",
      image: "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600",
      stats: {
        conversão: "18%",
        visitas: "50mil+",
        tempo: "7 dias"
      },
      technologies: ["Next.js", "Framer Motion", "Vercel"],
      year: "2023",
      category: "Landing Page"
    },
    {
      title: "App Mobile - Delivery Z",
      description: "Aplicativo mobile para delivery, com rastreamento em tempo real e notificações push.",
      image: "bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600",
      stats: {
        downloads: "10mil+",
        avaliações: "4.8/5",
        plataforma: "Flutter"
      },
      technologies: ["Flutter", "Firebase", "Dart"],
      year: "2022",
      category: "App Mobile"
    }
  ];

  // Responsivo: 1 no mobile, 2 no tablet, 3 no desktop
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);
  const goLeft = () => {
    if (current > 0 && !animating) {
      setDirection('left');
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => Math.max(0, c - 1));
        setAnimating(false);
      }, 350);
    }
  };
  const goRight = () => {
    if (current < maxIndex && !animating) {
      setDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => Math.min(maxIndex, c + 1));
        setAnimating(false);
      }, 350);
    }
  };

  // Indicador de página
  const totalPages = maxIndex + 1;
  const currentPage = Math.floor(current / visibleCount);

  return (
    <section id="projetos" className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
            <Award size={16} />
            Projetos Recentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Resultados que
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              geram valor real
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Veja alguns dos projetos entregues para empresas, comunidades e servidores de jogos. Soluções sob medida, com tecnologia de ponta.
          </p>
        </div>
        {/* Slider controlado */}
        <div className="relative flex items-center justify-center min-h-[520px]">
          {/* Setas premium */}
          <button
            className="hidden md:flex absolute left-[-56px] top-1/2 -translate-y-1/2 z-20 bg-card border border-border rounded-full p-3 shadow-lg hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={goLeft}
            aria-label="Ver projetos anteriores"
            type="button"
            disabled={current === 0 || animating}
            style={{ pointerEvents: animating ? 'none' : undefined }}
          >
            <ChevronLeft size={32} />
          </button>
          <div className="flex gap-8 w-full justify-center items-stretch relative overflow-hidden">
            <div className="flex w-full gap-8 justify-center items-stretch relative">
              {projects.slice(current, current + visibleCount).map((project, index) => (
                <div
                  key={index + current}
                  className={`group w-full max-w-[370px] h-full flex-shrink-0 flex-grow-0 transition-all duration-500
                    ${animating ? (direction === 'left' ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-100'}
                  `}
                  style={{ pointerEvents: animating ? 'none' : undefined }}
                >
                  <div className="h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col shadow-md">
                    <div className={`h-56 ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
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
                    <div className="p-8 space-y-6 flex flex-col flex-1">
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
                      <div className="flex flex-wrap gap-2 mt-auto">
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
          <button
            className="hidden md:flex absolute right-[-56px] top-1/2 -translate-y-1/2 z-20 bg-card border border-border rounded-full p-3 shadow-lg hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={goRight}
            aria-label="Ver próximos projetos"
            type="button"
            disabled={current >= maxIndex || animating}
            style={{ pointerEvents: animating ? 'none' : undefined }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
        {/* Indicador de página */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-primary' : 'bg-border'}`}
            />
          ))}
        </div>
        {/* Botão Ver mais projetos */}
        <div className="flex justify-center mt-8">
          <a
            href="#" // Troque para o link real se houver
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow hover:bg-primary/90 transition-all"
          >
            Ver mais projetos
            <ChevronRight size={22} />
          </a>
        </div>
      </div>
      {/* Animações de slide */}
      <style>{`
        @keyframes slide-left {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(40px); }
        }
        @keyframes slide-right {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-40px); }
        }
        .animate-slide-left { animation: slide-left 0.35s cubic-bezier(.4,0,.2,1); }
        .animate-slide-right { animation: slide-right 0.35s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </section>
  );
};

export default Projects;

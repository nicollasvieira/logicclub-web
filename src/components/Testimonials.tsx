import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, Users, TrendingUp, Shield } from 'lucide-react';

const allTestimonials = [
  {
    quote: "A LogicClub desenvolveu nosso site institucional com agilidade e qualidade. O design ficou incrível e a performance superou nossas expectativas!",
    author: "Lucas Almeida",
    company: "Almeida Tech",
    avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
    rating: 5
  },
  {
    quote: "O bot de Discord criado pela equipe facilitou muito a gestão da nossa comunidade. Suporte rápido e soluções inteligentes!",
    author: "Marina Souza",
    company: "Comunidade DevBR",
    avatar: "bg-gradient-to-br from-green-500 to-teal-600",
    rating: 5
  },
  {
    quote: "Contratamos a LogicClub para um sistema de automação no Discord e ficamos impressionados com o resultado. Recomendo!",
    author: "Rafael Torres",
    company: "FiveM Brasil RP",
    avatar: "bg-gradient-to-br from-orange-500 to-red-600",
    rating: 5
  },
  {
    quote: "O script para nosso servidor FiveM ficou perfeito, com funções personalizadas e sem bugs. Atendimento nota 10!",
    author: "Beatriz Lima",
    company: "Cidade Real RP",
    avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
    rating: 5
  },
  {
    quote: "A equipe da LogicClub é muito atenciosa e domina tudo de integração com APIs. Nosso site agora automatiza vendas e suporte via Discord!",
    author: "Thiago Martins",
    company: "Martins Host",
    avatar: "bg-gradient-to-br from-green-500 to-teal-600",
    rating: 5
  },
  {
    quote: "O painel administrativo que eles criaram para nosso projeto facilitou demais o dia a dia. Recomendo para quem quer tecnologia de verdade!",
    author: "Juliana Castro",
    company: "Castro Solutions",
    avatar: "bg-gradient-to-br from-orange-500 to-red-600",
    rating: 5
  },
  {
    quote: "A LogicClub entregou um bot de Discord totalmente customizado para nosso servidor de jogos. Funcionou 100% desde o primeiro dia!",
    author: "Pedro Henrique",
    company: "Arena Gamers",
    avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
    rating: 5
  },
  {
    quote: "O suporte pós-venda é diferenciado. Sempre que precisamos de ajustes, a equipe responde rápido e resolve tudo.",
    author: "Camila Ribeiro",
    company: "Ribeiro RP",
    avatar: "bg-gradient-to-br from-green-500 to-teal-600",
    rating: 5
  },
  {
    quote: "Já trabalhamos com várias empresas, mas a LogicClub foi a única que entendeu exatamente o que precisávamos para nosso servidor FiveM.",
    author: "Felipe Silva",
    company: "Brasil Play City",
    avatar: "bg-gradient-to-br from-orange-500 to-red-600",
    rating: 5
  }
];

const CARDS_PER_ROW = 3;
const VISIBLE_ROWS = 3;
const CARD_GAP = 32; // px (gap-8)
const SCROLL_SPEED = 0.5; // px por frame

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const Testimonials = () => {
  const rows = chunkArray(allTestimonials, CARDS_PER_ROW);
  const displayRows = [...rows, ...rows];
  const containerRef = useRef(null);
  const cardRowRef = useRef(null);
  const scrollRef = useRef(0);
  const frameRef = useRef();
  const [rowHeight, setRowHeight] = useState(0);

  useEffect(() => {
    // Medir altura real da linha
    if (cardRowRef.current) {
      setRowHeight(cardRowRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (!rowHeight) return;
    const totalRows = rows.length;
    const rowFullHeight = rowHeight + CARD_GAP;
    const maxScroll = rowFullHeight * totalRows;
    let running = true;

    function animate() {
      if (!containerRef.current) return;
      scrollRef.current += SCROLL_SPEED;
      if (scrollRef.current >= maxScroll) {
        scrollRef.current = 0;
      }
      containerRef.current.style.transform = `translateY(-${scrollRef.current}px)`;
      if (running) frameRef.current = requestAnimationFrame(animate);
    }
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
    };
  }, [rows.length, rowHeight]);

  // Altura total do container visível
  const containerHeight = rowHeight * VISIBLE_ROWS + CARD_GAP * (VISIBLE_ROWS - 1);

  const stats = [
    {
      icon: <Users size={24} className="text-primary" />,
      value: "500+",
      label: "Clientes Ativos"
    },
    {
      icon: <TrendingUp size={24} className="text-primary" />,
      value: "99.9%",
      label: "Uptime Garantido"
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      value: "24/7",
      label: "Suporte Dedicado"
    }
  ];

  return (
    <section id="depoimentos" className="w-full py-24 px-6 md:px-12 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="cosmic-grid opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
            <Quote size={16} />
            Depoimentos de Clientes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Confiança de quem já
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              transformou seu projeto
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Veja o que nossos clientes dizem sobre nossos serviços de desenvolvimento web, bots e automações.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-down">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div
          className="relative overflow-hidden py-8"
          style={{ height: rowHeight ? `${containerHeight}px` : undefined }}
        >
          <div
            ref={containerRef}
            style={{ willChange: 'transform' }}
          >
            {displayRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                ref={rowIdx === 0 ? cardRowRef : undefined}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
              >
                {row.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between bg-background/80 p-4 md:p-8 rounded-2xl border border-border shadow transition-all duration-500"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-base mb-4">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className={`h-14 w-14 rounded-full ${testimonial.avatar} flex items-center justify-center`}>
                        <span className="text-white font-bold text-xl">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-primary leading-tight">{testimonial.author}</div>
                        <div className="text-xs text-muted-foreground leading-tight">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

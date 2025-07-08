import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ContactForm from "../components/ContactForm";
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const faqItems = [
  {
    q: 'Quais serviços vocês oferecem?',
    a: 'Desenvolvimento de sites, bots para Discord, scripts para FiveM, integrações, automações e consultoria digital.'
  },
  {
    q: 'Qual o prazo médio para entrega de um projeto?',
    a: 'Depende do escopo, mas sites institucionais levam de 7 a 15 dias. Bots e scripts variam conforme a complexidade.'
  },
  {
    q: 'Oferecem suporte após a entrega?',
    a: 'Sim! Nosso suporte cobre dúvidas, correções e pequenas melhorias após a entrega.'
  },
  {
    q: 'Por que escolher a LogicClub?',
    a: 'Atendimento ágil, soluções personalizadas, uso de IA, experiência em bots e automações, e suporte contínuo.'
  }
];

const Index = () => {
  const [faqOpen, setFaqOpen] = useState(Array(faqItems.length).fill(false));
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState(Array(faqItems.length).fill(0));

  useEffect(() => {
    setHeights(
      contentRefs.current.map(ref => (ref ? ref.scrollHeight : 0))
    );
  }, [faqOpen]);

  const handleFaqToggle = (idx: number) => {
    setFaqOpen(openArr => openArr.map((open, i) => i === idx ? !open : open));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <div id="inicio">
          <Reveal delay={0}><HeroSection /></Reveal>
        </div>
        <div id="sobre">
          <Reveal delay={100}><About /></Reveal>
        </div>
        <div id="servicos">
          <Reveal delay={200}><Services /></Reveal>
        </div>
        <Reveal delay={300}><Features /></Reveal>
        <div id="projetos">
          <Reveal delay={400}><Projects /></Reveal>
        </div>
        <div id="depoimentos">
          <Reveal delay={500}><Testimonials /></Reveal>
          <Reveal delay={600}><ContactForm /></Reveal>
        </div>
        {/* FAQ Section */}
        <Reveal delay={700}>
        <section id="faq" className="w-full py-24 px-6 md:px-12 bg-background border-t border-border">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
                <ChevronDown size={16} />
                Perguntas Frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Dúvidas sobre nossos serviços?
              </h2>
              <p className="text-muted-foreground text-lg">
                Confira as respostas para as perguntas mais comuns sobre desenvolvimento, prazos e suporte.
              </p>
            </div>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="border rounded-lg p-4 bg-card/50 overflow-hidden transition-all duration-500">
                  <button
                    className="w-full flex items-center justify-between cursor-pointer font-medium text-foreground group-open:text-primary select-none bg-transparent border-0 outline-none text-left"
                    aria-expanded={faqOpen[idx]}
                    onClick={() => handleFaqToggle(idx)}
                  >
                    {item.q}
                    <ChevronDown size={18} className={`transition-transform ${faqOpen[idx] ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    ref={el => (contentRefs.current[idx] = el)}
                    style={{
                      maxHeight: faqOpen[idx] ? heights[idx] : 0,
                      opacity: faqOpen[idx] ? 1 : 0,
                      transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                      overflow: 'hidden',
                    }}
                  >
                    <p className="mt-2 text-muted-foreground animate-fade-in-up delay-100">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <div id="inicio">
          <HeroSection />
        </div>
        <div id="sobre">
          <About />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <Features />
        <div id="projetos">
          <Projects />
        </div>
        <div id="depoimentos">
          <Testimonials />
        </div>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

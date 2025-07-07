
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon, User, Briefcase, FolderOpen, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Update active page based on scroll position
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'servicos', 'projetos', 'depoimentos'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActivePage(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      const headerHeight = 100; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="inicio"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'inicio' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('inicio')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Início
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="sobre" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'sobre' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('sobre')}
              >
                <User size={16} className="inline-block mr-1.5" /> Sobre
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="servicos" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'servicos' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('servicos')}
              >
                <Briefcase size={16} className="inline-block mr-1.5" /> Serviços
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="projetos" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'projetos' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('projetos')}
              >
                <FolderOpen size={16} className="inline-block mr-1.5" /> Projetos
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="depoimentos" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'depoimentos' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('depoimentos')}
              >
                <MessageSquare size={16} className="inline-block mr-1.5" /> Depoimentos
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#inicio" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'inicio' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('inicio')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Início
              </a>
              <a 
                href="#sobre" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'sobre' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('sobre')}
              >
                <User size={16} className="inline-block mr-1.5" /> Sobre
              </a>
              <a 
                href="#servicos" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'servicos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('servicos')}
              >
                <Briefcase size={16} className="inline-block mr-1.5" /> Serviços
              </a>
              <a 
                href="#projetos" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'projetos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('projetos')}
              >
                <FolderOpen size={16} className="inline-block mr-1.5" /> Projetos
              </a>
              <a 
                href="#depoimentos" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'depoimentos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('depoimentos')}
              >
                <MessageSquare size={16} className="inline-block mr-1.5" /> Depoimentos
              </a>
              
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">Contato</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

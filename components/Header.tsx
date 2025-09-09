"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { OperatorSelector } from './OperatorSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Frota", href: "#frota" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">SM</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-primary">SM Locação</h1>
              <p className="text-xs text-muted-foreground font-body">de Máquinas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-body font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            
            <OperatorSelector message="Olá! Vim através do site da SM Locação e gostaria de solicitar um orçamento para meu projeto.">
              <Button variant="cta" size="sm">
                Orçamento
              </Button>
            </OperatorSelector>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="font-body font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:+5511999999999" className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </a>
                <OperatorSelector message="Olá! Vim através do site da SM Locação e gostaria de solicitar um orçamento para meu projeto.">
                  <Button variant="cta" size="sm" className="w-full">
                    Solicitar Orçamento
                  </Button>
                </OperatorSelector>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
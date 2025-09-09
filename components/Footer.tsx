"use client";

import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Linkedin,
  Heart,
  ArrowUp
} from "lucide-react";
import { OperatorSelector } from './OperatorSelector';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Guindastes Articulados tipo Munck",
    "Empilhadeiras",
    "Transportes Pesados",
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Frota", href: "#frota" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">SM</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">SM Locação</h3>
                <p className="text-sm opacity-80">de Máquinas</p>
              </div>
            </div>
            
            <p className="font-body text-sm opacity-90 mb-6 leading-relaxed">
              Há mais de 28 anos oferecendo soluções completas em locação de máquinas pesadas 
              com segurança, agilidade e confiabilidade.
            </p>

            {/* Slogan */}
            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 text-accent">
                <Heart className="w-5 h-5" />
                <span className="font-heading font-bold">
                  Pega leve, deixa o pesado com a gente.
                </span>
              </div>
            </div>

            
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('#servicos')}
                    className="font-body text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-heading font-semibold mb-3">Emergência 24h</h5>
              <Button 
                variant="cta" 
                size="sm"
                onClick={() => window.open("tel:+5519996032069", "_blank")}
                className="w-full"
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-body text-sm opacity-90">(19) 99603-2069</p>
                  <p className="font-body text-xs opacity-70">Seg-Sex: 7h às 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-body text-sm opacity-90">contato@smlocacao.com.br</p>
                  <p className="font-body text-xs opacity-70">Resposta em até 2h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-body text-sm opacity-90">Rua Ezio Colombo, 60 - JD Maria Mendes</p>
                  <p className="font-body text-sm opacity-90">Mogi-Guaçu/SP</p>
                </div>
              </div>
            </div>

            <OperatorSelector message="Olá! Gostaria de mais informações sobre os serviços da SM Locação.">
              <Button 
                variant="cta" 
                className="w-full mt-6"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </OperatorSelector>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-body text-sm opacity-90">
                © {currentYear} SM Locação de Máquinas. Todos os direitos reservados.
              </p>
              
            </div>

            <div className="flex items-center space-x-6">
             
              <Button 
                variant="ghost" 
                size="icon"
                onClick={scrollToTop}
                className="text-primary-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
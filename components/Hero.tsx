'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award, MessageCircle } from 'lucide-react';
import heroImage from '@/app/assets/images/empilhadeira.jpeg';
import { OperatorSelector } from './OperatorSelector';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar um orçamento para locação de máquinas.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const features = [
    { icon: Shield, text: 'Segurança Garantida' },
    { icon: Clock, text: 'Disponibilidade 24h' },
    { icon: Award, text: '25+ Anos de Experiência' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-blue-600/40 backdrop-blur-xs" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Pega leve,
                <br />
                <span className="text-accent">deixa o pesado</span>
                <br />
                com a gente.
              </h1>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Locação de guindastes Munck, empilhadeiras e transportes pesados. Soluções
                industriais confiáveis para sua empresa.
              </p>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <OperatorSelector message="Olá! Gostaria de solicitar um orçamento para locação de máquinas.">
                  <Button variant="hero" size="lg" className="px-8 py-4">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </OperatorSelector>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
                  onClick={() =>
                    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Nossos Serviços
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span className="font-body font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <h3 className="font-heading font-bold text-2xl text-white mb-4">
                    Atendimento Especializado
                  </h3>
                  <p className="font-body text-white/80 mb-6">
                    Nossa equipe está pronta para atender suas necessidades com agilidade e
                    profissionalismo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-heading font-bold text-3xl text-accent">500+</div>
                      <div className="font-body text-sm text-white/70">Projetos Atendidos</div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-3xl text-accent">24h</div>
                      <div className="font-body text-sm text-white/70">Suporte Técnico</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
  const handleFollowInstagram = () => {
    window.open('https://instagram.com/sm.locacao', '_blank');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Acompanhe Nossos Trabalhos
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja nossos equipamentos em ação e acompanhe os projetos que realizamos diariamente.
            Máquinas potentes, equipe especializada e resultados de qualidade.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <Instagram className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
              Siga a SM Locação no Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Acompanhe diariamente nossos equipamentos em ação, dicas de segurança e novidades do
              setor de locação de máquinas.
            </p>
            <Button variant="cta" size="lg" onClick={handleFollowInstagram} className="gap-2">
              <Instagram className="h-5 w-5" />
              Seguir @sm.locacao
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

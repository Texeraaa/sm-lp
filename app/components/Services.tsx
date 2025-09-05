'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, ShipWheel, ArrowRight } from "lucide-react";


export default function Services() {
     const services = [
    {
      icon: Truck,
      title: "Guindastes Munck",
      description: "Locação de guindastes automotivos para movimentação de cargas pesadas em canteiros de obra e indústrias.",
      features: [
        "Capacidade: 12 toneladas a 4 metros",
        "Alcance: 27 metros com 500kg",
        "Operadores certificados",
        "Atendimento 24 horas"
      ],
      highlight: "Mais Procurado"
    },
    {
      icon: Package,
      title: "Empilhadeiras",
      description: "Aluguel de empilhadeiras a combustão para movimentação eficiente em armazéns e fábricas.",
      features: [
        "Modelos de 2,5, 4 e 7 toneladas",
        "Todas a combustão",
        "Treinamento de operadores",
        "Manutenção inclusa"
      ]
    },
    {
      icon: ShipWheel,
      title: "Conjunto de Remoção",
      description: "Serviço especializado de remoção com macaco hidráulico para máquinas e equipamentos pesados.",
      features: [
        "Macaco hidráulico especializado",
        "Remoção segura de equipamentos",
        "Operadores especializados",
        "Equipamentos certificados"
      ]
    },
    {
      icon: Truck,
      title: "Transporte de Máquinas Pesadas",
      description: "Transporte especializado de máquinas e equipamentos industriais com segurança e agilidade.",
      features: [
        "Carretas especializadas",
        "Escolta quando necessário",
        "Seguro total da carga",
        "Logística personalizada"
      ]
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${service}.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };


    return (
    <section id="servicos" className="py-20 bg-background industrial-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em locação de máquinas pesadas, 
            com qualidade e segurança para sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-border bg-card group relative overflow-hidden">
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-heading font-semibold">
                  {service.highlight}
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 font-body text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  onClick={() => handleWhatsAppClick(service.title)}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-6">
            Precisa de uma solução personalizada? Nossa equipe está pronta para atender suas necessidades específicas.
          </p>
          <Button variant="cta" size="lg" onClick={() => handleWhatsAppClick("consultoria personalizada")}>
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}
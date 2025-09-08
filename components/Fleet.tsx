'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Weight, Ruler, Gauge, Phone, Truck, Box, Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import forkLiftImage from "@/app/assets/images/emp.jpeg";
import craneTruckImage from "@/app/assets/images/muncks.jpeg";

const FleetSection = () => {
  const heroEquipment = {
    id: 1,
    category: "Guindastes Munck",
    title: "Guindaste Munck 12T",
    subtitle: "Nosso equipamento premium",
    image: craneTruckImage,
    specs: {
      capacity: "12 toneladas",
      reach: "27 metros",
      rotation: "500kg no máximo"
    },
    highlights: ["4m a 12T", "27m a 500kg", "Operador Incluso"],
    features: ["Operador Incluso", "Manutenção Garantida", "Disponível 24h"],
    status: "Disponível",
    isPremium: true
  };

  const forklifts = [
    {
      id: 2,
      category: "Empilhadeiras",
      title: "Empilhadeira 2.5T",
      image: forkLiftImage,
      specs: {
        capacity: "2,5 toneladas",
        reach: "4.5 metros",
        rotation: "Combustão"
      },
      features: ["Alta Performance", "Área Externa", "Longa Autonomia"],
      status: "Disponível"
    },
    {
      id: 3,
      category: "Empilhadeiras",
      title: "Empilhadeira 4T",
      image: forkLiftImage,
      specs: {
        capacity: "4 toneladas",
        reach: "5 metros",
        rotation: "Combustão"
      },
      features: ["Capacidade Intermediária", "Versatilidade", "Operação Confiável"],
      status: "Disponível"
    },
    {
      id: 4,
      category: "Empilhadeiras",
      title: "Empilhadeira 7T",
      image: forkLiftImage,
      specs: {
        capacity: "7 toneladas",
        reach: "6 metros",
        rotation: "Combustão"
      },
      features: ["Alta Capacidade", "Para Cargas Pesadas", "Máxima Eficiência"],
      status: "Disponível"
    }
  ];

  const handleWhatsAppClick = (machine: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre a locação do ${machine}.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  const getStatusColor = (status: string) => {
    return status === "Disponível" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800";
  };

  return (
    <section id="frota" className="py-20 section-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-primary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Nossa Frota
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipamentos modernos e bem conservados, prontos para atender suas necessidades
            com segurança e eficiência.
          </p>
        </div>

        {/* Hero Equipment - Guindaste Munck */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Truck className="w-6 h-6 text-primary mr-3" />
            <h3 className="font-heading font-bold text-2xl text-foreground">Guindastes Munck</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-border/50 overflow-hidden group relative p-0">
              {/* Premium badge */}
              <div className="absolute top-6 left-6 z-20">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white font-semibold border-0 shadow-lg">
                  <Star className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
              
              {/* Status badge */}
              <div className="absolute top-6 right-6 z-20">
                <Badge className="bg-green-500/90 text-white backdrop-blur-sm border-0">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {heroEquipment.status}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-96 m-0 p-0 overflow-hidden">
                  <Image 
                    src={heroEquipment.image}
                    alt={heroEquipment.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                  <div className="mb-4">
                    <p className="text-primary font-medium text-sm mb-1">{heroEquipment.subtitle}</p>
                    <h4 className="font-heading font-bold text-3xl text-foreground mb-4">
                      {heroEquipment.title}
                    </h4>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {heroEquipment.highlights.map((highlight, index) => (
                      <div key={index} className="bg-primary/10 rounded-lg p-3 text-center">
                        <div className="font-heading font-bold text-lg text-primary">
                          {highlight}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Weight className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-body text-xs text-muted-foreground">Capacidade</div>
                      <div className="font-heading font-semibold">{heroEquipment.specs.capacity}</div>
                    </div>
                    <div className="text-center">
                      <Ruler className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-body text-xs text-muted-foreground">Alcance</div>
                      <div className="font-heading font-semibold">{heroEquipment.specs.reach}</div>
                    </div>
                    <div className="text-center">
                      <Gauge className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-body text-xs text-muted-foreground">Especial</div>
                      <div className="font-heading font-semibold">{heroEquipment.specs.rotation}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {heroEquipment.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 font-body text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="cta" 
                    size="lg"
                    className="w-full group-hover:shadow-xl transition-all duration-300"
                    onClick={() => handleWhatsAppClick(heroEquipment.title)}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Orçamento Premium
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Forklifts Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Box className="w-6 h-6 text-accent mr-3" />
            <h3 className="font-heading font-bold text-2xl text-foreground">Empilhadeiras</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forklifts.map((item) => (
              <Card key={item.id} className="glass-card border-border/50 overflow-hidden group hover:shadow-xl transition-all duration-300 p-0">
                <div className="relative h-48 m-0 p-0 overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm border-0 font-medium">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/90 text-white backdrop-blur-sm border-0">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {item.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="font-heading font-bold text-xl text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Weight className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="font-body text-xs text-muted-foreground">Capacidade</div>
                      <div className="font-heading font-semibold text-sm">{item.specs.capacity}</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Ruler className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="font-body text-xs text-muted-foreground">Alcance</div>
                      <div className="font-heading font-semibold text-sm">{item.specs.reach}</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Gauge className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="font-body text-xs text-muted-foreground">Tipo</div>
                      <div className="font-heading font-semibold text-sm">{item.specs.rotation}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 font-body text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="default"
                    className="w-full group-hover:shadow-lg transition-all duration-300 mb-4"
                    onClick={() => handleWhatsAppClick(item.title)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card border-border/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">
                Não encontrou o que precisa?
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Nossa frota especializada está sempre pronta 
                para atender suas necessidades com agilidade e qualidade.
              </p>
            </div>
            <Button 
              variant="cta" 
              size="lg" 
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => handleWhatsAppClick("informações sobre nossa frota especializada")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
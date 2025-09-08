import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, Users, Wrench, Heart } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "25+", label: "Anos de Experiência", icon: Award },
    { number: "500+", label: "Projetos Realizados", icon: Users },
    { number: "24h", label: "Suporte Técnico", icon: Clock },
  ];

  const differentials = [
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Todos os nossos equipamentos passam por rigorosa manutenção preventiva e nossos operadores são certificados e treinados regularmente."
    },
    {
      icon: Clock,
      title: "Agilidade na Entrega",
      description: "Frota própria e equipe dedicada garantem entregas rápidas e flexibilidade para atender prazos apertados de sua obra."
    },
    {
      icon: Heart,
      title: "Confiabilidade Comprovada",
      description: "25 anos no mercado construindo relacionamentos sólidos com nossos clientes através de serviços de qualidade e transparência."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Sobre a SM Locação
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground">
              <p>
                Fundada em 1999, a <strong className="text-foreground">SM Locação de Máquinas</strong> nasceu 
                da visão de oferecer soluções completas em movimentação de cargas pesadas para o 
                setor industrial e da construção civil.
              </p>
              <p>
                Ao longo de mais de duas décadas, construímos nossa reputação baseada em três 
                pilares fundamentais: <strong className="text-primary">segurança</strong>, 
                <strong className="text-primary"> agilidade</strong> e 
                <strong className="text-primary"> confiabilidade</strong>.
              </p>
              <p>
                Nossa equipe especializada e frota moderna garantem que cada projeto seja 
                executado com excelência, desde pequenas movimentações até grandes operações industriais.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-heading font-bold text-2xl text-primary">{stat.number}</div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentials */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8">
              Nossos Diferenciais
            </h3>
            
            {differentials.map((item, index) => (
              <Card key={index} className="border-border bg-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="font-body text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Facilitar a vida de nossos clientes oferecendo soluções em locação de máquinas pesadas 
              com <strong className="text-primary">qualidade</strong>, 
              <strong className="text-primary"> segurança</strong> e 
              <strong className="text-primary"> agilidade</strong>, contribuindo para o sucesso 
              de seus projetos e o desenvolvimento da indústria brasileira.
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-accent-light rounded-full px-6 py-3">
                <Heart className="w-5 h-5 text-accent" />
                <span className="font-heading font-semibold text-accent">
                  Pega leve, deixa o pesado com a gente.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
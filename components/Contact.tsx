'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building,
  User,
  Users,
  Wrench,
} from 'lucide-react';
import { OperatorSelector } from './OperatorSelector';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone Central',
      content: '(19) 99603-2069',
      action: 'tel:+5519996032069',
      type: 'phone',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Operadores',
      content: '2 Especialistas Disponíveis',
      action: '',
      type: 'whatsapp',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@smlocacao.com.br',
      action: 'mailto:contato@smlocacao.com.br',
      type: 'email',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Ezio Colombo, 60 - JD Maria Mendes - Mogi-Guaçu/SP',
      action: 'https://maps.app.goo.gl/RL2MkW4iNoNEXbkA9',
      type: 'map',
    },
  ];

  const businessHours = [
    { day: 'Segunda a Sexta', hours: '07:00 às 18:00' },
    { day: 'Sábados', hours: '08:00 às 18:00' },
    { day: 'Domingos', hours: 'Plantão 24h' },
    { day: 'Emergências', hours: '24 horas por dia' },
  ];

  const operators = [
    {
      name: 'Mauro Alborghette Filho',
      specialties: ['Operador Munck', 'Atendimento ao Cliente', 'Orçamentos'],
    },
    {
      name: 'Raphael Alborghette Pallini',
      specialties: ['Operador Munck', 'Atendimento ao Cliente', 'Orçamentos'],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `
Olá! Gostaria de falar com os operadores especializados para solicitar um orçamento:

*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}

Gostaria de ser atendido pelos operadores Mauro ou Raphael.
    `.trim();

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

  toast('Sua mensagem foi preparada e você será redirecionado para o WhatsApp.');

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleQuickContact = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank');
    } else {
      window.location.href = action;
    }
  };

  return (
    <section id="contato" className="py-20 bg-background industrial-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossos operadores especializados cuidam tanto da operação dos equipamentos quanto do
            atendimento aos clientes. Fale diretamente com quem entende do assunto e receba uma
            proposta personalizada rapidamente.
          </p>
        </div>

        {/* Operators Section */}
        <div className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="font-heading font-bold text-2xl text-foreground flex items-center justify-center space-x-3">
                <Users className="w-7 h-7 text-primary" />
                <span>Nossos Operadores Especializados</span>
              </CardTitle>
              <p className="font-body text-muted-foreground mt-2">
                Atendimento direto com quem opera os equipamentos
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {operators.map((operator, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-foreground">
                          {operator.name}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground">
                          Operador & Atendimento
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {operator.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="font-body text-sm text-foreground">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Vantagem única: fale diretamente com quem conhece os equipamentos na prática
                </p>
                <OperatorSelector message="Olá! Gostaria de falar com os operadores especializados para solicitar um orçamento. Preciso de atendimento personalizado para meu projeto.">
                  <Button variant="cta">
                    <MessageCircle className="w-5 h-5" />
                    Falar com os Operadores
                  </Button>
                </OperatorSelector>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-heading font-bold text-2xl text-foreground flex items-center space-x-2">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Solicitar Orçamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Serviço Desejado *
                    </label>
                    <Select
                      name="service"
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, service: value }))
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="munck">Locação de Munck</SelectItem>
                        <SelectItem value="empilhadeira">Locação de Empilhadeira</SelectItem>
                        <SelectItem value="transporte">Transporte de Cargas</SelectItem>
                        <SelectItem value="operador">Operador Especializado</SelectItem>
                        <SelectItem value="manutencao">Manutenção e Reparo</SelectItem>
                        <SelectItem value="outros">Outros Serviços</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Detalhes do Projeto
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva detalhes sobre o projeto, localização, data desejada, etc."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  <OperatorSelector
                    message={`Olá! Gostaria de falar com os operadores especializados para solicitar um orçamento:

📋 *Informações do Cliente:*
• Nome: ${formData.name}
• Empresa: ${formData.company}
• Email: ${formData.email}
• Telefone: ${formData.phone}

🚛 *Serviço Solicitado:*
${formData.service}

💬 *Detalhes da Solicitação:*
${formData.message}`}
                  >
                    <Button type="button" variant="cta" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5" />
                      Enviar via WhatsApp
                    </Button>
                  </OperatorSelector>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-heading font-bold text-xl text-foreground">
                  Contato Rápido
                </CardTitle>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Seus operadores especializados irão atendê-lo diretamente
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) =>
                  info.type === 'whatsapp' ? (
                    <OperatorSelector
                      key={index}
                      message="Olá! Gostaria de falar com os operadores especializados para tirar dúvidas ou solicitar um orçamento."
                    >
                      <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors text-left">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-body font-medium text-sm text-foreground">
                            {info.title}
                          </div>
                          <div className="font-body text-sm text-muted-foreground">
                            {info.content}
                          </div>
                        </div>
                      </button>
                    </OperatorSelector>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handleQuickContact(info.action)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors text-left"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-body font-medium text-sm text-foreground">
                          {info.title}
                        </div>
                        <div className="font-body text-sm text-muted-foreground">
                          {info.content}
                        </div>
                      </div>
                    </button>
                  )
                )}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-heading font-bold text-xl text-foreground flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-body text-sm text-foreground">{schedule.day}</span>
                    <span className="font-body text-sm font-medium text-primary">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-accent bg-accent/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  Emergência 24h
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Precisou fora do horário? Temos plantão para emergências.
                </p>
                <Button
                  variant="cta"
                  size="sm"
                  onClick={() => handleQuickContact('tel:+5519996032069')}
                >
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

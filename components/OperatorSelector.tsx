import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, User, Clock } from 'lucide-react';

interface Operator {
  id: string;
  name: string;
  phone: string;
  specialty: string;
  avatar: string;
  availability: string;
}

interface OperatorSelectorProps {
  children: React.ReactNode;
  message: string;
  triggerClassName?: string;
}

const operators: Operator[] = [
  {
    id: '1',
    name: 'Mauro Alborghette Filho',
    phone: '5519996032069',
    specialty: 'Operador de Munck',
    avatar: '👷🏾‍♂️',
    availability: 'Disponível agora',
  },
  {
    id: '2',
    name: 'Raphael Alborghette Pallini',
    phone: '5519998392024',
    specialty: 'Operador de Munck',
    avatar: '👷🏻‍♂️',
    availability: 'Disponível agora',
  }
];

export const OperatorSelector: React.FC<OperatorSelectorProps> = ({ 
  children, 
  message, 
  triggerClassName 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOperatorClick = (operator: Operator) => {
    const whatsappUrl = `https://wa.me/${operator.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Escolha seu Operador</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground text-center">
            Selecione o operador especializado para atender sua solicitação
          </p>
          
          {operators.map((operator) => (
            <Card 
              key={operator.id} 
              className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/50"
              onClick={() => handleOperatorClick(operator)}
            >
              <CardContent className="p-2">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{operator.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-sm">{operator.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{operator.specialty}</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">{operator.availability}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="operator-message-btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground">
              🔒 Seus dados são protegidos e nunca compartilhados
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

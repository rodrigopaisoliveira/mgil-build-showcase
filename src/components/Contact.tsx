import { useState } from "react";
import { Phone, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Construir o mailto
    const emailTo = "teuemail@dominio.com"; // <-- substitui pelo email de destino
    const subject = encodeURIComponent("Pedido de Orçamento - Website");
    const body = encodeURIComponent(
      `Olá,

O meu nome é ${formData.name} (${formData.email}${
        formData.phone ? ", telemóvel: " + formData.phone : ""
      }).

Mensagem:
${formData.message}

Cumprimentos,
${formData.name}`
    );

    // Abrir o cliente de email
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Feedback ao utilizador
    toast({
      title: "A abrir o cliente de email...",
      description: "Se não abrir automaticamente, verifique o seu gestor de email.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em <span className="text-gold">Contacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Estamos prontos para o ajudar. 
            Entre em contacto connosco para um orçamento gratuito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Informações de Contacto
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-elegant hover:shadow-gold transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                    <a
                      href="tel:925461902"
                      className="text-muted-foreground hover:text-gold transition-smooth"
                    >
                      925 461 902
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-elegant hover:shadow-gold transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Facebook</h4>
                    <a
                      href="https://www.facebook.com/marco.gil.564/?locale=pt_PT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-gold transition-smooth"
                    >
                      MarcoGil Construções
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-elegant hover:shadow-gold transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Localização</h4>
                    <p className="text-muted-foreground">
                      Serviços em toda a região
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 border-0 shadow-elegant">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Solicitar Orçamento
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Opcional"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o seu projeto..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold transition-smooth rounded-xl"
                  size="lg"
                >
                  Solicitar Orçamento
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

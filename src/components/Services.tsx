import { Droplets, Paintbrush, Hammer, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import waterproofingImg from "@/assets/waterproofing.jpg";
import paintingImg from "@/assets/painting.jpg";
import drywallImg from "@/assets/drywall.jpg";
import plumbingImg from "@/assets/plumbing.jpg";

const services = [
  {
    icon: Droplets,
    title: "Impermeabilização",
    description: "Telhados, terraços, coberturas, algerozes, caleiras, alçados e juntas de dilatação.",
    image: waterproofingImg,
  },
  {
    icon: Paintbrush,
    title: "Pinturas",
    description: "Prédios, moradias, apartamentos, lojas e escritórios - interiores e exteriores.",
    image: paintingImg,
  },
  {
    icon: Hammer,
    title: "Aplicação",
    description: "Paredes e divisórias em pladur, chão flutuante e acabamentos de qualidade.",
    image: drywallImg,
  },
  {
    icon: Wrench,
    title: "Canalização",
    description: "Instalação e reparação de esgotos e águas com garantia de qualidade.",
    image: plumbingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Os Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de construção e remodelação 
            com a mais alta qualidade e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-gold transition-smooth cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-10 h-10 text-gold" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gold transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Qualidade e Confiança em{" "}
            <span className="text-gold">Cada Projeto</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Especialistas em impermeabilização, pinturas, aplicação de pladur e canalização. 
            Transformamos espaços com profissionalismo e excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gold hover:bg-gold-dark text-primary font-semibold text-lg px-8 shadow-gold transition-smooth"
            >
              Peça o seu Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white font-semibold text-lg px-8 transition-all duration-300"
          >
            Ver Serviços
          </Button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

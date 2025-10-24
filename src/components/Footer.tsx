import { Phone, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">MGil</span>
              <span className="text-gold"> Construções</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Qualidade e confiança em cada projeto. 
              Especialistas em construção e remodelação.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li>Impermeabilização</li>
              <li>Pinturas</li>
              <li>Aplicação de Pladur</li>
              <li>Canalização</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contactos</h3>
            <div className="space-y-3">
              <a
                href="tel:925461902"
                className="flex items-center space-x-2 text-white/80 hover:text-gold transition-smooth"
              >
                <Phone className="w-5 h-5" />
                <span>925 461 902</span>
              </a>
              <a
                href="https://www.facebook.com/marcogilconstrucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-gold transition-smooth"
              >
                <Facebook className="w-5 h-5" />
                <span>MarcoGil Construções</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} MGil Construções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

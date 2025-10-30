import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-white shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold flex items-center space-x-1 focus:outline-none"
          >
            <span className="text-primary">MFGIL</span>
            <span className="text-gold"> Construções</span>
          </button>
        </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-gold transition-smooth font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-gold transition-smooth font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-gold transition-smooth font-medium"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-gold transition-smooth font-medium"
              >
                Contacto
              </button>

              {/* Botão Desktop → Pedir Orçamento */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold"
              >
                Pedir Orçamento
              </Button>
            </div>

            {/* Mobile Menu Button + Call Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Botão para Ligar */}
              <button
                onClick={() => window.open("tel:925461902")}
                className="px-3 py-2 bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold rounded-xl transition-all duration-300"
                aria-label="Ligar agora"
              >
                <Phone size={20} />
              </button>

              {/* Botão do Menu */}
              <button
                className="text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fundo desfocado quando o menu está aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 right-0 z-50 md:hidden bg-white border-t border-border py-4 rounded-b-2xl shadow-elegant animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-gold transition-smooth font-medium text-left px-4"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-gold transition-smooth font-medium text-left px-4"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-gold transition-smooth font-medium text-left px-4"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-gold transition-smooth font-medium text-left px-4"
            >
              Contacto
            </button>
            <div className="px-4">
            <a
              href="tel:+351925461902"
              className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold flex items-center justify-center py-2 rounded"
            >
              <Phone className="w-4 h-4 mr-2" />
              925 461 902
            </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

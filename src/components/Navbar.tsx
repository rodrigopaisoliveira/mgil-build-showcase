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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-white shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">MGil</span>
              <span className="text-gold"> Construções</span>
            </div>
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
            <Button
              onClick={() => window.open("tel:925461902")}
              className="bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold"
            >
              <Phone className="w-4 h-4 mr-2" />
              925 461 902
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border py-4">
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
                <Button
                  onClick={() => window.open("tel:925461902")}
                  className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  925 461 902
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

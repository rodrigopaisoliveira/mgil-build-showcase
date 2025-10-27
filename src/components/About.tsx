import { Award, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Qualidade",
    description: "Compromisso com a excelência em cada projeto que realizamos.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Construímos relações duradouras baseadas na transparência.",
  },
  {
    icon: Users,
    title: "Profissionalismo",
    description: "Equipa experiente e dedicada ao sucesso do seu projeto.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a <span className="text-gold">MFGIL Construções</span>
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Somos uma empresa especializada em serviços de construção e remodelação, 
              dedicada a proporcionar soluções de qualidade superior aos nossos clientes. 
              Com anos de experiência no mercado, a MFGIL Construções estabeleceu-se como 
              uma referência em profissionalismo, confiança e atenção ao detalhe.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Cada projeto é tratado com o máximo cuidado e dedicação, garantindo 
              resultados que superam as expectativas. A nossa missão é transformar 
              espaços e criar ambientes que reflitam a visão dos nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-elegant hover:shadow-gold transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

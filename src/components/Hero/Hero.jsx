// Hero.jsx
import { Button } from "../ui/Button";
import { HeroContainer, HeroContent, HeroText, HeroImage } from "./styles";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>
            Transforme seu carro com a <span>EastSiders</span>
          </h1>
          <p>
            Qualidade, confiança e paixão por veículos.
            Oferecemos serviços premium de estética automotiva para deixar seu carro impecável.
          </p>
          <Button variant="primary" size="lg">
            Solicitar Orçamento
          </Button>
        </HeroText>

        <HeroImage>
          <img
            src="https://source.unsplash.com/800x600/?luxury,car"
            alt="Carro de luxo detalhado"
            loading="lazy"
          />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
}

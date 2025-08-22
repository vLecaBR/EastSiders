import { Wrench, Droplet, SprayCan, Car } from "lucide-react";
import { ServicesContainer, ServicesGrid, ServiceCard } from "./Services.styles";

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Manutenção Preventiva",
    desc: "Cuidamos de cada detalhe para manter seu carro em perfeito estado.",
  },
  {
    icon: <Droplet size={32} />,
    title: "Lavagem Premium",
    desc: "Lavagem detalhada com produtos de alta qualidade para brilho duradouro.",
  },
  {
    icon: <SprayCan size={32} />,
    title: "Pintura e Retoque",
    desc: "Recuperamos a pintura e eliminamos imperfeições com acabamento impecável.",
  },
  {
    icon: <Car size={32} />,
    title: "Personalização",
    desc: "Customize seu carro com estilo e exclusividade.",
  },
];

export default function Services() {
  return (
    <ServicesContainer>
      <h2>Nossos Serviços</h2>
      <p>Oferecemos soluções completas para deixar seu veículo impecável.</p>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}

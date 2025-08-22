// Services.jsx
import { Wrench, Droplet, SprayCan, Car } from "lucide-react";
import { motion } from "framer-motion";
import { ServicesContainer, ServicesGrid, ServiceCard } from "./styles";

const services = [
  {
    icon: <Wrench size={32} aria-label="Manutenção" />,
    title: "Manutenção Preventiva",
    desc: "Cuidamos de cada detalhe para manter seu carro em perfeito estado.",
  },
  {
    icon: <Droplet size={32} aria-label="Lavagem" />,
    title: "Lavagem Premium",
    desc: "Lavagem detalhada com produtos de alta qualidade para brilho duradouro.",
  },
  {
    icon: <SprayCan size={32} aria-label="Pintura" />,
    title: "Pintura e Retoque",
    desc: "Recuperamos a pintura e eliminamos imperfeições com acabamento impecável.",
  },
  {
    icon: <Car size={32} aria-label="Personalização" />,
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ServiceCard>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </ServiceCard>
          </motion.div>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}

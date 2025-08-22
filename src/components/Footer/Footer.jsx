// Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, Wrench } from "lucide-react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SocialLinks,
} from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo e descrição */}
        <FooterSection>
          <div className="logo">
            <Wrench size={32} />
            <span>EastSiders</span>
          </div>
          <p>Transformando veículos com cuidado e excelência automotiva.</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a href="mailto:contato@eastsiders.com" aria-label="Email">
              <Mail />
            </a>
            <a href="tel:+5511999999999" aria-label="Telefone">
              <Phone />
            </a>
          </SocialLinks>
        </FooterSection>

        {/* Links rápidos */}
        <FooterSection>
          <h4>Links Rápidos</h4>
          <Link to="/">Início</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to="/contact">Contato</Link>
        </FooterSection>

        {/* Contato */}
        <FooterSection>
          <h4>Contato</h4>
          <p>Email: contato@eastsiders.com</p>
          <p>Tel: (11) 99999-9999</p>
          <p>Endereço: Rua da Oficina, 123 - SP</p>
        </FooterSection>
      </FooterContent>

      <div className="copy">
        © {new Date().getFullYear()} EastSiders. Todos os direitos reservados.
      </div>
    </FooterContainer>
  );
}

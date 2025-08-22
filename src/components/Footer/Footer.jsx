import { Facebook, Instagram, Mail, Phone, Wrench } from "lucide-react";
import { FooterContainer, FooterContent, FooterSection, SocialLinks } from "./styles";

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
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="mailto:contato@eastsiders.com"><Mail /></a>
            <a href="tel:+5511999999999"><Phone /></a>
          </SocialLinks>
        </FooterSection>

        {/* Links rápidos */}
        <FooterSection>
          <h4>Links Rápidos</h4>
          <a href="/">Início</a>
          <a href="/services">Serviços</a>
          <a href="/gallery">Galeria</a>
          <a href="/contact">Contato</a>
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
        © 2025 EastSiders. Todos os direitos reservados.
      </div>
    </FooterContainer>
  );
}

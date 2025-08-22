import React from "react";
import styled from "styled-components";
import { Button } from "../../components/UI/Button/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/UI/Card/Card";
import { Input } from "../../components/UI/Input/Input";
import { Label } from "../../components/UI/Label/Label";
import { TextArea } from "../../components/UI/TextArea/TextArea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/UI/Select/Select";
import { Badge } from "../../components/UI/Badge/Badge";
import { Wrench, MapPin, Phone, Mail, Clock, Car, MessageSquare, Calendar } from "lucide-react";

// ====== Styled Components ======
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const NavLink = styled.a`
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.foreground)};
  font-weight: ${({ active }) => (active ? 500 : 400)};
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(to bottom right, ${({ theme }) => theme.colors.primary}10, ${({ theme }) => theme.colors.accent}05);
  padding: 64px 16px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 16px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 720px;
  margin: 0 auto;
`;

// Grid Layouts
const Section = styled.section`
  padding: 80px 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridTwoCols = styled.div`
  display: grid;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridFourCols = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 48px 16px;
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 32px;
  padding-top: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

// ====== ContactPage Component ======
export default function ContactPage() {
  return (
    <PageContainer>
      {/* Navbar */}
      <Nav>
        <NavInner>
          <NavLogo>
            <Wrench size={24} color="#3B82F6" />
            EastSiders
          </NavLogo>

          <NavLinks>
            <NavLink href="/">Início</NavLink>
            <NavLink href="/services">Serviços</NavLink>
            <NavLink href="/gallery">Galeria</NavLink>
            <NavLink href="/contact" active>Contato</NavLink>
          </NavLinks>

          <Button asChild>
            <a href="tel:11-9999-9999">Ligar Agora</a>
          </Button>
        </NavInner>
      </Nav>

      {/* Hero */}
      <HeroSection>
        <HeroTitle>Entre em Contato</HeroTitle>
        <HeroSubtitle>
          Pronto para começar seu projeto automotivo? Entre em contato hoje para uma consulta e orçamento gratuitos.
        </HeroSubtitle>
      </HeroSection>

      {/* Contact Form & Info */}
      <Section>
        <GridTwoCols>
          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>
                <MessageSquare size={20} color="#3B82F6" style={{ marginRight: 8 }} />
                Envie uma Mensagem
              </CardTitle>
              <CardDescription>Preencha o formulário abaixo e retornaremos em até 24 horas.</CardDescription>
            </CardHeader>

            <CardContent>
              <GridTwoCols>
                <div>
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="João" />
                </div>
                <div>
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Silva" />
                </div>
              </GridTwoCols>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="joao@exemplo.com" />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
              </div>

              <div>
                <Label htmlFor="vehicle">Informações do Veículo</Label>
                <Input id="vehicle" placeholder="Ano, Marca, Modelo" />
              </div>

              <div>
                <Label htmlFor="service">Serviço Necessário</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repair">Reparo Geral</SelectItem>
                    <SelectItem value="maintenance">Manutenção</SelectItem>
                    <SelectItem value="modification">Modificação Personalizada</SelectItem>
                    <SelectItem value="diagnostic">Diagnóstico</SelectItem>
                    <SelectItem value="inspection">Inspeção</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Conte-nos sobre seu projeto..." />
              </div>

              <Button size="lg" style={{ width: "100%" }}>Enviar Mensagem</Button>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div>
            {/* Horário */}
            <Card>
              <CardHeader>
                <CardTitle><Clock size={20} style={{ marginRight: 8 }} /> Horário de Funcionamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>Segunda - Sexta</span>
                  <Badge>8:00 - 18:00</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>Sábado</span>
                  <Badge>9:00 - 16:00</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Domingo</span>
                  <Badge variant="outline">Fechado</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <Phone size={20} style={{ marginRight: 8 }} />
                  <div>
                    <p>Telefone</p>
                    <p>(11) 9999-9999</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <Mail size={20} style={{ marginRight: 8 }} />
                  <div>
                    <p>E-mail</p>
                    <p>contato@eastsiders.com.br</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MapPin size={20} style={{ marginRight: 8 }} />
                  <div>
                    <p>Endereço</p>
                    <p>Rua Principal, 123 - Centro, SP 01234-567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Serviços de Emergência */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: "#F87171" }}><Car size={20} style={{ marginRight: 8 }} /> Serviços de Emergência</CardTitle>
                <CardDescription>Precisa de assistência na estrada ou reparos de emergência?</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" asChild style={{ width: "100%" }}>
                  <a href="tel:11-9999-9999"><Phone size={16} style={{ marginRight: 4 }} /> Ligar Linha de Emergência</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </GridTwoCols>
      </Section>

      {/* Footer */}
      <Footer>
        <GridFourCols>
          <div>
            <NavLogo><Wrench size={24} /> EastSiders</NavLogo>
            <p>Seus especialistas automotivos de confiança desde 2010.</p>
          </div>
          <div>
            <h3>Serviços</h3>
            <ul>
              <li>Reparos Automotivos</li>
              <li>Modificações</li>
              <li>Manutenção</li>
              <li>Diagnósticos</li>
            </ul>
          </div>
          <div>
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="/services">Serviços</a></li>
              <li><a href="/gallery">Galeria</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3>Informações de Contato</h3>
            <ul>
              <li>(11) 9999-9999</li>
              <li>contato@eastsiders.com.br</li>
              <li>Rua Principal, 123 - Centro</li>
              <li>Seg-Sex 8h-18h</li>
            </ul>
          </div>
        </GridFourCols>
        <FooterBottom>&copy; 2024 EastSiders Oficina Automotiva. Todos os direitos reservados.</FooterBottom>
      </Footer>
    </PageContainer>
  );
}

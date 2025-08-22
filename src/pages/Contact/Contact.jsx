// ContactPage.jsx
import React from "react";
import styled from "styled-components";
import Button  from "../../components/UI/Button/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/UI/Card/Card";
import { Input } from "../../components/UI/Input/Input";
import { Label } from "../../components/UI/Label/Label";
import { TextArea } from "../../components/UI/TextArea/TextArea"; // <- ajustei pra usar o mesmo nome no JSX
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/UI/Select/Select";
import { Wrench, MapPin, Phone, Mail, Clock, Car, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom"; // <- caso esteja usando react-router

// ====== Styled Components ======
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

// ... (resto dos styleds iguais)

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
            <NavLink as={Link} to="/">Início</NavLink>
            <NavLink as={Link} to="/services">Serviços</NavLink>
            <NavLink as={Link} to="/gallery">Galeria</NavLink>
            <NavLink as={Link} to="/contact" active>Contato</NavLink>
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
                <TextArea id="message" placeholder="Conte-nos sobre seu projeto..." /> 
              </div>

              <Button size="lg" style={{ width: "100%" }}>Enviar Mensagem</Button>
            </CardContent>
          </Card>

          {/* Info Cards */}
          {/* ... iguais */}
        </GridTwoCols>
      </Section>

      {/* Footer */}
      {/* ... igual */}
    </PageContainer>
  );
}

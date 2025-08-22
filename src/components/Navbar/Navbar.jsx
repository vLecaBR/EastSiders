import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import {
  Nav,
  NavContent,
  Logo,
  NavLinks,
  MobileMenu,
  MenuButton,
} from "./styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavContent>
        {/* Logo */}
        <Logo as="a" href="#hero">
          <Wrench size={28} />
          <span>EastSiders</span>
        </Logo>

        {/* Links desktop */}
        <NavLinks>
          <a href="#hero">Início</a>
          <a href="#services">Serviços</a>
          <a href="#gallery">Galeria</a>
          <a href="#contact">Contato</a>
        </NavLinks>

        {/* Botão mobile */}
        <MenuButton onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </MenuButton>
      </NavContent>

      {/* Menu mobile */}
      {open && (
        <MobileMenu>
          <a href="#hero" onClick={() => setOpen(false)}>Início</a>
          <a href="#services" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Galeria</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contato</a>
        </MobileMenu>
      )}
    </Nav>
  );
}

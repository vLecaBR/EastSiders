import { Wrench } from "lucide-react";
import { Button } from "../ui/Button";
import { Nav, NavLinks } from "./Navbar.styles";

export default function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <Wrench size={28} />
        <span>EastSiders</span>
      </div>
      <NavLinks>
        <a href="/">Início</a>
        <a href="/services">Serviços</a>
        <a href="/gallery">Galeria</a>
        <a href="/contact">Contato</a>
      </NavLinks>
      <Button>Solicitar Orçamento</Button>
    </Nav>
  );
}

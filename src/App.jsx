import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/Contact/Contact";

// UI
import Button from "./components/UI/Button/Button";
import Badge from "./components/UI/Badge/Badge";
import Card from "./components/UI/Card/Card";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ fontFamily: "sans-serif", background: theme.colors.background, color: theme.colors.foreground }}>
        {/* Navbar fixa */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Services */}
        <section style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Nossos Serviços</h2>
          <Services />
        </section>

        {/* Gallery */}
        <section style={{ padding: "4rem 1rem", background: theme.colors.muted }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Galeria</h2>
          <Gallery />
        </section>

        {/* Contact Page */}
        <section style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Contato</h2>
          <ContactPage />
        </section>

        {/* UI Showcase (pra ver os componentes na prática) */}
        <section style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>UI Components</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Badge variant="success">Ativo</Badge>
            <Badge variant="warning">Pendente</Badge>
            <Card title="Exemplo de Card" description="Esse é um card com título e descrição." />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

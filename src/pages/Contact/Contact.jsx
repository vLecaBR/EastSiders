import { 
  ContactContainer, 
  ContactTitle, 
  ContactForm, 
  InputField, 
  TextArea, 
  SubmitButton 
} from "./Contact.styles";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Aqui você pode adicionar lógica de envio via API/email
    alert("Mensagem enviada! 😉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactContainer>
      <ContactTitle>Fale com a gente</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}

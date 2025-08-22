import { CardContainer, CardImage, CardContent, CardTitle, CardDescription } from "./styles";

export default function Card({ title, description, image, children, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {children}
      </CardContent>
    </CardContainer>
  );
}

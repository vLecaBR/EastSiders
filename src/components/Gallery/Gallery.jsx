import { GalleryContainer, GalleryGrid, GalleryItem } from "./Gallery.styles";

const images = [
  { src: "https://source.unsplash.com/400x300/?car,detail", alt: "Carro detalhado 1" },
  { src: "https://source.unsplash.com/400x300/?car,paint", alt: "Carro pintado" },
  { src: "https://source.unsplash.com/400x300/?car,wash", alt: "Lavagem premium" },
  { src: "https://source.unsplash.com/400x300/?car,interior", alt: "Interior restaurado" },
  { src: "https://source.unsplash.com/400x300/?car,luxury", alt: "Carro de luxo" },
  { src: "https://source.unsplash.com/400x300/?car,custom", alt: "Personalização automotiva" },
];

export default function Gallery() {
  return (
    <GalleryContainer>
      <h2>Nossa Galeria</h2>
      <p>Confira alguns dos nossos trabalhos recentes:</p>
      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryItem key={index}>
            <img src={img.src} alt={img.alt} />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

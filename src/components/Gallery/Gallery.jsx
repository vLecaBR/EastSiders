// Gallery.jsx
import { GalleryContainer, GalleryGrid, GalleryItem } from "./Gallery.styles";

const images = [
  { src: "https://source.unsplash.com/800x600/?car,detail", alt: "Carro detalhado 1" },
  { src: "https://source.unsplash.com/800x600/?car,paint", alt: "Carro pintado" },
  { src: "https://source.unsplash.com/800x600/?car,wash", alt: "Lavagem premium" },
  { src: "https://source.unsplash.com/800x600/?car,interior", alt: "Interior restaurado" },
  { src: "https://source.unsplash.com/800x600/?car,luxury", alt: "Carro de luxo" },
  { src: "https://source.unsplash.com/800x600/?car,custom", alt: "Personalização automotiva" },
];

export default function Gallery() {
  return (
    <GalleryContainer>
      <h2>Nossa Galeria</h2>
      <p>Confira alguns dos nossos trabalhos recentes:</p>
      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryItem key={index}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="overlay">
              <span>{img.alt}</span>
            </div>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

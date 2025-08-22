import { 
  GalleryContainer, 
  GalleryTitle, 
  ImagesGrid, 
  ImageCard, 
  Image 
} from "./Gallery.styles";

import { useState } from "react";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  const [images] = useState(galleryImages);

  return (
    <GalleryContainer>
      <GalleryTitle>Nosso Portfólio</GalleryTitle>
      <ImagesGrid>
        {images.map((src, idx) => (
          <ImageCard key={idx}>
            <Image src={src} alt={`Imagem ${idx + 1}`} />
          </ImageCard>
        ))}
      </ImagesGrid>
    </GalleryContainer>
  );
}

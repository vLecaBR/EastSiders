// Gallery.styles.js
import styled from "styled-components";

export const GalleryContainer = styled.section`
  padding: 64px 32px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: 32px;
    font-size: 16px;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.03);

    img {
      transform: scale(1.1);
    }

    .overlay {
      opacity: 1;
    }
  }
`;

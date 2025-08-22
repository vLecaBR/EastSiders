import styled from "styled-components";

export const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const GalleryTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ImagesGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const ImageCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

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
  gap: 16px;
`;

export const GalleryItem = styled.div`
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

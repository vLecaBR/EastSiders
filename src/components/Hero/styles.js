import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 80px 32px;
  background: ${({ theme }) => theme.colors.muted};
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  h1 {
    font-size: 40px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.foreground};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 24px;
    color: #555;
    line-height: 1.5;
  }
`;

export const HeroImage = styled.div`
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

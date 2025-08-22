// Hero.styles.js
import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 100px 32px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.muted} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  min-height: 80vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 64px 16px;
    min-height: auto;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 32px;
  }
`;

export const HeroText = styled.div`
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.foreground};
    line-height: 1.2;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin-bottom: 32px;
    color: #555;
    line-height: 1.6;
    max-width: 500px;

    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  button {
    @media (max-width: 768px) {
      margin: 0 auto;
      display: block;
    }
  }
`;

export const HeroImage = styled.div`
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transform: translateX(30px);
    opacity: 0;
    animation: fadeInRight 1s ease forwards;

    @media (max-width: 768px) {
      transform: none;
      animation: fadeInUp 1s ease forwards;
    }
  }

  @keyframes fadeInRight {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

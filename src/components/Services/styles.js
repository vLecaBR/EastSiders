import styled from "styled-components";

export const ServicesContainer = styled.section`
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
    margin-bottom: 40px;
    font-size: 16px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

export const ServiceCard = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .icon {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.foreground};
  }

  p {
    font-size: 14px;
    color: #666;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

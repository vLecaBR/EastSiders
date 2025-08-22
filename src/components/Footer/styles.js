import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.foreground};
  color: white;
  padding: 48px 32px 24px;
  margin-top: 64px;

  .copy {
    text-align: center;
    margin-top: 32px;
    font-size: 14px;
    color: #ccc;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 18px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: #ddd;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    font-size: 14px;
    color: #bbb;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    color: white;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

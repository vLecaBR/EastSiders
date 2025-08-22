import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.foreground};
  color: white;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
    color: white;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.colors.foreground};
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: 12px;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

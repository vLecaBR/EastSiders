import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.foreground};
  color: white;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
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
  text-decoration: none;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    /* underline animado */
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
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
  animation: fadeIn 0.3s ease;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

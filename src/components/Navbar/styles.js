import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.foreground};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

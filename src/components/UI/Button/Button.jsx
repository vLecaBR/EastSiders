import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: bold;
  border: none;
  cursor: pointer;
  background: ${({ theme, variant }) =>
    variant === "outline" ? "transparent" : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === "outline" ? theme.colors.primary : "#fff"};
  border: ${({ theme, variant }) =>
    variant === "outline" ? `2px solid ${theme.colors.primary}` : "none"};

  &:hover {
    opacity: 0.9;
  }
`;

export const Button = ({ children, variant = "default", ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.dangerDark};
    }
  `,
};

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;

  ${({ fullWidth }) => fullWidth && `width: 100%;`}
  ${({ variant }) => variants[variant] || variants.primary};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

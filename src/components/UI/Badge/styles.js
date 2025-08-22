import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
    color: black;
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger};
    color: white;
  `,
};

export const BadgeContainer = styled.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${({ variant }) => variants[variant] || variants.primary};
`;

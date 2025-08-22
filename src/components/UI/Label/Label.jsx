import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.foreground};
`;

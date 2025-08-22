import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputField = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

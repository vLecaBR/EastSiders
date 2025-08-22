import { ButtonContainer } from "./Button.styles";

export default function Button({ children, variant = "primary", disabled = false, fullWidth = false, onClick }) {
  return (
    <ButtonContainer variant={variant} disabled={disabled} fullWidth={fullWidth} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}

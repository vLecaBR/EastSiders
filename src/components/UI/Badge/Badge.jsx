import { BadgeContainer } from "./Badge.styles";

export default function Badge({ children, variant = "primary" }) {
  return <BadgeContainer variant={variant}>{children}</BadgeContainer>;
}

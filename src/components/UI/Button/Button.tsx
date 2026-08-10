import type { ButtonHTMLAttributes, ReactNode } from "react";

import {
  StyledButton,
  type ButtonSize,
  type ButtonVariant,
} from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button({
  children,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;

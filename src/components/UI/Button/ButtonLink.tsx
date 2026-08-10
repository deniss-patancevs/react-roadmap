import type { ReactNode } from "react";
import type { LinkProps } from "react-router";

import {
  StyledButtonLink,
  type ButtonSize,
  type ButtonVariant,
} from "./Button.styles";

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function ButtonLink({
  children,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <StyledButtonLink $variant={variant} $size={size} {...props}>
      {children}
    </StyledButtonLink>
  );
}

export default ButtonLink;

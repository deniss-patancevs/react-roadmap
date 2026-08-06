// import styled from "styled-components";
// import type { ComponentPropsWithoutRef, ReactNode } from "react";

// type ButtonVariant = "primary" | "outline";
// type ButtonSize = "default" | "small";

// interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   children: React.ReactNode;
// }

// const StyledButton = styled.button<{
//   $variant: ButtonVariant;
//   $size: ButtonSize;
// }>`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;

//   border: none;
//   cursor: pointer;

//   border-radius: 6px;

//   font-family: inherit;

//   font-size: ${({ theme }) => theme.typography.button.fontSize};

//   font-weight: ${({ theme }) => theme.typography.button.fontWeight};

//   text-transform: uppercase;

//   transition:
//     opacity 0.2s ease,
//     box-shadow 0.2s ease;

//   ${({ $size }) =>
//     $size === "small"
//       ? `
//         height: 32px;
//         padding: 3px 8px;

//         font-size: 11px;
//         letter-spacing: 1px;
//       `
//       : `
//         height: 55px;
//         padding: 0 24px;
//       `}

//   ${({ $variant, theme }) =>
//     $variant === "primary"
//       ? `
//         background-color: ${theme.colors.primary};
//         color: ${theme.colors.background};

//         box-shadow: 0 4px 4px rgba(0,0,0,0.25);

//         &:hover {
//           opacity: 0.9;
//         }
//       `
//       : `
//         background-color: transparent;
//         color: ${theme.colors.primary};

//         border: 1px solid rgba(0,0,0,0.2);

//         &:hover {
//           background-color: rgba(0,0,0,0.05);
//         }
//       `}
// `;

// function Button({
//   variant = "primary",
//   size = "default",
//   children,
//   ...props
// }: ButtonProps) {
//   return (
//     <StyledButton $variant={variant} $size={size} {...props}>
//       {children}
//     </StyledButton>
//   );
// }

// export default Button;

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

import styled from "styled-components";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  height: 55px;
  padding: 0 12px;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};

  cursor: pointer;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${({ $variant }) =>
    $variant === "primary" &&
    `
      width: 165px;

      color: #fff;
      background: #3F51B5;

      border: none;

      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    `}

  ${({ $variant }) =>
    $variant === "outline" &&
    `
      width: 184px;
      color: #3F51B5;
      background: transparent;
      border: 1.5px solid rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: translateY(1px);
  }
`;

function Button({ variant = "primary", children }: ButtonProps) {
  return <StyledButton $variant={variant}>{children}</StyledButton>;
}

export default Button;

import { Link } from "react-router";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "default" | "small";

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const sizeStyles = {
  default: css`
    height: 55px;
    padding: 0 24px;
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    line-height: ${({ theme }) => theme.typography.button.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.button.letterSpacing};
  `,

  small: css`
    height: 32px;
    padding: 4px 8px;
    font-size: ${({ theme }) => theme.typography.buttonSmall.fontSize};
    font-weight: ${({ theme }) => theme.typography.buttonSmall.fontWeight};
    line-height: ${({ theme }) => theme.typography.buttonSmall.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.buttonSmall.letterSpacing};
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
  `,

  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid rgba(0, 0, 0, 0.2);
  `,
};

const sharedStyles = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.2s ease;
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${sharedStyles}
`;

export const StyledButtonLink = styled(Link)<StyledButtonProps>`
  ${sharedStyles}
`;

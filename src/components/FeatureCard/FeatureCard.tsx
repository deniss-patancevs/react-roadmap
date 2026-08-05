import styled from "styled-components";
import type { ComponentProps } from "react";

type FeatureCardVariant = "default" | "compact";

interface FeatureCardProps {
  icon: ComponentProps<"img">["src"];
  title: string;
  description: string;
  variant?: FeatureCardVariant;
}

const Card = styled.article<{
  $variant: FeatureCardVariant;
}>`
  width: 311px;
  height: ${({ $variant }) => ($variant === "compact" ? "280px" : "326px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const Icon = styled.img`
  width: 58.54px;
  height: 57.52px;
  margin-top: 46px;
`;

const Title = styled.h3`
  margin: 33px 0 0;
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
`;

const Description = styled.p`
  margin: 33px 20px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
`;

function FeatureCard({
  icon,
  title,
  description,
  variant = "default",
}: FeatureCardProps) {
  return (
    <Card $variant={variant}>
      <Icon src={icon} alt="" />

      <Title>{title}</Title>

      <Description>{description}</Description>
    </Card>
  );
}

export default FeatureCard;

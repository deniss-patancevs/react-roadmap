import styled from "styled-components";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = styled.article`
  width: 311px;
  height: 326px;
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
  font-size: ${({ theme }) => theme.typography.featureCard.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.featureCard.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.featureCard.title.lineHeight};
`;

const Description = styled.p`
  margin: 33px 20px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.featureCard.text.fontSize};
  font-weight: ${({ theme }) => theme.typography.featureCard.text.fontWeight};
  line-height: ${({ theme }) => theme.typography.featureCard.text.lineHeight};
`;

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <Icon src={icon} alt="" />

      <Title>{title}</Title>

      <Description>{description}</Description>
    </Card>
  );
}

export default FeatureCard;

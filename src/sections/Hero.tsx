import styled from "styled-components";
import { ButtonLink } from "@/components/UI/Button";
import heroImage from "@/assets/images/hero image.png";

const HeroSection = styled.section`
  width: 100%;
  min-height: 801px;
  background-color: ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    min-height: 650px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  min-height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 45px 74px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    padding: 40px;
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding: 50px 24px;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    flex-direction: column;
    justify-content: center;
    padding: 40px 16px 50px;
    gap: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 561px;
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    width: 50%;
    max-width: none;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    width: 100%;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.heading.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.fontWeight};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    font-size: font-size: ${({ theme }) => theme.typography.subheading.fontSize};;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  }
`;

const Description = styled.p`
  width: 499px;
  max-width: 100%;
  margin: 42px 0 0;

  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    width: 100%;
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    margin-top: 24px;
    line-height: 28px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 45px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    gap: 18px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  width: 623px;
  max-width: 50%;
  height: auto;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    width: 45%;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    width: 75%;
    max-width: 360px;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Container>
        <Content>
          <Title>Experience the Future of Technology Today!</Title>

          <Description>
            Unleash your inner tech enthusiast with our wide range of gadgets.
            Become a pro expert within a moment.
          </Description>

          <Actions>
            <ButtonLink to="/contacts" variant="outline">
              Contact Us
            </ButtonLink>

            <ButtonLink to="/products" variant="primary">
              Shop Now
            </ButtonLink>
          </Actions>
        </Content>

        <Image src={heroImage} alt="Technology gadgets" />
      </Container>
    </HeroSection>
  );
}

export default Hero;

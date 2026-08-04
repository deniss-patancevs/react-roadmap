import styled from "styled-components";
import Button from "../../components/Button";
import heroImage from "../../assets/images/hero image.png";

const HeroSection = styled.section`
  width: 100%;
  height: 801px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 74px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 561px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.hero.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.hero.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.hero.title.lineHeight};
`;

const Description = styled.p`
  width: 499px;
  margin: 42px 0 0;
  font-size: ${({ theme }) => theme.typography.hero.text.fontSize};
  font-weight: ${({ theme }) => theme.typography.hero.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.hero.title.lineHeight};
`;

const Actions = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 45px;
`;

const Image = styled.img`
  width: 623px;
  height: 711px;
  object-fit: contain;
`;

function Hero() {
  return (
    <HeroSection>
      <Container>
        <Content>
          <Title>
            Experience the Future of
            <br />
            Technology Today!
          </Title>

          <Description>
            Unleash your inner tech enthusiast with our wide range of gadgets.
            Become a pro expert within a moment.
          </Description>

          <Actions>
            <Button variant="outline">CONTACT US</Button>

            <Button variant="primary">SHOP NOW</Button>
          </Actions>
        </Content>

        <Image src={heroImage} alt="Technology gadgets" />
      </Container>
    </HeroSection>
  );
}

export default Hero;

import styled from "styled-components";
import FeatureCard from "@/components/FeatureCard";
import wifiIcon from "@/assets/icons/wifi.svg";
import wearableIcon from "@/assets/icons/devices_wearables.svg";
import lightBulbIcon from "@/assets/icons/light_bulb.svg";

const Section = styled.section`
  padding-top: 65px;
  padding-bottom: 69px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    padding-top: 55px;
    padding-bottom: 60px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    padding: 45px 16px 50px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1071px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;

  font-size: ${({ theme }) => theme.typography.subheading.fontSize});
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight});
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight});

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    font-size: 30px;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 69px;
  margin: 65px auto 0 auto;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    gap: 24px;
    margin-top: 50px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }
`;

function Features() {
  const features = [
    {
      icon: wifiIcon,
      title: "Wireless Freedom",
      description:
        "wireless gadgets that provide freedom of movement while using them",
    },
    {
      icon: wearableIcon,
      title: "Stay Connected",
      description:
        "gadgets that help people stay connected with their loved ones and colleagues",
    },
    {
      icon: lightBulbIcon,
      title: "Smart Home",
      description:
        "gadgets that make your home smarter and more efficient at the space of your own home",
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Why Choose us?</Title>

        <Cards>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </Cards>
      </Container>
    </Section>
  );
}

export default Features;

import styled from "styled-components";
import FeatureCard from "@/components/FeatureCard";
import wifiIcon from "@/assets/icons/wifi.svg";
import wearableIcon from "@/assets/icons/devices_wearables.svg";
import lightBulbIcon from "@/assets/icons/light_bulb.svg";

const Section = styled.section`
  padding-top: 65px;
  padding-bottom: 69px;
`;

const Container = styled.div`
  width: 1071px;
  height: 448px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;

  font-size: 36px;
  font-weight: 600;
  line-height: 100%;
`;

const Cards = styled.div`
  display: flex;
  gap: 69px;
  margin-top: 65px;
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

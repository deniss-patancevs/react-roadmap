import styled from "styled-components";
import GoogleMap from "@/sections/GoogleMap";
import FeatureCard from "@/components/FeatureCard";
import headphonesIcon from "@/assets/icons/headphones.svg";
import emailIcon from "@/assets/icons/email.svg";

const Container = styled.main`
  padding: 105px 75px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftColumn = styled.div`
  width: 745px;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.aside`
  max-width: 311px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.aside`
  font-size: 50px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 85px;
  max-width: 647px;
`;

const Address = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
`;

function AboutPage() {
  const address = "Ūnijas iela 11a, Vidzemes priekšpilsēta, Rīga, LV-1039";

  const features = [
    {
      icon: headphonesIcon,
      title: "Phone number",
      description: "+371 21236528",
    },
    {
      icon: emailIcon,
      title: "E-mail",
      description: "gadget@store.com",
    },
  ];

  return (
    <Container>
      <LeftColumn>
        <Title>Contact us by Phone, Email, or Visit us in our Office!</Title>

        <Address>Our address: {address}</Address>

        <GoogleMap address={address} />
      </LeftColumn>

      <RightColumn>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} variant="compact" />
        ))}
      </RightColumn>
    </Container>
  );
}

export default AboutPage;

import styled from "styled-components";
import GoogleMap from "@/sections/GoogleMap";
import FeatureCard from "@/components/FeatureCard";
import headphonesIcon from "@/assets/icons/headphones.svg";
import emailIcon from "@/assets/icons/email.svg";

const Container = styled.main`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  margin: 0 auto;
  padding: 105px 75px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    margin: 0 16px;
    padding: 70px 40px;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding: 60px 24px;
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
  max-width: 745px;

  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    max-width: none;
  }
`;

const RightColumn = styled.aside`
  width: 311px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    width: 260px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin: 0 0 85px;

  max-width: 647px;

  font-size: 50px;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    font-size: 44px;
    margin-bottom: 60px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    font-size: 40px;
    margin-bottom: 45px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    font-size: 34px;
    margin-bottom: 32px;
  }
`;

const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;

  font-style: normal;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    gap: 20px;
    margin-bottom: 24px;
  }
`;

function ContactPage() {
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

export default ContactPage;

import styled from "styled-components";

// Styles
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  min-height: 90px;
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
`;

const CopyText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.footer.fontSize};
  font-weight: ${({ theme }) => theme.typography.footer.fontWeight};
`;

// Component
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <CopyText>© All rights reserved</CopyText>
      </Container>
    </StyledFooter>
  );
}

export default Footer;

import { Link } from "react-router";
import styled from "styled-components";
import notebookLogo from "@/assets/icons/notebook.svg";

// Styles
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  height: 90px;
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  color: inherit;
  text-decoration: none;

  font-size: ${({ theme }) => theme.typography.logo.fontSize};
  font-weight: ${({ theme }) => theme.typography.logo.fontWeight};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.nav.fontSize};
  font-weight: ${({ theme }) => theme.typography.nav.fontWeight};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

// Component
function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo to="/">
          <img src={notebookLogo} alt="notebook logo" />
          <span>Gadget Store</span>
        </Logo>

        <Nav>
          <NavLink to="/">Home</NavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;

import { Link } from "react-router";
import styled from "styled-components";
// import { notebookLogo } from "../../assets/icons/notebook.svg";

// Styles
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  height: ${({ theme }) => theme.components.header.height};
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md_16};

  color: inherit;
  text-decoration: none;

  font-size: ${({ theme }) => theme.fontSizes.lg_36};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold_600};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl_36};
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.md_20};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold_600};
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

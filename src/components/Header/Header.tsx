import { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import { useAppSelector } from "@/app/store/hooks";
import { selectCartQuantity } from "@/features/cart/cartSelectors";
import notebookLogo from "@/assets/icons/notebook.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

/*
      NAVIGATION LINKS
*/

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Contact us", to: "/contacts" },
  { label: "Cart", to: "/cart" },
];

/*
      STYLES
*/

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 100;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  height: 90px;
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  color: inherit;
  text-decoration: none;

  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    gap: 10px;
    font-size: 28px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

const BurgerButton = styled.button`
  display: none;
  z-index: 102;

  padding: 8px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 101;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-20px)"};

  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s ease;

  @media (min-width: ${({ theme }) => theme.layout.breakpoints.desktop}) ) {
    display: none;
  }
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 32px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    font-size: 28px;
  }
`;

/*
      COMPONENT 
*/

function Header() {
  const cartItemsCount = useAppSelector(selectCartQuantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <Container>
        <Logo to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={notebookLogo} alt="notebook logo" />
          <span>Gadget Store</span>
        </Logo>

        {/* Desktop navigation */}
        <Nav>
          {navItems.map(({ label, to }) => (
            <NavLink key={to} to={to}>
              {label === "Cart" && cartItemsCount > 0
                ? `${label} (${cartItemsCount})`
                : label}
            </NavLink>
          ))}
        </Nav>

        {/* Mobile menu button */}
        <BurgerButton
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </BurgerButton>
      </Container>

      {/* Mobile navigation */}
      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavList>
          {navItems.map(({ label, to }) => (
            <MobileNavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
            >
              {label === "Cart" && cartItemsCount > 0
                ? `${label} (${cartItemsCount})`
                : label}
            </MobileNavLink>
          ))}
        </MobileNavList>
      </MobileMenu>
    </StyledHeader>
  );
}

export default Header;

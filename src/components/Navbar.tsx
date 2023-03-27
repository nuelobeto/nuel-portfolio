import styled from "styled-components";
import { fontSizes, shadow } from "../config/style.config";
import { colors } from "./../config/style.config";
import { MenuIcon } from "./../assets/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Nuel Obeto</Link>
      <MenuIcon />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${shadow.base};
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.stormy_night};
  color: #fff;

  a {
    font-size: ${fontSizes.lg};
    font-weight: 600;
    color: #fff;
  }

  svg {
    font-size: ${fontSizes["2xl"]};
    cursor: pointer;
  }
`;

import styled from "styled-components";
import { fontSizes, shadow } from "../config/style.config";
import { colors } from "./../config/style.config";
import { MenuIcon } from "./../assets/icons";
import { Link } from "react-router-dom";
import useMode from "./../zustand/useMode";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { mode } = useMode((state) => state);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Nav mode={mode}>
      <Link to="/">Nuel Obeto</Link>
      <MenuIcon onClick={() => setShowSidebar(true)} />
      <MobileSidebar
        showSidebar={showSidebar}
        setShowSideBar={setShowSidebar}
      />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav<any>`
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
  background-color: ${(props) =>
    props.mode === "light"
      ? `${colors.whisper_white}`
      : `${colors.stormy_night}`};
  color: ${(props) =>
    props.mode === "light" ? `${colors.midnight_blue}` : `${colors.white}`};

  & > a {
    font-size: ${fontSizes.lg};
    font-weight: 600;
    color: ${(props) =>
      props.mode === "light" ? `${colors.midnight_blue}` : `${colors.white}`};
  }

  svg {
    font-size: ${fontSizes["2xl"]};
    cursor: pointer;
  }
`;

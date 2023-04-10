import styled from "styled-components";
import { colors, shadow } from "./../../config/style.config";
import { TECHGUY_IMG } from "./../../assets/images";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <div className="nav">
          <img src={TECHGUY_IMG} alt="" />

          <div className="links">
            <NavLink to="/admin/manage-projects">Projects</NavLink>
            <NavLink to="/admin/manage-skills">Skills</NavLink>
            <NavLink to="/admin/manage-about">About Me</NavLink>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: ${shadow.base};
  background-color: ${colors.stormy_night};

  .nav {
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 45px;
      object-fit: contain;
      display: block;
      border-radius: 50%;
    }

    .links {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        color: ${colors.pearl_mist};

        &.active {
          color: ${colors.golden_sun};
        }
      }
    }
  }
`;

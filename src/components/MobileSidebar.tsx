import styled from "styled-components";
import {
  AboutIcon,
  CloseIcon,
  ContactIcon,
  GithubIcon,
  LightModeIcon,
  TwitterIcon,
} from "../assets/icons";
import { colors, fontSizes } from "./../config/style.config";
import {
  HomeIcon,
  ProjectIcon,
  BlogIcon,
  DarkModeIcon,
  LinkedInIcon,
} from "./../assets/icons";
import { NavLink } from "react-router-dom";
import useMode from "./../zustand/useMode";

const links = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    name: "About me",
    url: "/about",
    icon: <AboutIcon />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: <ProjectIcon />,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: <ContactIcon />,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: <BlogIcon />,
  },
];

type PropsT = {
  showSidebar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar = ({ showSidebar, setShowSideBar }: PropsT) => {
  const { mode, setMode } = useMode((state) => state);

  const handleMode = (mode: string) => {
    localStorage.setItem("mode", JSON.stringify(mode));
    setMode(mode);
  };

  return (
    <MobileSidebarWrapper show={showSidebar}>
      <Sidebar show={showSidebar}>
        <CloseIcon
          className="close-btn"
          onClick={() => setShowSideBar(false)}
        />
        <Toolbar>
          <Links>
            {links.map((link, index) => (
              <NavLink to={`${link.url}`} key={index}>
                {link.icon} {link.name}
              </NavLink>
            ))}
          </Links>

          <ToolBox>
            <ThemeSwitch mode={mode}>
              <span className="light-mode">light</span>
              <button>
                <LightModeIcon onClick={() => handleMode("light")} />
                <DarkModeIcon onClick={() => handleMode("dark")} />
              </button>
              <span className="dark-mode">dark</span>
            </ThemeSwitch>
            <Socials>
              <a
                href="https://github.com/nuelobeto"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/nuel-obeto/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Socials>
          </ToolBox>
        </Toolbar>
      </Sidebar>
    </MobileSidebarWrapper>
  );
};

export default MobileSidebar;

const MobileSidebarWrapper = styled.div<any>`
  width: 100%;
  height: 100vh;
  background-color: #00000073;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 0.5s;
  opacity: ${(props) => (props.show ? "1" : "0")};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
`;

const Sidebar = styled.div<any>`
  width: 300px;
  height: 100vh;
  background-color: ${colors.midnight_blue};
  padding: 2rem 1rem;
  position: relative;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(110%)")};
  transition: all 0.5s;

  .close-btn {
    font-size: 25px;
    color: ${colors.white};
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  gap: 0.5rem;

  a {
    padding: 1rem;
    border-radius: 8px;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.moonstone};

    &.active,
    &:hover {
      background-color: ${colors.stormy_night};
      color: ${colors.pearl_mist};
    }

    svg {
      font-size: 20px;
    }
  }
`;

const ToolBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem 1rem;
`;

const ThemeSwitch = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  font-size: 13px;

  .light-mode {
    color: ${(props) =>
      props.mode === "light" ? `${colors.pearl_mist}` : `${colors.moonstone}`};
    transition: all 0.2s !important;
  }

  .dark-mode {
    color: ${(props) =>
      props.mode === "dark" ? `${colors.pearl_mist}` : `${colors.moonstone}`};
    transition: all 0.2s !important;
  }

  button {
    width: 66.63px;
    border: 1px solid ${colors.moonstone};
    background-color: transparent;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    position: relative;

    &::after {
      display: block;
      content: "";
      width: 20px;
      aspect-ratio: 1/1;
      border-radius: 50px;
      position: absolute;
      background-color: ${colors.golden_sun};
      cursor: pointer;
      transform: ${(props) =>
        props.mode === "light" ? "translateX(0)" : "translateX(200%)"};
      transition: all 0.2s !important;
    }

    svg {
      font-size: 20px;
      border-radius: 50%;
      cursor: pointer;
      color: ${colors.moonstone};

      &:hover {
        background-color: ${colors.stormy_night};
      }
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0 0;

  svg {
    font-size: 25px;
    color: ${colors.moonstone};
    cursor: pointer;

    &:hover {
      color: ${colors.pearl_mist};
    }
  }
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TECHGUY_IMG } from "./../assets/images";
import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  DarkModeIcon,
  GithubIcon,
  HomeIcon,
  LightModeIcon,
  LinkedInIcon,
  ProjectIcon,
  TwitterIcon,
} from "./../assets/icons";
import { useState } from "react";
import { colors } from "../config/style.config";
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

const Sidebar = () => {
  const { mode, setMode } = useMode((state) => state);

  const handleMode = (mode: string) => {
    localStorage.setItem("mode", JSON.stringify(mode));
    setMode(mode);
  };

  return (
    <MainWrapper>
      <Name>Nuel Obeto</Name>
      <ImageCard src={TECHGUY_IMG} />
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
            <GithubIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </Socials>
        </ToolBox>
      </Toolbar>
    </MainWrapper>
  );
};

export default Sidebar;

const MainWrapper = styled.aside`
  width: 220px;
  height: 100vh;
  background-color: ${colors.midnight_blue};
  padding: 2rem 1rem;
  position: relative;
`;

const ImageCard = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const Name = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 22px;
  margin-bottom: 1rem;
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 0.5rem;

  a {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 14px;
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
    transition: all 0.2s;
  }

  .dark-mode {
    color: ${(props) =>
      props.mode === "dark" ? `${colors.pearl_mist}` : `${colors.moonstone}`};
    transition: all 0.2s;
  }

  button {
    flex: 1;
    border: 1px solid ${colors.moonstone};
    background-color: transparent;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    position: relative;

    &::after {
      content: "";
      width: 20px;
      aspect-ratio: 1/1;
      border-radius: 50px;
      position: absolute;
      background-color: ${colors.golden_sun};
      cursor: pointer;
      transform: ${(props) =>
        props.mode === "light" ? "translateX(0)" : "translateX(200%)"};
      transition: all 0.2s;
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
    font-size: 20px;
    color: ${colors.moonstone};
    cursor: pointer;

    &:hover {
      color: ${colors.pearl_mist};
    }
  }
`;

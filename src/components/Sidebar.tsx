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
  const [mode, setMode] = useState("light");

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
              <LightModeIcon onClick={() => setMode("light")} />
              <DarkModeIcon onClick={() => setMode("dark")} />
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
  background-color: #141618;
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
    color: #797979;

    &.active,
    &:hover {
      background-color: #2a2d31;
      color: #f3f3f3;
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
    color: ${(props) => (props.mode === "light" ? "#f3f3f3" : "#797979")};
    transition: all 0.2s;
  }

  .dark-mode {
    color: ${(props) => (props.mode === "dark" ? "#f3f3f3" : "#797979")};
    transition: all 0.2s;
  }

  button {
    flex: 1;
    border: 1px solid #797979;
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
      background-color: #f0cd6b;
      cursor: pointer;
      transform: ${(props) =>
        props.mode === "light" ? "translateX(0)" : "translateX(200%)"};
      transition: all 0.2s;
    }

    svg {
      font-size: 20px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: #2a2d31;
        color: #aaaaaa;
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
    color: #797979;
    cursor: pointer;

    &:hover {
      color: #f3f3f3;
    }
  }
`;

import styled from "styled-components";
import Dashboard from "./../components/Dashboard";
import { colors, fontSizes, media } from "./../config/style.config";
import Skill from "./../components/Skill";
import {
  ETHERS_IMG,
  NODE_IMG,
  REACT_IMG,
  JAVASCRIPT_IMG,
  SOLIDITY_IMG,
  PYTHON_IMG,
  TECHGUY_IMG,
} from "../assets/images";
import { SkillT } from "../types/types";
import { useEffect, useState } from "react";

const Home = () => {
  const skills: SkillT[] = [
    {
      img: JAVASCRIPT_IMG,
      name: "Javascript",
      level: "90%",
      color: "#F7DF1E",
    },
    {
      img: REACT_IMG,
      name: "React",
      level: "80%",
      color: "#61DAFB",
    },
    {
      img: NODE_IMG,
      name: "Node",
      level: "60%",
      color: "#3C873A",
    },
    {
      img: SOLIDITY_IMG,
      name: "Solidity",
      level: "40%",
      color: "#212121",
    },
    {
      img: ETHERS_IMG,
      name: "Ethers JS",
      level: "40%",
      color: "#8C8C8E",
    },
    {
      img: PYTHON_IMG,
      name: "Python",
      level: "20%",
      color: "#3776AB",
    },
  ];
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <Dashboard>
      <HomeWrapper>
        <Box1>
          <h1>Hi, my name is</h1>
          <h2>Obeto Emmanuel.</h2>
          <h3>I build things for the web.</h3>
          <p>
            I’m a software engineer specializing in building exceptional digital
            interfaces and experiences.
          </p>
          <div className="btns">
            <button>Check out my works</button>
            <button>My Resume</button>
          </div>
        </Box1>
        <Box2>
          <h2>My skills</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                img={skill.img}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        </Box2>
      </HomeWrapper>
    </Dashboard>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 100vh;
  justify-content: center;
  @media (max-width: ${media.md}) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`;

const Box1 = styled.div`
  width: 60%;
  height: 100%;
  color: ${colors.pearl_mist};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${media.md}) {
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
  }
  h1 {
    font-size: ${fontSizes.md};
  }
  h2,
  h3 {
    font-size: clamp(${fontSizes["2xl"]}, 4vw, ${fontSizes["6xl"]});
  }
  p {
    max-width: 90%;
    font-size: ${fontSizes.md};
    margin-top: 1rem;
    line-height: 1.8;
    color: ${colors.moonstone};
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 3rem;
    @media (max-width: ${media.sm}) {
      flex-direction: column;
      gap: 0.75rem;
      button {
        width: 300px;
      }
    }
    button {
      padding: 1rem 2rem;
      border: 1px solid transparent;
      border-radius: 8px;
      background-color: ${colors.golden_sun};
      color: ${colors.midnight_blue};
      font-weight: 700;
      font-size: ${fontSizes.sm};
    }
  }
`;

const Box2 = styled.div`
  width: 350px;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${media.md}) {
    width: 100%;
  }

  h2 {
    font-size: ${fontSizes.md};
    color: ${colors.pearl_mist};
    margin-bottom: 1rem;
  }
  .skills {
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

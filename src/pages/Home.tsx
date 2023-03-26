import styled from "styled-components";
import Dashboard from "./../components/Dashboard";
import { colors, fontSizes } from "./../config/style.config";
import Skill from "./../components/Skill";
import {
  ETHERS_IMG,
  NODE_IMG,
  REACT_IMG,
  JAVASCRIPT_IMG,
  SOLIDITY_IMG,
  PYTHON_IMG,
} from "../assets/images";
import { SkillT } from "../types/types";

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
  padding: 3rem 1rem;
`;

const Box1 = styled.div`
  flex: 1;
  color: ${colors.pearl_mist};
  display: flex;
  flex-direction: column;
  h1 {
    font-size: ${fontSizes.md};
  }
  h2 {
    font-size: ${fontSizes["5xl"]};
  }
  h3 {
    font-size: ${fontSizes["5xl"]};
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
    gap: 2rem;
    margin-top: 3rem;
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
  height: 300px;
  border-radius: 8px;

  h2 {
    font-size: ${fontSizes.md};
    color: ${colors.pearl_mist};
    margin-bottom: 1rem;
  }
  .skills {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

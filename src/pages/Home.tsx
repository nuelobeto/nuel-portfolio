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
} from "../assets/images";
import { SkillT } from "../types/types";
import useMode from "./../zustand/useMode";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const Home = () => {
  const { mode } = useMode((state) => state);

  return (
    <Dashboard>
      <HomeWrapper>
        <Box1 mode={mode}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            Hi, my name is
          </motion.h1>

          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            Obeto Emmanuel.
          </motion.h2>

          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I build things for the web.
          </motion.h3>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I’m a software engineer specializing in building exceptional digital
            interfaces and experiences.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="btns"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Check out my works
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              My Resume
            </motion.button>
          </motion.div>
        </Box1>

        <Box2 mode={mode}>
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1,
              delay: 0.2,
            }}
          >
            My skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`skills ${mode === "light" ? "scroll-light" : "scroll"}`}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  stiffness: 400,
                  damping: 10,
                  duration: 1,
                  delay: index * 0.2,
                }}
              >
                <Skill
                  img={skill.img}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </motion.div>
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
  @media (max-width: ${media.xl}) {
    height: 92vh;
  }
  @media (max-width: ${media.md}) {
    flex-direction: column;
    height: auto;
    padding: 4rem 0;
  }
`;

const Box1 = styled.div<any>`
  width: 60%;
  height: 100%;
  color: ${(props) =>
    props.mode === "light"
      ? `${colors.midnight_blue}`
      : `${colors.pearl_mist}`};
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
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.stormy_night}`
        : `${colors.moonstone}`};
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
      background-color: ${(props) =>
        props.mode === "light"
          ? `${colors.midnight_blue}`
          : `${colors.golden_sun}`};
      color: ${(props) =>
        props.mode === "light" ? `${colors.white}` : `${colors.midnight_blue}`};
      font-weight: 700;
      font-size: ${fontSizes.sm};
    }
  }
`;

const Box2 = styled.div<any>`
  width: 370px;
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
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.midnight_blue}`
        : `${colors.pearl_mist}`};
    margin-bottom: 1rem;
  }
  .skills {
    max-width: 455px;
    max-height: 620px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px 10px;
    @media (max-width: ${media.md}) {
      max-height: fit-content;
    }
  }
`;

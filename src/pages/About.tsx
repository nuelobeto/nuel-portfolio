import styled from "styled-components";
import Dashboard from "./../components/Dashboard";
import { colors, fontSizes, shadow } from "./../config/style.config";
import { useState } from "react";
import { motion } from "framer-motion";
import useMode from "./../zustand/useMode";

const experience = [
  {
    company: "Web3Ladies",
    position: "Front End Developer",
    date: "July 2022",
    roles: [
      "Write modern, performant, maintainable code",
      "Worked with a team of web3 developers to create an LMS with up-to-date web3 tools and resources.",
    ],
    url: "https://www.web3ladies.com/",
  },
  {
    company: "StatementAI",
    position: "Front End Developer",
    date: "December 2022",
    roles: [
      "Developed and shipped a user interface featuring a multifaceted and dynamic text editor with advanced interactivity.",
      "Maintenance of code, debugging issues and solving clients’ problems.",
    ],
    url: "https://statementai.io/",
  },
  {
    company: "FlowOps",
    position: "Front End Developer",
    date: "August 2022 - Present",
    roles: [
      "Developed and maintained code for a client dashboard for a Saas product.",
    ],
    url: "https://www.flowops.xyz/",
  },
];

const About = () => {
  const { mode } = useMode((state) => state);
  const nav = experience.map((x) => x.company);
  const [active, setActive] = useState(nav[0]);
  const [currentCompany, setCurrentCompany] = useState(experience[0]);
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Node",
    "Ethers.js",
    "Solidity",
    "Python",
    "Firebase",
    "Sanity",
    "MongoDB",
    "Ganache",
  ];

  const handleActive = (company: string) => {
    setActive(company);
    const newCompany = experience.find((x) => x.company === company);
    if (newCompany) {
      setCurrentCompany(newCompany);
    }
  };

  return (
    <Dashboard>
      <AboutWrapper mode={mode} className="hide-scroll">
        <motion.div
          className="personal about"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2>Personal</h2>

          <div>
            <div className="text">
              <p>
                Hello, my name is Emmanuel Obeto and I am a Frontend Software
                Developer. I have always been intrigued by how websites and apps
                are made and beautiful UIs have always piqued my interest.
              </p>
              <p>
                My coding journey started in 2020, since then it has been an "up
                hill ride" with the ever dynamic internet and today I can build
                website with a range of technologies from React Js to Sanity
                CMS.
              </p>
              <p>
                Recently I have dabbled in web 3.0 to get a feel of blockchain
                technology and building decentralized applications (Dapps).
              </p>
            </div>
            <div className="image">
              {/* <img src={TECHGUY_IMG} alt="" /> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="experience about"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2>Where I've worked</h2>
          <div>
            <div className="nav">
              {nav.map((item, index) => (
                <span
                  key={index}
                  className={`${active === item && "active-nav"}`}
                  onClick={() => handleActive(item)}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="job-details">
              <h3>
                {currentCompany.position} @{" "}
                <a href={`${currentCompany.url}`}>{currentCompany.company}</a>
              </h3>
              <span className="job-date">{currentCompany.date}</span>
              <div className="job-role">
                {currentCompany.roles.map((role, index) => (
                  <p key={index}>
                    <span className="arrow">▶</span>
                    <span>{role}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="skills about"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2>Skills and tools</h2>
          <div className="skills-tools">
            {skills.map((skill, index) => (
              <p key={index}>
                <span className="arrow">▶</span>
                <span>{skill}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </AboutWrapper>
    </Dashboard>
  );
};

export default About;

const AboutWrapper = styled.div<any>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0;
  overflow: auto;

  .about {
    max-width: 900px;
    width: 100%;
    padding: 2rem;
    /* border: 3px solid ${colors.forest_stone}; */
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: ${shadow.base};
    background-color: ${(props) =>
      props.mode === "light"
        ? `${colors.breezy_blue}`
        : `${colors.forest_stone}`};

    h2 {
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.midnight_blue}`
          : `${colors.pearl_mist}`};
    }

    p {
      line-height: 1.5;
      font-size: ${fontSizes.base};
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.stormy_night}`
          : `${colors.slate_grey}`};
    }

    .arrow {
      font-size: 12px;
      margin-top: 3px;
    }
  }

  .personal {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > div {
      display: flex;
      gap: 2rem;
    }

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .image {
      width: 250px;
      height: 250px;
      border-radius: 8px;
      background-color: ${(props) =>
        props.mode === "light"
          ? `${colors.midnight_blue}`
          : `${colors.moonstone}`};
      /* img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: contain;
      } */
    }
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div {
      display: flex;
      gap: 3rem;
    }

    .nav {
      width: fit-content;
      display: flex;
      flex-direction: column;

      span {
        padding: 0.75rem;
        border-left: ${(props) =>
          props.mode === "light"
            ? `2px solid ${colors.slate_grey}`
            : `2px solid ${colors.stormy_night}`};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.stormy_night}`
            : `${colors.moonstone}`};
        font-size: ${fontSizes.sm};
        cursor: pointer;
        &.active-nav {
          border-left: ${(props) =>
            props.mode === "light"
              ? `2px solid ${colors.forest_stone}`
              : `2px solid ${colors.golden_sun}`};
          background-color: ${(props) =>
            props.mode === "light"
              ? `${colors.pearl_mist}`
              : `${colors.stormy_night}`};
          color: ${(props) =>
            props.mode === "light"
              ? `${colors.midnight_blue}`
              : `${colors.golden_sun}`};
        }
        &:hover {
          color: ${(props) =>
            props.mode === "light"
              ? `${colors.midnight_blue}`
              : `${colors.golden_sun}`};
          background-color: ${(props) =>
            props.mode === "light"
              ? `${colors.pearl_mist}`
              : `${colors.stormy_night}`};
        }
      }
    }

    .job-details {
      h3 {
        margin-bottom: 5px;
        font-size: ${fontSizes.md};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.moonstone}`
            : `${colors.pearl_mist}`};
        a {
          color: ${(props) =>
            props.mode === "light"
              ? `${colors.sky_blue}`
              : `${colors.golden_sun}`};
        }
      }

      .job-date {
        font-size: ${fontSizes.sm};
        margin-bottom: 1.5rem;
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.stormy_night}`
            : `${colors.slate_grey}`};
      }

      .job-role {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
          font-size: ${fontSizes.base};
          display: flex;
          gap: 1rem;
        }
      }
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      display: flex;
      gap: 1rem;
    }

    .skills-tools {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

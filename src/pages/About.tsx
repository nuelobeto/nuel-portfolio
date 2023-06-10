import styled from "styled-components";
import Dashboard from "./../components/Dashboard";
import { colors, fontSizes, media, shadow } from "./../config/style.config";
import { useState } from "react";
import { motion } from "framer-motion";
import useMode from "./../zustand/useMode";
import { ABOUT_IMG } from "../assets/images";

const experience = [
  {
    company: "FlowOps",
    position: "Front End Developer",
    date: "September 2022 - Present",
    roles: [
      "Designed the user interface for a service monitoring SaaS, focusing on creating a user-friendly and visually appealing experience.",
    ],
    url: "https://www.flowops.xyz/",
  },
  {
    company: "StatementAI",
    position: "Front End Developer",
    date: "September 2022 - December 2022",
    roles: [
      "Developed and shipped a user interface featuring a multifaceted and dynamic text editor with advanced interactivity.",
      "Maintenance of code, debugging issues and solving clients’ problems.",
    ],
    url: "https://statementai.io/",
  },
  {
    company: "Web3Ladies",
    position: "Front End Developer",
    date: "August 2020 - September 2022",
    roles: [
      "Write modern, performant, maintainable code",
      "Worked with a team of web3 developers to create an LMS with up-to-date web3 tools and resources.",
    ],
    url: "https://www.web3ladies.com/",
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
    "MongoDB",
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
              <img src={ABOUT_IMG} alt="" />
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
            <div
              className={`nav ${mode === "light" ? "scroll-light" : "scroll"}`}
            >
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
          initial={{ x: -200, opacity: 0 }}
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
  padding: 3rem 3px;
  overflow: auto;
  @media (max-width: ${media.xl}) {
    height: auto;
  }

  .about {
    max-width: 900px;
    width: 100%;
    padding: 2rem;
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: ${shadow.base};
    background-color: ${(props) =>
      props.mode === "light"
        ? `${colors.breezy_blue}`
        : `${colors.forest_stone}`};
    @media (max-width: ${media.sm}) {
      padding: 2rem 1rem;
    }

    h2 {
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.midnight_blue}`
          : `${colors.pearl_mist}`};
      @media (max-width: ${media.sm}) {
        text-align: center;
      }
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

    @media (max-width: ${media.sm}) {
      text-align: center;
    }

    & > div {
      display: flex;
      gap: 2rem;

      @media (max-width: ${media.md}) {
        flex-direction: column-reverse;
        gap: 1rem;
      }
      @media (max-width: ${media.sm}) {
        align-items: center;
      }
    }

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .image {
      width: 250px;
      aspect-ratio: 1/1;
      border-radius: 8px;
      overflow: hidden;
      background-color: ${(props) =>
        props.mode === "light"
          ? `${colors.midnight_blue}`
          : `${colors.moonstone}`};
      @media (max-width: ${media.md}) {
        width: 200px;
      }

      img {
        display: block;
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: contain;
      }
    }
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div {
      display: flex;
      gap: 3rem;
      @media (max-width: ${media.md}) {
        gap: 1.5rem;
      }
      @media (max-width: ${media.sm}) {
        flex-direction: column;
      }
    }

    .nav {
      width: fit-content;
      display: flex;
      flex-direction: column;
      @media (max-width: ${media.sm}) {
        flex-direction: row;
        width: 100%;
        padding-bottom: 5px;
        overflow-x: auto;
      }

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
        @media (max-width: ${media.sm}) {
          border-left: none;
          border-bottom: ${(props) =>
            props.mode === "light"
              ? `2px solid ${colors.slate_grey}`
              : `2px solid ${colors.stormy_night}`};
        }

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
          @media (max-width: ${media.sm}) {
            border-left: none;
            border-bottom: ${(props) =>
              props.mode === "light"
                ? `2px solid ${colors.forest_stone}`
                : `2px solid ${colors.golden_sun}`};
          }
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

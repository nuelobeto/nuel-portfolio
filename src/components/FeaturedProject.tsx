import styled from "styled-components";
import useMode from "./../zustand/useMode";
import { colors, fontSizes, shadow } from "./../config/style.config";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "../assets/icons";
import { SavedProjectT } from "../types/types";

type PropsT = {
  project: SavedProjectT;
};

const FeaturedProject = ({ project }: PropsT) => {
  const { mode } = useMode((state) => state);

  return (
    <ProjectWrapper
      mode={mode}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }}
    >
      <img src={project.image} alt="" />

      <div className="details">
        <h3>{project.title}</h3>
        <div className="desc">{project.description}</div>
        <div className="tags">
          {project.tags.split(", ").map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="links">
          <a href={project.github}>
            <GithubIcon />
          </a>
          <a href={project.website}>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      <div className="mobile-details">
        <h3>Lorem ipsum dolor</h3>
        <div className="desc">{project.description}</div>
        <div className="tags">
          <span>React</span>
          <span>Node</span>
          <span>MongoDB</span>
        </div>
        <div className="links">
          <GithubIcon />
          <ExternalLinkIcon />
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default FeaturedProject;

const ProjectWrapper = styled(motion.div)<any>`
  display: flex;
  align-items: center;
  width: 98%;
  margin: auto;
  border-radius: 8px;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    @media (max-width: 600px) {
      flex-direction: column;
    }
    .details {
      left: 0;
      align-items: flex-start;
    }
  }

  img {
    min-width: 450px;
    width: 60%;
    border-radius: 8px;
    filter: brightness(40%);
    @media (max-width: 600px) {
      width: 100%;
      min-width: auto;
    }
  }

  h3 {
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.deep_blue_wave}`
        : `${colors.pearl_mist}`};
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${fontSizes.sm};
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.deep_blue_wave}`
        : `${colors.buttercream}`};
    font-weight: 600;
  }

  .links {
    font-size: 25px;
    display: flex;
    gap: 1rem;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.deep_blue_wave}`
        : `${colors.buttercream}`};

    a {
      svg {
        pointer-events: all;
        cursor: pointer;
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.deep_blue_wave}`
            : `${colors.buttercream}`};
      }
    }
  }

  .details {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    right: 0;
    padding: 0 5px;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.stormy_night}`
        : `${colors.slate_grey}`};
    @media (max-width: 600px) {
      display: none;
    }

    .desc {
      width: 500px;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: ${shadow.base2};
      background-color: ${(props) =>
        props.mode === "light"
          ? `${colors.breezy_blue}`
          : `${colors.forest_stone}`};
      font-size: ${fontSizes.sm};
    }
  }

  .mobile-details {
    width: 100%;
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0 0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: ${shadow.base2};
    background-color: ${(props) =>
      props.mode === "light"
        ? `${colors.breezy_blue}`
        : `${colors.forest_stone}`};
    margin-top: 6px;

    @media (max-width: 600px) {
      display: flex;
    }

    h3 {
      font-size: ${fontSizes.md};
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.stormy_night}`
          : `${colors.pearl_mist}`};
    }

    .desc {
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.stormy_night}`
          : `${colors.slate_grey}`};
      font-size: ${fontSizes.sm};
    }
  }
`;

import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes, shadow } from "../config/style.config";
import useMode from "../zustand/useMode";
import { ExternalLinkIcon, GithubIcon } from "../assets/icons";
import { SavedProjectT } from "../types/types";

type PropsT = {
  project: SavedProjectT;
};

const OtherProject = ({ project }: PropsT) => {
  const { mode } = useMode((state) => state);

  return (
    <ProjectWrapper
      mode={mode}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }}
    >
      <div className="links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href={project.website} target="_blank" rel="noreferrer">
          <ExternalLinkIcon />
        </a>
      </div>
      <h3>{project.title}</h3>
      <div className="image">
        <img src={project.image} alt="" />
      </div>
      <div className="desc">{project.description}</div>
      <div className="tags">
        {project.tags.split(", ").map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </ProjectWrapper>
  );
};

export default OtherProject;

const ProjectWrapper = styled(motion.div)<any>`
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${shadow.base2};
  background-color: ${(props) =>
    props.mode === "light" ? `${colors.frosty_ash}` : `${colors.forest_stone}`};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  cursor: pointer;

  .links {
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.deep_blue_wave}`
        : `${colors.buttercream}`};
    /* margin-bottom: 1rem; */

    a {
      svg {
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.deep_blue_wave}`
            : `${colors.buttercream}`};
      }
    }
  }

  h3 {
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.stormy_night}`
        : `${colors.pearl_mist}`};
    cursor: pointer;
  }

  .desc {
    margin-bottom: 3rem;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.stormy_night}`
        : `${colors.slate_grey}`};
    font-size: ${fontSizes.sm};
  }

  .image {
    width: 100%;
    aspect-ratio: 2/1;
    background-color: gray;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tags {
    width: 100%;
    padding: 1.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
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
`;

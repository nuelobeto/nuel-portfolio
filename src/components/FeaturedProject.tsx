import styled from "styled-components";
import useMode from "./../zustand/useMode";
import { colors, fontSizes, shadow } from "./../config/style.config";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "../assets/icons";

const FeaturedProject = () => {
  const { mode } = useMode((state) => state);

  return (
    <ProjectWrapper
      mode={mode}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }}
    >
      <img src="/images/project.PNG" alt="" />

      <div className="details">
        <h2>Lorem ipsum dolor</h2>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          asperiores dicta perspiciatis assumenda saepe unde et. Autem tenetur
          sed natus?
        </div>
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

      <div className="mobile-details">
        <h2>Lorem ipsum dolor</h2>
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
  max-width: 950px;
  width: 98%;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
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
    cursor: pointer;
    @media (max-width: 600px) {
      width: 100%;
      min-width: auto;
    }
  }

  h2 {
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.deep_blue_wave}`
        : `${colors.pearl_mist}`};
    pointer-events: all;
    cursor: pointer;
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
    font-weight: 500;
  }

  .links {
    font-size: 25px;
    display: flex;
    gap: 1rem;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.deep_blue_wave}`
        : `${colors.buttercream}`};

    svg {
      pointer-events: all;
      cursor: pointer;
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
    pointer-events: none;
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
      pointer-events: all;
    }
  }

  .mobile-details {
    width: 100%;
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0 0;
    @media (max-width: 600px) {
      display: flex;
    }

    h2 {
      font-size: ${fontSizes.md};
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.stormy_night}`
          : `${colors.pearl_mist}`};
    }
  }
`;

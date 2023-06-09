import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes, shadow } from "../config/style.config";
import useMode from "../zustand/useMode";
import { ExternalLinkIcon, GithubIcon } from "../assets/icons";

const OtherProject = () => {
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
        <GithubIcon />
        <ExternalLinkIcon />
      </div>
      <h3>Lorem ipsum dolor</h3>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam provident
        maxime asperiores? Ipsam tempore at ex iste a facilis consectetur.
      </div>
      <div className="tags">
        <span>React</span>
        <span>Node</span>
        <span>MongoDB</span>
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
    margin-bottom: 1rem;

    svg {
      cursor: pointer;
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

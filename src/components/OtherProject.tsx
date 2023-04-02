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
    ></ProjectWrapper>
  );
};

export default OtherProject;

const ProjectWrapper = styled(motion.div)<any>`
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1/1;
  box-shadow: ${shadow.base2};
  background-color: ${(props) =>
    props.mode === "light" ? `${colors.frosty_ash}` : `${colors.forest_stone}`};
  position: relative;
`;

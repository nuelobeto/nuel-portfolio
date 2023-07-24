import styled from "styled-components";
import { SkillT } from "../types/types";
import { colors, shadow } from "./../config/style.config";
import useMode from "./../zustand/useMode";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skill = ({ img, name, color }: SkillT) => {
  const { mode } = useMode((state) => state);
  const [progress, setProgress] = useState("0%");

  // useEffect(() => {
  //   setProgress(level);
  // }, [level]);

  return (
    <SkillWrapper color={color} level={progress} mode={mode}>
      <div className="skill">
        <img src={img} alt="" />
        <span>{name}</span>
      </div>
      {/* <div className="status-bar">
        <motion.div
          className="bar"
          animate={{ width: progress }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
        ></motion.div>
      </div> */}
    </SkillWrapper>
  );
};

export default Skill;

const SkillWrapper = styled.div<any>`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.mode === "light"
      ? `${colors.breezy_blue}`
      : `${colors.forest_stone}`};
  box-shadow: ${shadow.base};

  .skill {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    img {
      width: 40px;
      border-radius: 8px;
      object-fit: cover;
    }
    span {
      font-weight: 600;
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.forest_stone}`
          : `${colors.pearl_mist}`};
    }
  }

  .status-bar {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) inset;
    border-radius: 8px;
    .bar {
      display: block;
      content: "";
      width: ${(props) => props.level};
      height: 3px;
      border-radius: 8px;
      background-color: ${(props) => props.color};
      margin-top: 1rem;
    }
  }
`;

import styled from "styled-components";
import { SkillT } from "../types/types";
import { colors } from "./../config/style.config";

const Skill = ({ img, name, level, color }: SkillT) => {
  return (
    <SkillWrapper color={color} level={level}>
      <div className="skill">
        <img src={img} alt="" />
        <span>{name}</span>
      </div>
      <div className="status-bar"></div>
    </SkillWrapper>
  );
};

export default Skill;

const SkillWrapper = styled.div<any>`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${colors.forest_stone};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

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
      color: ${colors.pearl_mist};
    }
  }

  .status-bar {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) inset;
    border-radius: 8px;
    &::after {
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

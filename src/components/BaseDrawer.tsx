import styled from "styled-components";
import { CloseIcon } from "../assets/icons";
import { colors } from "./../config/style.config";

type PropsT = {
  children: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BaseDrawer = ({ children, open, setOpen }: PropsT) => {
  return (
    <MainWrapper show={open} className="hide-scroll">
      <CloseIcon onClick={() => setOpen(false)} />
      {children}
    </MainWrapper>
  );
};

export default BaseDrawer;

const MainWrapper = styled.div<any>`
  height: 100vh;
  padding: 4rem 1.5rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(110%)")};
  transition: all 0.5s;
  background-color: ${colors.midnight_blue};
  overflow-y: auto;

  & > svg {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 25px;
    cursor: pointer;
    color: ${colors.white};
  }
`;

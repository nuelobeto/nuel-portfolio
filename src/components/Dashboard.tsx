import styled from "styled-components";
import { ChildrenT } from "../types/types";
import useMode from "../zustand/useMode";
import Sidebar from "./Sidebar";
import { colors } from "./../config/style.config";

const Dashboard = ({ children }: ChildrenT) => {
  const { mode, setMode } = useMode((state) => state);

  return (
    <MainWrapper>
      <Sidebar />
      <MainContent mode={mode}>
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </MainWrapper>
  );
};

export default Dashboard;

const MainWrapper = styled.div`
  max-width: 100vw;
  display: flex;
`;

const MainContent = styled.main<any>`
  flex: 1;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${(props) =>
    props.mode === "light" ? `#fff` : `${colors.stormy_night}`};
  transition: all 0.5s;
`;

const ContentWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
`;

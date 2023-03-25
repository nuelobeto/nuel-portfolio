import styled from "styled-components";
import { ChildrenT } from "../types/types";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }: ChildrenT) => {
  return (
    <MainWrapper>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};

export default Dashboard;

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100vh;
`;

import styled from "styled-components";
import { ChildrenT } from "../types/types";
import useMode from "../zustand/useMode";
import Sidebar from "./Sidebar";
import { colors, media } from "./../config/style.config";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = ({ children }: ChildrenT) => {
  const { mode } = useMode((state) => state);
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <MainWrapper>
      <Sidebar />
      <MainContent mode={mode}>
        {viewportWidth <= 1000 && <Navbar />}
        <ContentWrapper>{children}</ContentWrapper>
        {viewportWidth <= 1000 && <Footer />}
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
    props.mode === "light"
      ? `${colors.whisper_white}`
      : `${colors.stormy_night}`};
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  @media (max-width: ${media.xl}) {
    margin-top: 8vh;
  }
`;

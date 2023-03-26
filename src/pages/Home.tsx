import styled from "styled-components";
import Dashboard from "./../components/Dashboard";

const Home = () => {
  return (
    <Dashboard>
      <MainWrapper></MainWrapper>
    </Dashboard>
  );
};

export default Home;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

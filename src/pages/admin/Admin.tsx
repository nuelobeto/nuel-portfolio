import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/admin/Navbar";
import { colors } from "../../config/style.config";
const Admin = () => {
  return (
    <AdminWrapper>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </AdminWrapper>
  );
};

export default Admin;

const AdminWrapper = styled.div`
  max-width: 100vw;
  background-color: ${colors.stormy_night};

  main {
    margin-top: 8vh;
    height: 92vh;
    padding: 3rem 0 1rem;
  }
`;

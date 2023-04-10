import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/admin/Auth";
import ManageProjects from "./components/admin/ManageProjects";
import ManageSkills from "./components/admin/ManageSkills";
import ManageAbout from "./components/admin/ManageAbout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="auth" element={<Auth />} />
      <Route path="admin" element={<Admin />}>
        <Route index element={<ManageProjects />} />
        <Route path="manage-projects" element={<ManageProjects />} />
        <Route path="manage-skills" element={<ManageSkills />} />
        <Route path="manage-about" element={<ManageAbout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

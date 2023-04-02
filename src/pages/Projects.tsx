import styled from "styled-components";
import { media } from "../config/style.config";
import Dashboard from "./../components/Dashboard";
import FeaturedProject from "./../components/FeaturedProject";
import { motion } from "framer-motion";

const Projects = () => {
  const featuredProjects = [1, 2, 3];
  return (
    <Dashboard>
      <ProjectsWrapper className="hide-scroll">
        <motion.div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={index} />
          ))}
        </motion.div>
      </ProjectsWrapper>
    </Dashboard>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  height: 100vh;
  padding: 3rem 0;
  overflow: auto;

  @media (max-width: ${media.xl}) {
    height: auto;
  }

  .featured-projects {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    @media (max-width: 600px) {
      gap: 1.5rem;
    }
  }
`;

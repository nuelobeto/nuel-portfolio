import styled from "styled-components";
import { colors, media } from "../config/style.config";
import Dashboard from "./../components/Dashboard";
import FeaturedProject from "./../components/FeaturedProject";
import useMode from "../zustand/useMode";
import OtherProject from "../components/OtherProject";
import useProject from "../zustand/useProject";

const Projects = () => {
  const { mode } = useMode((state) => state);
  const { projects } = useProject((state) => state);
  const featuredProjects = projects.filter(
    (project) => project.category === "featured"
  );
  const otherProjects = projects.filter(
    (project) => project.category === "other"
  );

  return (
    <Dashboard>
      <ProjectsWrapper mode={mode} className="hide-scroll">
        <h2>Featured Projects</h2>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={index} project={project} />
          ))}
        </div>

        {otherProjects.length !== 0 && <h2>Other Projects</h2>}
        <div className="other-projects">
          {otherProjects.map((project, index) => (
            <OtherProject key={index} project={project} />
          ))}
        </div>
      </ProjectsWrapper>
    </Dashboard>
  );
};

export default Projects;

const ProjectsWrapper = styled.div<any>`
  max-width: 950px;
  width: 100%;
  height: 100vh;
  padding: 3rem 0;
  margin: auto;
  overflow: auto;
  @media (max-width: ${media.xl}) {
    height: auto;
    overflow: hidden;
  }

  & > h2 {
    margin-bottom: 2rem;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.midnight_blue}`
        : `${colors.pearl_mist}`};
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .featured-projects {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-bottom: 4rem;
    @media (max-width: 600px) {
      gap: 3rem;
    }
  }

  .other-projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 5px;
    @media (max-width: ${media.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 5px 3rem;
    }
    @media (max-width: ${media.sm}) {
      padding: 5px;
    }
  }
`;

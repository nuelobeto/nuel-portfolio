import { useState } from "react";
import styled from "styled-components";
import { btn, colors, fontSizes, shadow } from "../../config/style.config";
import CreateProject from "./CreateProject";
import Project from "./Project";
import useProject from "./../../zustand/useProject";

const ManageProjects = () => {
  const { projects } = useProject((state) => state);
  const [openCreateProject, setOpenCreateProject] = useState(false);
  const featuredProjects = projects.filter(
    (project) => project.category === "featured"
  );
  const otherProjects = projects.filter(
    (project) => project.category === "other"
  );

  return (
    <ProjectsWrapper>
      <div className="header">
        <h1>Projects</h1>
        <button onClick={() => setOpenCreateProject(true)}>
          Create New Project
        </button>
      </div>

      <div className="projects-box hide-scroll">
        <div className="projects featured">
          <h2>Featured Projects</h2>
          {featuredProjects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <div className="projects others">
          <h2>Other Projects</h2>
          {otherProjects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>

      <CreateProject open={openCreateProject} setOpen={setOpenCreateProject} />
    </ProjectsWrapper>
  );
};

export default ManageProjects;

const ProjectsWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h1 {
      color: ${colors.pearl_mist};
      font-size: ${fontSizes.lg};
    }

    button {
      padding: ${btn.md};
      border-radius: 8px;
      border: 1px solid transparent;
      font-weight: 600;
      background-color: ${colors.golden_sun};
    }
  }

  .projects-box {
    max-height: calc(92vh - 5rem - 37px);
    padding: 2rem 1.5rem;
    border: 2px solid ${colors.gun_metal};
    border-radius: 8px;
    overflow-y: auto;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      color: ${colors.moonstone};
      font-size: ${fontSizes.md};
    }
  }

  .featured {
    margin-bottom: 2rem;
  }
`;

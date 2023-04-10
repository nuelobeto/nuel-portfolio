import { useState } from "react";
import styled from "styled-components";
import { btn, colors, fontSizes, shadow } from "../../config/style.config";
import { SavedProjectT } from "../../types/types";
import EditProject from "./EditProject";
import useProject from "./../../zustand/useProject";
import projectAPI from "./../../services/projectAPI";

type PropsT = {
  project: SavedProjectT;
};

const Project = ({ project }: PropsT) => {
  const { getProjects } = useProject((state) => state);
  const [openEditProject, setOpenEditProject] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteProject = async () => {
    try {
      setLoading(true);
      await projectAPI.deleteProject(project._id);
      getProjects();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <ProjectWrapper>
      <div className="box1">
        <img src={project.image} alt="" />
        <h3>{project.title}</h3>
      </div>
      <div className="box2">
        <button onClick={() => setOpenEditProject(true)}>Edit</button>
        <button onClick={handleDeleteProject}>
          {!loading ? "Delete" : "Loading..."}
        </button>
      </div>

      <EditProject
        open={openEditProject}
        setOpen={setOpenEditProject}
        project={project}
      />
    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${colors.forest_stone};
  border-radius: 8px;
  box-shadow: ${shadow.base};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .box1 {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      display: block;
      width: 80px;
      object-fit: contain;
      border-radius: 4px;
    }

    h3 {
      color: ${colors.pearl_mist};
      font-size: ${fontSizes.base};
    }
  }

  .box2 {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      padding: ${btn.xs};
      border-radius: 4px;
      border: 1px solid ${colors.gun_metal};
      background-color: transparent;
      color: ${colors.moonstone};
      font-weight: 600;

      &:hover {
        background-color: ${colors.midnight_blue};
      }
    }
  }
`;

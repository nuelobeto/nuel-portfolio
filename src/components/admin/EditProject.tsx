import { useState } from "react";
import styled from "styled-components";
import { ADD_IMAGE } from "../../assets/images";
import { fontSizes } from "../../config/style.config";
import BaseDrawer from "../BaseDrawer";
import FileInput from "../FileInput";
import { colors } from "./../../config/style.config";
import useProject from "./../../zustand/useProject";
import projectAPI from "./../../services/projectAPI";
import { SavedProjectT } from "../../types/types";

type PropsT = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: SavedProjectT;
};

const EditProject = ({ open, setOpen, project }: PropsT) => {
  const { getProjects } = useProject((state) => state);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [tags, setTags] = useState(project.tags);
  const [github, setGithub] = useState(project.github);
  const [website, setWebsite] = useState(project.website);
  const [file, setFile] = useState<any | null>(null);
  const [category, setCategory] = useState(project.category);
  const [loading, setLoading] = useState(false);

  const handleEditProject = async () => {
    const payload = {
      title,
      description,
      tags,
      github,
      website,
      category,
      image: file,
    };

    try {
      setLoading(true);
      await projectAPI.updateProject(payload, project._id);
      getProjects();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <BaseDrawer open={open} setOpen={setOpen}>
      <MainWrapper>
        <div className="form">
          <div className="form-group">
            <label>Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Project Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Github Link</label>
            <input
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Website Link</label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <FileInput
            image={ADD_IMAGE}
            text="Upload Project Image"
            setFile={setFile}
          />

          <div className="submit-btn">
            <button onClick={handleEditProject}>
              {!loading ? "Save" : "Loading..."}
            </button>
          </div>
        </div>
      </MainWrapper>
    </BaseDrawer>
  );
};

export default EditProject;

const MainWrapper = styled.div`
  width: 400px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        font-size: ${fontSizes.sm};
        font-weight: 600;
        color: ${colors.pearl_mist};
      }

      input {
        border: 1px solid transparent;
        height: 45px;
        border-radius: 8px;
        outline: none;
        background-color: ${colors.stormy_night};
        padding-left: 1rem;
        color: ${colors.white};
        font-size: ${fontSizes.base};
      }

      textarea {
        border: 1px solid transparent;
        height: 150px;
        border-radius: 8px;
        outline: none;
        background-color: ${colors.stormy_night};
        padding-left: 1rem;
        color: ${colors.white};
        font-size: ${fontSizes.base};
      }
    }

    .submit-btn {
      margin: 1rem auto 0;
      display: flex;
      justify-content: flex-end;

      button {
        padding: 0.75rem;
        background-color: ${colors.golden_sun};

        font-weight: 700;
        font-size: ${fontSizes.sm};
        border: 1px solid transparent;
        border-radius: 8px;
      }
    }
  }
`;

import { create } from "zustand";
import { ProjectsT } from "../types/types";
import projectAPI from "./../services/projectAPI";
import { projectsData } from "./../data/projectsData";

const useProject = create<ProjectsT>((set) => ({
  projects: projectsData,
  getProjects: async () => {
    try {
      const res = await projectAPI.getProjects();
      set((state) => ({ projects: (state.projects = res) }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProject;

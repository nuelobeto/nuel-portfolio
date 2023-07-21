import axios from "axios";
import { BASE_URL } from "../config/baseUrl";
import { ProjectT } from "../types/types";

const getProjects = async () => {
  const response = await axios.get(`${BASE_URL}/getProjects`);

  return response.data;
};

const addProject = async (payload: ProjectT) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("tags", payload.tags);
  // formData.append("github", payload.github);
  formData.append("website", payload.website);
  formData.append("image", payload.image);
  formData.append("category", payload.category);

  await axios.post(`${BASE_URL}/addProject`, formData);
};

const updateProject = async (payload: ProjectT, id: string) => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("tags", payload.tags);
  // formData.append("github", payload.github);
  formData.append("website", payload.website);
  formData.append("image", payload.image);
  formData.append("category", payload.category);

  await axios.put(`${BASE_URL}/updateProject/${id}`, formData);
};

const deleteProject = async (id: string) => {
  await axios.delete(`${BASE_URL}/deleteProject/${id}`);
};

const projectAPI = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};

export default projectAPI;

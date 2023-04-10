import axios from "axios";
import { BASE_URL } from "../config/baseUrl";
import { LoginT } from "../types/types";

const login = async (payload: LoginT) => {
  const response = await axios.post(`${BASE_URL}/login`, payload);

  return response.data;
};

const authAPI = {
  login,
};

export default authAPI;

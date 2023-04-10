import { useEffect } from "react";
import useProject from "../zustand/useProject";

const useProjectEffect = () => {
  const { getProjects } = useProject((state) => state);

  useEffect(() => {
    getProjects();
  }, []);
};

export default useProjectEffect;

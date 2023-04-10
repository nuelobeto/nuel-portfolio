export type ChildrenT = {
  children: React.ReactNode;
};

export type LoginT = {
  email: string;
  password: string;
};

export type AuthT = {
  user: null | {
    name: string;
    email: string;
    token: string;
  };
  loading: boolean;
  setUser: (payload: LoginT) => void;
};

export type ModeT = {
  mode: string;
  setMode: (mode: string) => void;
};

export type ProjectT = {
  title: string;
  image: any;
  description: string;
  tags: string;
  github: string;
  website: string;
  category: string;
};

export type SavedProjectT = {
  _id: string;
  title: string;
  image: any;
  description: string;
  tags: string;
  github: string;
  website: string;
  category: string;
};

export type ProjectsT = {
  projects: SavedProjectT[];
  getProjects: () => void;
};

export type SkillT = {
  img: any;
  name: string;
  level: string;
  color: string;
};

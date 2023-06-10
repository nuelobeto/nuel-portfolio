import { SavedProjectT } from "../types/types";

export const projectsData: SavedProjectT[] = [
  {
    _id: "1",
    title: "Realtime Chat App",
    image:
      "https://res.cloudinary.com/dk9bt9lkn/image/upload/v1686344790/portfolio/chat_rgsh2d.png",
    description:
      "A Realtime Chat web app built with React, TypeScript, and Firebase. It enables users to send and receive text messages and share image files in real-time. The intuitive interface, seamless synchronization, and responsive design provide a smooth communication experience for modern users.",
    tags: "React, Typescript, Firebase",
    github: "https://github.com/nuelobeto/friendzone-firebase",
    website: "https://friendzon3.netlify.app/",
    category: "featured",
  },
  {
    _id: "2",
    title: "Authentication System",
    image:
      "https://res.cloudinary.com/dk9bt9lkn/image/upload/v1686343885/portfolio/auth_pikawh.png",
    description:
      "An Authentication web App with a secure and user-friendly application developed with React, TypeScript, and Firebase. This app provides a robust authentication system for user registration, login, and password management. With Firebase's authentication services, the app ensures data privacy, scalability, and real-time synchronization.",
    tags: "React, Typescript, Firebase",
    github: "https://github.com/nuelobeto/react-firebase-auth",
    website: "https://react-firebaze-auth.netlify.app/",
    category: "featured",
  },
  {
    _id: "3",
    title: "Todo List App",
    image:
      "https://res.cloudinary.com/dk9bt9lkn/image/upload/v1686344268/portfolio/todo_thq22r.png",
    description:
      "The Todo List app is a versatile task management tool built with React and designed to enhance productivity. With its light and dark mode options, users can customize the app's appearance to suit their preferences. The app enables users to effortlessly create, edit, and delete todos, empowering them to stay organized and focused on their daily tasks.",
    tags: "React, Typescript, Redux Toolkit",
    github: "https://github.com/nuelobeto/redux-toolkit-react-ts",
    website: "https://redux-toolkit-todo-ts.netlify.app/",
    category: "featured",
  },
  {
    _id: "4",
    title: "FAQ Accordion component",
    image: "",
    description:
      "The FAQ Accordion Component is a dynamic and interactive user interface element built with React. It is designed to efficiently present frequently asked questions (FAQs) and their corresponding answers in an organized and collapsible format. Users can easily navigate through the FAQs by expanding or collapsing each section, providing a seamless and intuitive experience.",
    tags: "React, Typescript",
    github: "https://github.com/nuelobeto/faq-component",
    website: "https://faq-component.netlify.app/",
    category: "other",
  },
];

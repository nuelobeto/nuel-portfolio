import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
// import useProjectEffect from "./hooks/useProjectEffect";

const App = () => {
  // useProjectEffect();

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

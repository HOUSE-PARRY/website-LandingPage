import { HashRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "./ThreeDHome";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ThreeDHome />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "./ThreeDHome";
// import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ThreeDHome />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default App;

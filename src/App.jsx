import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "./ThreeDHome";
// import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThreeDHome />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

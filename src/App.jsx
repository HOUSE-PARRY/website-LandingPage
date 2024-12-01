import { BrowserRouter as Router } from "react-router-dom";
import ThreeDHome from "./ThreeDHome";

const App = () => {
  return (
    <Router basename="/">
      <ThreeDHome />
    </Router>
  );
};

export default App;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import App from "./ThreeDHome.jsx";
import { Underlay, Overlay } from "./components/DirtyFigmaExport";
import "./styles.css";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Underlay />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>
);

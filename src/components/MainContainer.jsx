import React from "react";
import "../index.css";

const MainContainer = ({ children }) => {
  return (
    <main style={{ marginTop: "100vh" }} className="overflow-hidden">
      {children}
    </main>
  );
};

export default MainContainer;

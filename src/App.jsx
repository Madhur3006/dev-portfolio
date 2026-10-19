import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RESUME_PDF } from "./constants";
import Home from "./pages/Home";

const ResumeRedirect = () => {
  useEffect(() => {
    window.location.replace(RESUME_PDF);
  }, []);

  return null;
};

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/resume"
            element={<ResumeRedirect />}
          />
          <Route
            path="*"
            element={
              <Home isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

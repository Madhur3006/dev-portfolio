import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Home isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
            }
          />
          <Route
            path="/resume"
            element={
              <Resume isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

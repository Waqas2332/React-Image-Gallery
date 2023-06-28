import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import SingleImage from "./pages/SingleImage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/image/:id" element={<SingleImage />} />
    </Routes>
  );
};

export default App;

import React from "react";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/" element={<NotFound />} />
    </Routes>
  );
}

export default App;

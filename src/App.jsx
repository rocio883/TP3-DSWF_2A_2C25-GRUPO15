import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import ProjectLog from "./components/ProjectLog";
import MemberDetail from "./components/MemberDetail";
import Houses from "./components/Houses";
import Characters from "./components/Characters";
import React from 'react';

// ✅ TP3 gallery Nico
import Gallery from './components/gallery/Gallery';

function App() {

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-log" element={<ProjectLog />} />
          <Route path="/member/:id" element={<MemberDetail />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>

        </main>
    </div>
  );
}

export default App;

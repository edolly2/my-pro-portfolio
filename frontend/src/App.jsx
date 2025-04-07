import "./App.css";
// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
// import AboutPage from './pages/AboutPage';
// import SkillsPage from './pages/SkillsPage';
// import ProjectsPage from './pages/ProjectsPage';
// import ContactPage from './pages/ContactPage';
import Container from "./layout/container/Container.jsx";
// import LoadingScreen from "./components/loading/LoadingScreen.jsx";
// import AllWebsitesPage from './pages/AllWebsitesPage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Container>
      {/* <LoadingScreen /> */}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/skills" element={<SkillsPage />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/projects/all-websites" element={<AllWebsitesPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Container>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import SiteBanner from './components/SiteBanner';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Articles } from './pages/Articles';

import VolunteerOpportunities from './pages/VolunteerOpportunities';
import { PastProjects } from './pages/PastProjects';
import { ProjectGallery } from './pages/ProjectGallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
  <Navbar />
  <SiteBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          
          <Route path="/volunteer" element={<VolunteerOpportunities />} />
          <Route path="/past-projects" element={<PastProjects />} />
          <Route path="/project-gallery/:id" element={<ProjectGallery />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
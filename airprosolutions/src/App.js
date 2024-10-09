import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import MobileFooterComp from './Components/FooterMobile';
import DeskFooterComp from './Components/FooterDesktop';
import HeaderComp from './Components/Header';
import HomePage from './Pages/Home';
import HomeownerPage from './Pages/Homeowners';
import HelpPage from './Pages/Help';
import HiringPage from './Pages/Hiring';
import ContractorPage from './Pages/Contractors';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <HeaderComp />
        
        {isMobile ? (
          <>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/contractors" element={<ContractorPage />} />
              <Route path="/homeowners" element={<HomeownerPage />} />
              <Route path="/join" element={<HiringPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
            <MobileFooterComp />
          </>
        ) : (
          <Routes>
            <Route element={<DeskFooterComp />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/contractors" element={<ContractorPage />} />
              <Route path="/homeowners" element={<HomeownerPage />} />
              <Route path="/join" element={<HiringPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="*" element={<Navigate replace to="/home" />} />
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
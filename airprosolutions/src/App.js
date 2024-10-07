import './App.css';
import MobileFooterComp from './Components/FooterMobile';
import DeskFooterComp from './Components/FooterDesktop';
import HeaderComp from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import HomeownerPage from './Pages/Homeowners';
import HelpPage from './Pages/Help';
import HiringPage from './Pages/Hiring';
import ContractorPage from './Pages/Contractors';
import React, { useState, useEffect } from 'react';

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
        
        {/* Footer is always present */}
        {isMobile ? <MobileFooterComp /> : <DeskFooterComp>
          
          {/* Routes will render the middle section content here */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/contractors" element={<ContractorPage />} />
            <Route path="/homeowners" element={<HomeownerPage />} />
            <Route path="/join" element={<HiringPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>

        </DeskFooterComp>}
      </Router>
    </div>
  );
}

export default App;

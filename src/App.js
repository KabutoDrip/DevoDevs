import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/Home";
import ContractorPage from "./Pages/Contractors";
import BlogPage from "./Pages/Blogs";
import HiringPage from "./Pages/Hiring";
import FAQ from "./Pages/FAQ";
import Services from "./Pages/Services";
import MobileFooterComp from "./Components/FooterMobile";
import DeskFooterComp from "./Components/FooterDesktop";
import HeaderComp from "./Components/Header";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="App">
      <Router>
        <HeaderComp />
        {window.innerWidth < 768 ? (
          <>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/contractors" element={<ContractorPage />} />
              <Route path="/Blogs" element={<BlogPage />} />
              <Route path="/join" element={<HiringPage />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/services/:service" element={<Services />} />
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
              <Route path="/Blogs" element={<BlogPage />} />
              <Route path="/join" element={<HiringPage />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/services/:service" element={<Services />} />
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

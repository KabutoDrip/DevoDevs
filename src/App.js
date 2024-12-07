import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home";
import ContractorPage from "./Pages/Contractors";
import Blogs from "./Pages/Blogs";
import HiringPage from "./Pages/Hiring";
import FAQ from "./Pages/FAQ";
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
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contractors" element={<ContractorPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/join" element={<HiringPage />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/blogs/:blog" element={<Blogs />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

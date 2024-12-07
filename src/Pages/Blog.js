import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EmailForm from "../Components/EmailForm";

function BlogPage({ title, children }) {
  const navigate = useNavigate();
  const elfsightRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      if (window.ElfsightPlatform) {
        window.ElfsightPlatform.init();
      }
    };
    elfsightRef.current.appendChild(script);
  }, []);

  const navigateToBlogsPage = (category) => {
    navigate(`/blogs`, {
      state: {
        selectedCategory: category,
      },
    });
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", color: "#333" }}>{title}</h1>
      <div style={{ marginTop: "20px" }}>
        <h1>Blogs</h1>
        <p>As licensed HVAC professionals in Southern Utah, we deliver quality, safety, and expertise in every project, meeting all state certifications and tailored to the unique needs of our local climate.</p>
        <div style={{ marginTop: "40px" }}>
          <button onClick={() => navigateToBlogsPage("AllBlogs")} style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", marginRight: "10px" }}>
            All Blogs
          </button>
          <button onClick={() => navigateToBlogsPage("CourseBlogs")} style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", marginRight: "10px" }}>
            Course Blogs
          </button>
          <button onClick={() => navigateToBlogsPage("ReligiousBlogs")} style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" }}>
            Religious Blogs
          </button>
          <div ref={elfsightRef} style={{ marginTop: "20px" }}>
            <div className="elfsight-app-1a8f76dc-c788-4556-a759-186486a76b25"></div>
          </div>
        </div>
      </div>
      <EmailForm onClose={() => {}} isPopup={false} inquiry="Blogs" />
    </div>
  );
}

export default BlogPage;

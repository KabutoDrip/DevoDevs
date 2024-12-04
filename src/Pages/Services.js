import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();

  // Initialize filters based on location state (if available)
  const [filters, setFilters] = useState({
    Blogs: true, // Default is to show Blogs
    Contractors: true, // Default is to show Contractors (when coming from the home page)
  });

  // Set filters based on navigation state
  useEffect(() => {
    if (location.state?.selectedCategory === "Contractors") {
      // If we came from the Contractors page, only select Contractors
      setFilters({
        Blogs: false,
        Contractors: true,
      });
    }
    if (location.state?.selectedCategory === "Blogs") {
      // If we came from the Contractors page, only select Contractors
      setFilters({
        Blogs: true,
        Contractors: false,
      });
    } else {
      // Default to both selected when no state or from the Home page
      setFilters({
        Blogs: true,
        Contractors: true,
      });
    }
  }, [location.state]);

  // Initialize refs for sections
  const sections = {
    "HVAC Refrigerant Charging": useRef(null),
    "Refrigerant Leak Detection and Repair": useRef(null),
    "Smart Thermostat Installation": useRef(null),
    "Emergency Repairs": useRef(null),
    "Heat load calculations": useRef(null),
  };

  const services = [
    //Class
    {
      name: "Demand and Competition",
      category: "Blogs",
      content:
        "Starting a web business or blog, such as a religious blog, involves making decisions rooted in both demand and competition. In class, we explored how tools like Google Keyword Planner or Hoth Keyword Planner can provide critical insights into these factors, helping us objectively evaluate niches for potential success.\nTake inspiration from Joe, Amy, and Trevor’s story, which we discussed in class. They debated how to choose between web business ideas, like a chess site or a snowboard shop, and used keyword tools to analyze demand (monthly search volume) and competition levels (keyword difficulty). These tools provided objective, quantifiable data, avoiding the pitfalls of purely subjective decision-making. \nFor your religious blog, start by identifying topics related to your goals. If you plan to write about Old Testament teachings, search for terms like 'Old Testament lessons' or 'faith and perseverance stories.' In class, we saw how keyword tools reveal search volumes, showing how many people are actively searching for similar content. \nNext, assess competition using the competition rating provided by these tools. As we learned, high demand paired with low competition is ideal but rare. For instance, niche topics like 'Exodus commentary' may have moderate competition, making them manageable yet impactful. \nLastly, we learned the importance of passion. Joe, Amy, and Trevor’s case emphasized that data must align with personal interests. Writing on topics you care about, combined with strategic keyword insights, ensures your blog is both fulfilling and effective. \nBy applying the principles and tools we studied in class, you can position your religious blog for meaningful impact and success.",
      image: "/",
    },
    {
      name: "Demand and Competition",
      category: "Blogs",
      content: " ",
      image: "/",
    },

    //Contractors
    {
      name: "Heat load calculations",
      category: "Contractors",
      content:
        "Heat load calculations ensure your HVAC installations are accurate, efficient, and compliant. Our service provides detailed assessments of a building's heating and cooling needs, considering factors like size, insulation, and occupancy.",
      image: "",
    },
    {
      name: "Unit Sizing and Selection",
      category: "Contractors",
      content:
        "Unit sizing and selection ensures that the HVAC system you install is perfectly matched to your client’s needs. We evaluate the space, energy requirements, and other factors to recommend the ideal unit size for optimal performance and efficiency. With accurate sizing, contractors can avoid over or undersized units, ensuring comfort, reducing energy costs, and extending the system’s lifespan.",
      image: "/In-Attick-Rough-NC.jpg",
    },
    {
      name: "New Home Installations",
      category: "Contractors",
      content:
        "New home HVAC installations involve designing and installing a system that perfectly suits the home's layout, size, and energy needs. We work with contractors to ensure the right system is chosen for optimal comfort, efficiency, and long-term reliability. Our team handles everything from system selection and sizing to full installation, ensuring compliance with building codes and providing a seamless, high-quality solution that meets the needs of Blogs.",
      image: "/NCHVAC.jpg",
    },
    {
      name: "Custom Installations",
      category: "Contractors",
      content:
        "Whether its a solar bank cooling system like the image below or cooling anything out of the ordinary, we can work with you to design a heating and cooling system to feet your hyper-specfic needs.",
      image: "/Solar_Bank_cooling_support_minisplit.jpg",
    },
  ];

  // Filter services based on the selected categories
  const filteredServices = services.filter((service) => {
    return filters[service.category];
  });

  const handleCheckboxChange = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  return (
    <div
      className="services-container"
      style={{
        fontFamily: "Poppins, sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="services-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          backgroundColor: "orange",
          marginLeft: "-20px",
          marginRight: "-20px",
          padding: "20px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.8em" }}>Blog Posts</h2>

        <div className="filter-checkboxes">
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "20px",
              fontSize: "1.2em",
            }}
          >
            <input
              type="checkbox"
              checked={filters.Blogs}
              onChange={() => handleCheckboxChange("Blogs")}
              style={{ marginRight: "10px" }}
            />
            Blogs
          </label>
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "1.2em",
            }}
          >
            <input
              type="checkbox"
              checked={filters.Contractors}
              onChange={() => handleCheckboxChange("Contractors")}
              style={{ marginRight: "10px" }}
            />
            Contractors
          </label>
        </div>
      </div>

      <div className="filtered-services" style={{ width: "100%" }}>
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <section
              key={service.name}
              ref={sections[service.name]} // Apply the ref for each service
              className="service-section"
              style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                marginBottom: "100px",
                width: "100%",
              }}
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: "50%",
                    maxHeight: "50vh",
                    objectFit: "cover",
                    marginRight: index % 2 === 0 ? "20px" : "0",
                    marginLeft: index % 2 !== 0 ? "20px" : "0",
                  }}
                />
              )}
              <div style={{ width: "50%", fontSize: "1.2em" }}>
                <h3 style={{ fontSize: "1.5em" }}>{service.name}</h3>
                <p>{service.content}</p>
              </div>
            </section>
          ))
        ) : (
          <p style={{ fontSize: "1.2em" }}>
            No services match your filter criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Services;

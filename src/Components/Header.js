import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function HeaderComp() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle screen resize and set the state
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); // Mobile layout if screen is 768px or less
    } else {
      setIsMobile(false); // Desktop layout otherwise
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    handleResize(); // Check initial screen size on component mount
    window.addEventListener("resize", handleResize); // Listen for screen size changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <header
      style={{
        position: isMobile ? "fixed" : "static",
        width: "100%",
        top: 0,
        backgroundColor: "white",
        zIndex: 100,
        boxShadow: isMobile ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
        paddingBottom: isMobile ? "10px" : "0",
      }}
    >
      {isMobile ? (
        <>
          {/* Using CSS Grid layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 20vw 1fr",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                paddingTop: "20px",
                paddingLeft: "1vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "7vw",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  lineHeight: "30px",
                }}
              >
                AIR PRO
              </span>
              <span
                style={{
                  fontSize: "4vw",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                SOLUTIONS
              </span>
            </div>

            {/* Center the Icon.png with a fixed width of 10vw */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ height: "20vw" }}
                src="./Icon.png"
                alt="Air Pro Solutions"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "3vw",
              }}
            >
              {/* Toggle between hamburger and exit icons */}
              <img
                src={menuOpen ? "/exit.svg" : "/hamburger.svg"}
                alt={menuOpen ? "Close Menu" : "Open Menu"}
                style={{
                  width: "10vw",
                  height: "10vw",
                  zIndex: 3,
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </div>
          </div>

          {menuOpen && (
            <>
              {/* Background overlay */}
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Grey background with transparency
                  zIndex: 1, // Ensure it is behind the dropdown and icon
                }}
                onClick={toggleMenu} // Close the menu when background is clicked
              ></div>

              {/* Dropdown Menu */}
              <div
                style={{
                  position: "fixed",
                  right: "0",
                  top: "13vh",
                  backgroundColor: "white",
                  color: "#333",
                  width: "100%",
                  height: "100%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 2, // Ensure it is above the background overlay but below the exit icon
                  borderRadius: "8px",
                  fontFamily: "Poppins, sans-serif", // Use Poppins font
                  fontWeight: "bold", // Set font to bold
                  fontSize: "35px", // Set font size to 40px
                  textAlign: "center",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    paddingTop: "10vh",
                    margin: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "45%",
                  }}
                >
                  <li>
                    <Link to="/home" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/contractors" onClick={toggleMenu}>
                      Contractors
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blogs" onClick={toggleMenu}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/join" onClick={toggleMenu}>
                      Join Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/FAQ" onClick={toggleMenu}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <div className="logo">
            <img src="/Logo.png" alt="Logo" style={{ height: "10vh" }} />
          </div>
          <nav className="nav-menu" style={{ flexGrow: 1, marginLeft: "20px" }}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                margin: 0,
                padding: 0,
                width: "100%",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <li style={{ flexGrow: 1 }}>
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ flexGrow: 1 }}>
                <Link
                  to="/contractors"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}
                >
                  Contractors
                </Link>
              </li>
              <li style={{ flexGrow: 1 }}>
                <Link
                  to="/Blogs"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li style={{ flexGrow: 1 }}>
                <Link
                  to="/join"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}
                >
                  Join Our Team
                </Link>
              </li>
              <li style={{ flexGrow: 1 }}>
                <Link
                  to="/FAQ"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default HeaderComp;

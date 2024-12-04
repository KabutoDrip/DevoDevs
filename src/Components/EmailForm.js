import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

function EmailForm({ onClose, isPopup = false, inquiry }) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
    service_type: "",
    service_type_extended: "",
    inquiry: inquiry || "",
  });

  const emailFormRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let serviceType = "";
    let serviceTypeExtended = "";

    switch (inquiry) {
      case "Blogs":
      case "contractors":
        serviceType = "Requested a Quote";
        serviceTypeExtended =
          "has requested a quote with the following message";
        break;
      case "footer":
        serviceType = "Has A Question";
        serviceTypeExtended = "has the following inquiry";
        break;
      case "hiring":
        serviceType = "Is Interested In A Job";
        serviceTypeExtended = "is interested in a job, here is their inquiry";
        break;
      default:
        break;
    }

    const emailData = {
      ...formData,
      service_type: serviceType,
      service_type_extended: serviceTypeExtended,
    };

    emailjs
      .send(
        "service_apstest",
        "template_u70m8qs",
        emailData,
        "sDL2y5PHDSPl09T8n"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({
          from_name: "",
          from_email: "",
          from_phone: "",
          message: "",
          service_type: "",
          service_type_extended: "",
        });
        if (isPopup) {
          onClose();
        }
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  const handleClickOutside = (event) => {
    if (
      isPopup &&
      emailFormRef.current &&
      !emailFormRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isPopup) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isPopup]);

  return (
    <div
      ref={emailFormRef}
      style={{
        ...(isPopup
          ? {
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
            }
          : {}),
        width: "90%",
        maxWidth: "600px",
        backgroundColor: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        color: "#004AAD",
        borderRadius: "10px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
        {inquiry === "quote" ? "Get A Quote" : "Email Us"}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "1em",
          color: "#333",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span
          onClick={() => {
            navigator.clipboard.writeText("airprofessionalsolutions@gmail.com");
          }}
          style={{
            color: "#004AAD",
            cursor: "pointer",
            textDecoration: "underline",
            marginLeft: "5px",
          }}
          onMouseEnter={(e) => {
            e.target.style.cursor = "copy";
          }}
        >
          airprofessionalsolutions@gmail.com
        </span>
      </p>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={sendEmail}
      >
        <label style={{ width: "100%", fontFamily: "Poppins, sans-serif" }}>
          {inquiry === "quote" ? "Business" : "Name"}:
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
            placeholder={inquiry === "quote" ? "Business name" : "Your name"}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
            required
          />
        </label>
        <label style={{ width: "100%", fontFamily: "Poppins, sans-serif" }}>
          Email:
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
            placeholder="Your email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
            required
          />
        </label>
        <label style={{ width: "100%", fontFamily: "Poppins, sans-serif" }}>
          Phone:
          <input
            type="text"
            name="from_phone"
            value={formData.from_phone}
            onChange={handleInputChange}
            placeholder="Your phone number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
            required
          />
        </label>
        <label style={{ width: "100%", fontFamily: "Poppins, sans-serif" }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              minHeight: "100px",
              fontFamily: "Poppins, sans-serif",
            }}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#004AAD",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            width: "100%",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {inquiry === "quote" ? "Get Quote" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default EmailForm;

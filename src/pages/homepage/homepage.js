import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepageContainer">
     <div className="visit-visitSection">
        <div className="visit-visitSectionTitle">Welcome</div>
        <div className="visit-visitSectionText">
        The Tucson Center for Black Life is the world's largest museum, education, and research complex. We are a community of learning and an opener of doors. Join us on a voyage of discovery. Explore our vast digital resources and learn online.
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import "./visit.css";

// Component for the Visit section
function HoursSection() {  
    return (
      <div className="visit-visitSection" style={{padding: "1rem", backgroundColor: "#353848"}}>
        <div className="visit-visitSectionTitle">Hours & Location</div>
        <div className="visit-visitSectionText">
        1834 S. Park Ave<br></br>
        Tucson, AZ 85713 <br></br>
        10 a.m. to 5:30 p.m. daily<br></br>
        Closed Dec. 25
        </div>
      </div>
    );
  }

// Component for the Elements section
function EntrySection() {  
    return (
      <div className="visit-visitSection" style={{padding: "1rem", backgroundColor: "#353848"}}>
        <div className="visit-visitSectionText">
          <div className="visit-visitSectionTitle">Entry</div>
          <div style={{ fontWeight: "bold" }}>Admission</div>
            Admission is free of charge at all locations except the Cooper Hewitt in New York City.
            Most museums are open every day of the year except December 25. The Cooper Hewitt in New York is open every day except Thanksgiving and December 25.

            <br />
            <br />
            <div style={{ fontWeight: "bold" }}>Passes/Tickets</div>
            The museum does not require passes or tickets for entry.
        </div>
      </div>
    );
  }
  
  function Visit() {
    return (
      <div style={{ width: "80vw", height: "100vh", marginTop: "2rem", marginLeft: "auto", marginRight: "auto"}}>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", margin: "0px" }}>
          <HoursSection />
          <div>
            <EntrySection />
          </div>
        </div>
      </div>
    );
  }
  
  export default Visit;
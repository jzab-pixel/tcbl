// Import necessary React modules
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Visit from "./pages/visit/visit";
import MuseumGallery from "./pages/exhibitions/exhibitions";
import About from "./pages/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";



function RoutesWithTransition() {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Visit" element={<Visit />} />
          <Route path="/MuseumGallery" element={<MuseumGallery />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Authors" element={<Authors />} /> */}
          {/* <Route path="/Bibliography" element={<Bibliography />} /> */}
  {/* <Route path="/About" element={<About />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
   /* #ebe4df */
    <div style={{ backgroundColor: "#282c3d" }}>
      <BrowserRouter>
        <Navbar />
        <RoutesWithTransition />
      </BrowserRouter>
    </div>
  );
}

export default App;

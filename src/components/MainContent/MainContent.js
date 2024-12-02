import React from "react";
import "./MainContent.css";
import Navbar from "../Navbar/Navbar";
import NameCards from "../NameCards/NameCards";
import BottomThreeContainer from "../BottomThreeContainers/BottomThreeContainer";

const MainContent = () => {
  return (
    <div className="main-content-container">

      <Navbar />
      <div className="name-cards-and-bottom-three-main-container">
        <NameCards />

        <BottomThreeContainer /> 
      </div>
      
    </div>
  );
};

export default MainContent;

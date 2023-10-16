import React from "react";
import "../styles/App.css";
import HeaderSection from "./HeaderSection"
import NavigationSection from "./NavigationSection"
import CardSection from "./CardSection";
import FoodData from "../Food Data/FoodData";



const App = () => {
  return (
    <div className="App">
        <HeaderSection/>
        <NavigationSection/>
    </div>
  );
};


export default App;
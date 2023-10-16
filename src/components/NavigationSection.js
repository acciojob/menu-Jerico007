import React, { useState } from "react";
import FoodData from "../Food Data/FoodData";
import CardSection from "./CardSection";
const NavigationSection = () => {
  //useState to set foodData 
  const [foodData , setFoodData] = useState(FoodData);
  return (
    <div>
      <div className="NavigationSection">
        <button onClick={()=>(setFoodData(FoodData))}>All</button>
        <button onClick={()=>(setFoodData(FoodData.filter((val)=>(val.category === "breakfast"?val:""))))}>Breakfast</button>
        <button onClick={()=>(setFoodData(FoodData.filter((val)=>(val.category === "lunch"?val:""))))}>Lunch</button>
        <button onClick={()=>(setFoodData(FoodData.filter((val)=>(val.category === "shakes"?val:""))))}>Shakes</button>
      </div>
      <div>
        <CardSection Fooddata={foodData} />
      </div>
    </div>
  );
};

export default NavigationSection;

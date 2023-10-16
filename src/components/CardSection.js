import React from "react";
// import Fooddata from "../Food Data/FoodData";
import Card from "./Card";
// console.log(Fooddata);

const CardSection = ({Fooddata}) => (
  <div className="CardSection">
    {Fooddata.map((val) => (
      <Card key={val.id} img={val.img} title={val.title} price={val.price} desc={val.desc}/>
    ))}
  </div>
);

export default CardSection;
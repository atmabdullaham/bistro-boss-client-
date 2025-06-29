import React from "react";
import FoodCard from "../shared/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;

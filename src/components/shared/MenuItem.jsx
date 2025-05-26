import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 items-center">
      <img
        style={{ borderRadius: "0 400px 400px 400px" }}
        className="w-[120px]  "
        src={image}
        alt=""
      />
      <div>
        <h3>{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;

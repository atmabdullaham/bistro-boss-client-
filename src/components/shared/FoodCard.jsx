import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="w-full p-0 m-0">
        <img className="w-full" src={image} alt={name} />
        <div className="absolute right-2 top-4 bg-black text-white px-4 py-2 rounded-lg">
          ${price}
        </div>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe.length > 60 ? recipe.slice(0, 60) + "..." : recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn border-b-amber-500 border-x-0 border-t-0 border-4 hover:border-b-amber-500  text-amber-500 hover:bg-black hover:border-amber-600 text-lg hover:border-2 hover:border-x-0 hover:border-t-0">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

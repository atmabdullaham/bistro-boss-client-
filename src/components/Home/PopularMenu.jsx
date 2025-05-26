import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 my-16">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

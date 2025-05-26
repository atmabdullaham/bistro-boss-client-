import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Home/Category";
import PopularMenu from "../components/Home/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;

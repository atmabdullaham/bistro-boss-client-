import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Home/Category";
import PopularMenu from "../components/Home/PopularMenu";
import Featured from "../components/Home/Featured";
import Testimonials from "../components/Home/Testimonials";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Home | Bistro Boss");
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

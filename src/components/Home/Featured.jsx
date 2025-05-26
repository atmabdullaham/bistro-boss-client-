import React from "react";
import SectionTitle from "../shared/SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";
import "./Featured.css"; // Assuming you have a CSS file for styling

const Featured = () => {
  return (
    <div className="featured-item  py-5 bg-fixed text-white my-20">
      <SectionTitle
        heading="Featured Items"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center  text-white py-20 px-36 my-10 ">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 bg-black/40 p-5 rounded-lg">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            quaerat molestias libero eaque quam cumque quae consectetur itaque
            cupiditate pariatur nam, omnis unde quia modi ratione exercitationem
            natus. Eos mollitia delectus maiores sed iusto asperiores!
            Temporibus sint reprehenderit dolor quos quia quibusdam, molestiae
            labore eum, atque laudantium dolores error quaerat!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

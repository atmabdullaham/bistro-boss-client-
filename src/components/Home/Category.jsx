import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../shared/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading="From 11am to 10pm"
        heading="Order Online"
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="Salads" />
          <h3 className="text-4xl uppercase text-center -mt-20 ml-18 absolute text-white bg-black/30 p-1 rounded-2xl shadow-lg shadow-black">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Soups" />
          <h3 className="text-4xl uppercase text-center -mt-20 ml-18 absolute text-white bg-black/30 p-1 rounded-2xl shadow-lg shadow-black">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Pizzas" />
          <h3 className="text-4xl uppercase text-center -mt-20 ml-18 absolute text-white bg-black/30 p-1 rounded-2xl shadow-lg shadow-black">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Desserts" />
          <h3 className="text-4xl uppercase text-center -mt-20 ml-18 absolute text-white bg-black/30 p-1 rounded-2xl shadow-lg shadow-black">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-20 ml-18 absolute text-white bg-black/30 p-1 rounded-2xl shadow-lg shadow-black">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

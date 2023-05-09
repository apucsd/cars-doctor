/* eslint-disable no-unused-vars */
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";

// init Swiper:
// const swiper = new Swiper(".swiper", {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });
const Banner = () => {
  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        <img
          className="border rounded-lg md:h-[700px] h-[500px] w-full"
          src={img1}
          alt=""
        />
        <div className="rounded-lg top-0 flex items-center ps-20  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute  border text-white">
          <div className="md:w-1/2 space-y-4">
            <h1 className="md:text-7xl font-semibold ">
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="border rounded-lg h-[700px] w-full" src={img2} alt="" />
        <div className="rounded-lg top-0 flex items-center ps-20  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute  border text-white">
          <div className="w-1/2 space-y-4">
            <h1 className="text-7xl font-semibold ">
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="border rounded-lg h-[700px] w-full" src={img3} alt="" />
        <div className="rounded-lg top-0 flex items-center md:ps-20  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute  border text-white">
          <div className="w-1/2 space-y-4">
            <h1 className="text-7xl font-semibold ">
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="border rounded-lg h-[700px] w-full" src={img4} alt="" />
        <div className="rounded-lg top-0 flex items-center ps-20  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute  border text-white">
          <div className="w-1/2 space-y-4">
            <h1 className="text-7xl font-semibold ">
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

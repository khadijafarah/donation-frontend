import React from "react";
import aboutus from "../../assets/BannerImages/aboutus.jpg";
import charitylogo from "../../assets/BannerImages/aboutlogo.png"

const AboutUs = () => {
  return (
    <>
      <div>
        <div>
          <img className="w-full h-[500px]" src={aboutus} alt="" />
        </div>
        <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto mt-20">
          <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
              <img src={charitylogo} alt="" className="h-[80px]"/>
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body rounded-full">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

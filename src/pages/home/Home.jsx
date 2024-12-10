import React from "react";
import SwiperSlider from "./swiperSlider/SwiperSlider";
import DonationCards from "./donationCard/DonationCards";
import Advertisement from "./advertisement/Advertisement";
import Testimonial from "./testimonial/Testimonial";
import FundRaisingCards from "./fundRaisingCards/FundRaisingCards";
import VideoSection from "./videoSection/VideoSection";

const Home = () => {
  return (
    <div>
      <SwiperSlider></SwiperSlider>
      <Advertisement></Advertisement>
      <DonationCards></DonationCards>
      <FundRaisingCards></FundRaisingCards>
      <VideoSection></VideoSection>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

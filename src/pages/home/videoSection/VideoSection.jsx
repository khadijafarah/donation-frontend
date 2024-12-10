import React from "react";

const VideoSection = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="relative">
          <div className="relative">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/038/000/694/small_2x/ai-generated-happy-african-american-schoolchildren-running-through-the-school-yard-photo.jpg"
              alt=""
              className="w-[1300px] h-[480px] object-fill"
            />
          </div>
          <div className="absolute top-0 left-0 bg-orange-100 h-full w-full opacity-50">
            <h3 className="text-center mt-14 text-xl font-bold">Why Choose us</h3>
            <h1 className="text-center text-4xl font-bold text-black">Together, We Can Make A Difference</h1>
            <p className="text-center text-xl">Our secure online donation platform allows you to make contribution quickly and safely.<br/> Choose from various payment methods and set up one-time or recurring donations with ease. <br/>Your support helps us continue our mission.
            
            </p>

          </div>

          <div className="absolute top-[60%] left-[12%]">
            <iframe
              className="w-[1000px] h-[35vh]"
              src="https://www.youtube.com/embed/Sqqj_14wBxU?si=L55acL9_8-Jt68n_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;

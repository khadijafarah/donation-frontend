
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import hungrykid from "../../../assets/BannerImages/hunger.jpg";
import shelter from "../../../assets/BannerImages/shelterhouse.jpg";
import education from "../../../assets/BannerImages/education.webp";
import water from "../../../assets/BannerImages/water.jpg";
import medical from "../../../assets/BannerImages/medical.jpg";
const SwiperSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper items-center lg:h-[100vh]">
        <SwiperSlide>
          <div className='relative'>
            <img className="w-full object-cover h-[90vh]" src={education} alt="" />
          </div>
          <div className='absolute top-0 left-0 bg-green-900 h-[90vh] w-full opacity-50'>  
          </div>
          <div className='absolute top-1/3 lg:left-[30%] md:left[20%] left-[2%] space-y-2' >
            <h1 className='text-5xl font-bold text-center text-orange-50'>Empowering Lives Through Giving</h1>
            <p className='text-center text-orange-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, minima.</p>
           <div className='flex items-center justify-center'>
           <button className="btn glass bg-amber-500 text-white font-bold my-4 text-lg" style={{width:"200px", backgroundColor:"rgb(223, 159, 45)", borderRadius:"20px"}}>Donate</button>
           </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img className="w-full object-cover h-[90vh]" src={water} alt="" />
          </div>
          <div className='absolute top-0 left-0 bg-green-800 h-[90vh] w-full opacity-50'>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img className="w-full object-cover h-[90vh]" src={hungrykid} alt="" />
          </div>
          <div className='absolute top-0 left-0 bg-green-900 h-[90vh] w-full opacity-50'>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img className="w-full object-cover h-[90vh]" src={shelter}alt="" />
          </div>
          <div className='absolute top-0 left-0 bg-green-900 h-[90vh] w-full opacity-50'>
    
          </div>
        </SwiperSlide>
        <SwiperSlide><img className="w-full object-cover h-[90vh]" src={medical} alt="" /></SwiperSlide>
 
        <SwiperSlide>
          <div className='relative'>
          <img className="w-full object-cover h-[90vh]"src='https://i.imgur.com/LHRmyos.jpg'></img>
          </div>
          <div className='absolute top-0 left-0 bg-green-900 h-[90vh] w-full opacity-50'>
           
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperSlider
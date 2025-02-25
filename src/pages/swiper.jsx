import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css'; 
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; 


const MySwiper = () => {
    return (
      <div className='-z-10 relative'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} 
        
      breakpoints={{
        // Mobile: 1 slide, 10px space
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // Tablet: 2 slides, 20px space
        768: {
          slidesPerView: 2,
          spaceBetween: 600,
        },
        // Desktop: 3 slides, 30px space
        1024: {
          slidesPerView: 2,
          spaceBetween: 500,
        },
      }}

        loop={true} 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        pagination={{ clickable: true }} 
        >
        <SwiperSlide>
            <div className='flex justify-center items-center z-10'>
               <img src="/whiteTruck.avif" alt="truck" className =" max-h-full md:max-w-[530px] 2xl:max-w-screen-sm object-contain"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center'>
               <img src="/yellowTruck.avif" alt="truck" className ="max-h-full md:max-w-96 2xl:max-w-screen-sm object-contain"/>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
            <div className='flex justify-center items-center'>
                <img src="/groceries.avif" alt="groceries" className ="max-h-full md:max-w-96  2xl:max-w-screen-sm object-contain"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center'>
                <img src="/delivery.png" alt="delivery" className ="max-h-full md:max-w-96 2xl:max-w-screen-sm  object-cover mx-auto my-30"/>
            </div>
        </SwiperSlide>


        
      </Swiper>
      <div className="md:absolute md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] flex flex-col justify-center items-center text-center p-16 leading-loose z-10 bg-transparent  h-full shadow-custom  backdrop-blur-[1px] border-none outline-none ">
        <div className='z-30 '>
          <h2 className="text-xl md:text-6xl font-bold  w-full uppercase z-40">
              Thonket <br />Distribution <br /> Company
         </h2>
        </div>
      </div>
      </div>
    );
  };
  
  export default MySwiper;
  
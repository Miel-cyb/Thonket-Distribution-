import MySwiper from "./swiper";
import { Link } from "react-router-dom";


function LandingPage(){


    return(
       <>

<main className=" min-h-[100vh] py-20 ">
  
  <MySwiper />

   <div className="lg:max-w-4xl absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-[50%] lg:-translate-x-[50%] p-4 rounded-md text-center relative flex flex-col justify-center items-center h-full" >
      <p className="capitalize font-bold">You are our greatest priority</p>
      <p>
        We are committed to delivering excellence in distribution and logistics. 
        As a trusted leader in the industry, we specialize in the efficient 
        transportation and supply of goods across diverse sectors, ensuring businesses 
        and consumers receive their products on time and in perfect condition.
      </p> 
      <Link to="/mainPage">
      <button className="bg-lime-700 text-white p-3 rounded-md mt-3 hover:bg-lime-600 ">
        Get Started
      </button>
      </Link>
    </div>
</main>




        </>
    )
}
export default LandingPage;


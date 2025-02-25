import { useState, useEffect } from "react";

function Layout({title, desc, image, classStyle, box = false}){
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in on page load
    setVisible(true);

    // Fade in when scrolled into view
    const handleScroll = () => {
      const element = document.getElementById("fade-div");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, [])


    return(
        <>
            <section className={classStyle}>
                <div className="flex  flex-col justify-center items-center text-center lg:text-left relative gap-5 max-w-screen-lg lg:flex-row-reverse mx-auto p-6 mt-12 lg:h-[500px]">
                    <div className=" image-container relative -mt-28  md:max-w-[50%]  lg:-mt-0 ">
                        <img src={image} className="md:max-w-md object-contain drop-shadow-[6px_2px_4px_rgba(0,0,1,0.5)] " />
                        {/* {box && (<div className="bg-red-700 rounded-md p-14 absolute -z-10 top-20 left-20 skew-y-12 w-36"></div>)}
                         */}
                    </div>
                    <div id="fade-div" className={` p-5 leading-loose transition-all duration-[2000ms] ease-in-out relative ${
                        visible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"}`}>
                        <p className="text-2xl md:text-4xl"><b>{title}</b></p>
                        <hr className="bg-lime-700 h-1 w-44 mx-auto mt-2 lg:mx-0" />
                        <p className="lg:max-w-[550px]">{desc}</p>
                    </div>
                </div>


            </section>
        </>
    )

}
export default Layout;
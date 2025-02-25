import React, { useState } from "react";
import Layout from "../Layout";
import { useSearchParams } from "react-router-dom";

function MainPage(){
    

    return(
        <>
            <section className="">
                <div>
                    <div className="">
                        <img src="/workers.jpg" alt="workers" className="w-full object-cover max-h-[80vh]" />
                    </div>
                    <h2 className=" textShadow uppercase text-2xl md:text-5xl text-white font-bold flex justify-center items-center -mt-16">About Thonket</h2>
                </div>
            </section>

            <div className="mt-16  my-4 px-5 text-[13px] md:text-[16px] relative text-center transition-opacity  opacity-1 duration-500 ">
                <p className="md:text-[17px]">Our distribution company thrives on strong relationships with its customers,partners, and drivers, ensuring smooth operations and long-term success. <br />Here’s how these connections are maintained and enhanced</p>
                <hr className="bg-lime-700 h-1 w-44 mt-3 mx-auto" />
            </div>
            <Layout image="/customer.jpg" title="Customer" desc="Customers are the backbone of any distribution company. To build trust and satisfaction, the company: 
            Offers Transparent Communication – Real-time tracking and responsive customer support keep customers informed.
            Adapts to Customer Needs – Flexible services, bulk orders, and customized delivery options improve customer experience.Seeks Feedback & Improvement – Regular customer surveys help improve service quality." classStyle="lg:bg-lime-700 lg:text-white"/>

            <Layout image="public/driver.jpg" title="Drivers" desc="Drivers play a crucial role in ensuring smooth distribution. A strong relationship with them enhances efficiency: Proper Training & Support – Well-trained drivers understand safety, efficiency, and customer service. Fair Compensation & Incentives – Bonuses for performance and fuel allowances keep drivers motivated.
            Advanced Route Planning – GPS tracking and optimized routes reduce stress and improve delivery times." box ={true} />

            <Layout image="public/partners.png" title="Partners" desc="We rely on strong partnerships with suppliers, manufacturers, and retailers. Effective collaboration is key to a smooth supply chain:
             Reliable Supply Chain Management – Coordinating with partners ensures steady inventory flow.
                Mutual Growth Opportunities – Long-term partnerships help businesses expand and reach new markets."  classStyle="lg:bg-lime-700 lg:text-white" />


        </>
    )

}
export default MainPage;
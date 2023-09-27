
import React, { useEffect, useState } from "react";
import DonatedCard from './DonatedCard'

const Donationpage = () => {


    const [donationCard, setdonationCard] = useState([]);
    const [noFound, setNofound] = useState(false);
     const [isShow, setIsShow] = useState(false)
    
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donates'));
        if (donatedItems) {
            setdonationCard(donatedItems)
        }
        else{
            setNofound('No data found')
        }
        
      }, []);

      // Add an event listener to the 'beforeunload' event
window.addEventListener('beforeunload', function(event) {
    // Clear the localStorage when the page is refreshed or closed
    localStorage.clear();
  });
    
  console.log(isShow);

    return (
        <div>
           
            { noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>
               
               <div className=" mt-10 mx-auto flex flex-col   items-center justify-center ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5"> 
               
                 
                {
                     isShow 
                     ? donationCard.map((detail) => (
                        <DonatedCard key={detail.id} detail={detail}></DonatedCard>
                      )) 
                      
                      : donationCard.slice(0,4).map((detail) => (
                        <DonatedCard key={detail.id} detail={detail}></DonatedCard>
                      ))
                }
                 </div>

                {/* <button onClick={()=>setIsShow(!isShow)} className=" my-5 rounded-md px-5 py-2  text-white bg-[#009444]"> {isShow ?  "See less" : "See All"} </button>                */}
               
                {donationCard.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="my-5 rounded-md px-5 py-2  text-white bg-[#009444]">
            {isShow ? "See less" : "See more"}
          </button>}
               </div>
               
                </div>}  </div>
    );
};

export default Donationpage;
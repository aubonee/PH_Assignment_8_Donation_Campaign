import React from 'react';

const Donationcard = ({ detail }) => {
         const { id, Picture, Title ,Description,Text_button_bg,Price } = detail || {};
         console.log(detail)
         const handleDonation=()=>{
            console.log(detai);
         }
      
    return (
        <div>
            <div className='mx-auto mt-5 w-5/6'>
               <div className='w-full h-max-[90vh] lg:h-[90vh] flex bg-[]justify-center items-center relative' > 
               {/* style={{ backgroundImage: `url(${Picture})` }} */}
               <img className='w-full h-max-[90vh] lg:h-[90vh]' src={Picture} alt="" style={{ }}/>
               <div className=" w-full donate-button  h-[100px] bg-[#0B0B0B80] absolute bottom-0 mb-0"> 
               <button onClick={handleDonation} className='my-auto p-5 ml-7 mt-5 rounded-md text-xl' style={{ backgroundColor:Text_button_bg, color:'white'}} > Donate ${Price}</button>
               </div>
               </div> 
               
                <h1 className='text-[#0B0B0B], text-4xl font-bold my-5'>{Title}</h1>
               
                <p className='text-[#0B0B0B], text-md text-justify my-5'>{Description}</p>
               
            </div>
        </div>
      );
    
};

export default Donationcard;
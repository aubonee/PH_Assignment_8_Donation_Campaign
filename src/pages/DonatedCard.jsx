import React from 'react';

const DonatedCard = ({detail}) => {
    const { id, Picture, Title,  Category, Card_bg, Category_bg ,Text_button_bg,Price} = detail || {};
    return (
        <div>

<div className="relative flex w-full max-w-[40rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:Card_bg}}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img  src={Picture}alt="image" className="h-full w-full object-cover" />
  </div>
  <div className="p-6">
    <button className=" rounded-md py-1s px-3 mb-4 block font-sans text-base font-semibold  leading-relaxed tracking-normal text-pink-500 antialiased" style={{backgroundColor:Category_bg }}> {Category}</button>
    <h1 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" >
      {Title}
    </h1>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {Price}
    </p>
    
      <button className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white" style={{backgroundColor: Text_button_bg}} type="button" > View Details</button>
   
  </div>
</div>
        </div>
    );
};

export default DonatedCard;
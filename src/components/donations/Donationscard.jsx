import React from "react";

import { Link } from "react-router-dom";

const Donationscard = ({donation}) => {
  const { id, Picture, Title,  Category, Card_bg, Category_bg ,Text_button_bg} = donation || {};

  return (
    
  <div>

 <Link to={`/Donations/${id}`} relative="path">
     <div className=" flex w-[350px] flex-col rounded-xl bg-white " style={{ backgroundColor: Card_bg }} >
  <div className=" mx-0 h-56  rounded-xl   text-white " >
    <img src={Picture} alt="img-blur-shadow" className='rounded-t-lg' style={{ width: '350px',height:'200px', }}/>
  </div>
  <div className=""></div>
  <h2 className="  w-max block font-sans rounded-md text-md font-semibold py-1 px-1 mx-2 mb-2" style={{ backgroundColor: Category_bg  ,color: Text_button_bg }}>{Category}</h2>
  <div className="py-1"><h5 className=" block font-sans text-xl font-semibold mx-2 mb-2" style={{ color: Text_button_bg }}>{Title}</h5></div>


</div>
    </Link>

    
  </div>
   );
};

export default Donationscard;
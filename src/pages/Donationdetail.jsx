import React from "react";
import  { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donationcard from "./Donationcard";

   
const Donationdetail = () => {
             const [detail, setdetail] = useState({});
            
          
            const { id } = useParams();
            console.log(id);
          
            const details = useLoaderData();
            console.log("Detail")
            console.log(details);
          
            useEffect(() => {
          
              const finddetail = details?.find(detail => detail.id === id);
          
              setdetail(finddetail);
            }, [id,detail]);
          
          
            return (
              <div>
                <Donationcard detail={detail}></Donationcard>
                {/* detail={detail} */}
             
              </div>
            );
          };


export default Donationdetail;
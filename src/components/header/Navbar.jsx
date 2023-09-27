import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
              <div className=' flex justify-between'>
           
           <ul className='flex gap-5 font-2xl'>
               <li>
               <NavLink
 to="/"
 className={({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? " text-red-600 underline underline-offset-8" : ""
 }
>
 Home
</NavLink>
               </li>
               <li>
               <NavLink
 to="/Donationpage"
 className={({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? " text-red-600  underline underline-offset-8" : ""
 }
>
Donation</NavLink>
               </li>

               <li>
               <NavLink
 to="/Statistics"
 className={({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? " text-red-600 underline  underline-offset-8" : ""
 }
>
Statistics</NavLink>
               </li>
               
           </ul>
           
       </div>
        </div>
    );
};

export default Navbar;
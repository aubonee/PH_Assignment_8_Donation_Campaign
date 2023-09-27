import React from 'react';
import Donationscard from './Donationscard';


const Donations = ({donations}) => {



     
    return (
        <div>
           
             <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10 px-5'>
                {
                    donations?.map(donation=><Donationscard key={donation.id} donation={donation}></Donationscard> )
                }
        </div>
        </div>
    );
};

export default Donations;
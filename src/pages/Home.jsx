import React from 'react';
import Banner from '../components/header/Banner'

import { useLoaderData } from 'react-router-dom';
import Donations from '../components/donations/Donations';

const Home = () => {
    
    const donations = useLoaderData()
    

    return (

        <div>
          
            <Banner></Banner>
            <Donations donations ={donations}></Donations>
        </div>
    );
};

export default Home;
import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-body h-[70vh] w-full flex flex-col justify-center items-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold my-3 text-center mx-5 lg:mx-auto '>I Grow By Helping People In Need</h2>
            <div className='flex justify-center items-center'>
            <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs   rounded-none rounded-l-lg" /> <button className='text-white px-3 py-3 bg-red-600 rounded-r-lg'>Search</button>
            </div>
        </div>
    );
};

export default Banner;
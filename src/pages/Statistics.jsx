import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


const Statistics = () => {
//   const donatedItems = JSON.parse(localStorage.getItem('donates'));
//   const donationLength = donatedItems.length;
//   console.log("arrayLength");
//   console.log(donationLength);


  const data = [
    { name: 'Total Donation', value: 12, fill: '#FF444A' }, 
    { name: 'Your Donation', value: 4, fill: '#00C49F' }, 
  ];


  return (
    <div  className='flex justify-center items-center mt-20' style={{ textAlign: 'center' }}>
      <div className="">
        <PieChart width={700} height={700}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={200}
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};


export default Statistics;
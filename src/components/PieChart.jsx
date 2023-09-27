 // const donatedItems = JSON.parse(localStorage.getItem('donates'));
    // const donationLength = donatedItems.length;
    // console.log("arrayLength");
    // console.log(donationLength);

    import React from 'react';
    import { Pie } from 'react-chartjs-2';
    
    const PieChart = () => {
      const data = {
        labels: ['Label 1', 'Label 2'],
        datasets: [
          {
            data: [30, 70], // Data values for each segment
            backgroundColor: ['red', 'blue'], // Colors for each segment
          },
        ],
      };
    
      const options = {
        responsive: true, // Make the chart responsive to screen size
        maintainAspectRatio: false, // Disable aspect ratio for better responsiveness
        title: {
          display: true,
          text: 'My Pie Chart',
          fontSize: 16,
        },
        legend: {
          display: true,
          position: 'bottom', // Position of the legend
        },
        tooltips: {
          enabled: true,
          mode: 'point',
        },
      };
      return (
        <div>
          <h2>Pie Chart Example</h2>
          <Pie data={data} options={options} />
        </div>
      );
    };
    
    export default PieChart;
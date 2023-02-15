import React, { useState, useEffect,useContext } from "react";
import { Chart as ChartJS, BarElement } from "chart.js";

import { Bar } from "react-chartjs-2";
import DataContext from "../Context/DataContext";
ChartJS.register(BarElement);

const BarChart = () => {
    const chartdata = useContext(DataContext);
  var data = {
    labels: chartdata.map((x) => x.country),//this label shows  
    datasets: [
      {
        label: `${chartdata?.intensity} intensity`,
        data: chartdata?.intensity?.map((x) => x.intensity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;

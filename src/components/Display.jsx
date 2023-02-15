import React, { useEffect, useState } from "react";
import BarChart from "./Barchart";
// import DoughnutChart from "./Doughnut";
import Chart from 'chart.js/auto';
function Display() {
 return <div>
      <BarChart/>
      {/* <DoughnutChart/> */}
  </div>;
}

export default Display;

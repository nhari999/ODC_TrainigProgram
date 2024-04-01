import React from "react";
import { Doughnut } from "react-chartjs-2";

function DonutChart({ malePercentage, femalePercentage }) {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [malePercentage, femalePercentage],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default DonutChart;

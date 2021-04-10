import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export const Chart = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "State-Wise COVID Cases",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Gujarat" },
          { y: 49, label: "Maharashtra" },
          { y: 14, label: "U.P." },
          { y: 12, label: "Kerala" },
          { y: 19, label: "Rajasthan" },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export const Chart = () => {
  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Number of COVID-19 cases in India over months",
    },
    axisY: {
      title: "Number of Cases (unit)",
    },
    data: [
      {
        type: "area",
        xValueFormatString: "MMM-YYYY",
        yValueFormatString: "#,##0.## Million",
        dataPoints: [
          { x: new Date(2020, 0x0, 15), y: 1.6 },
          { x: new Date(2020, 0x1, 15), y: 7.3 },
          { x: new Date(2020, 0x2, 15), y: 6.4 },
          { x: new Date(2020, 0x3, 15), y: 5.3 },
          { x: new Date(2020, 0x4, 15), y: 4.5 },
          { x: new Date(2020, 0x5, 15), y: 3.8 },
          { x: new Date(2020, 0x6, 15), y: 3.2 },
          { x: new Date(2020, 0x7, 15), y: 3.9 },
          { x: new Date(2020, 0x8, 15), y: 5.2 },
          { x: new Date(2020, 0x9, 15), y: 6.3 },
          { x: new Date(2020, 10, 15), y: 8.2 },
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

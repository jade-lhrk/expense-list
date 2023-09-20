import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";
import { ChartData } from "../Expenses/ExpensesChart";

interface ChartProps {
  dataPoints: ChartData[];
}

export const Chart = ({ dataPoints }: ChartProps) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

import React from "react";
import "./ChartBar.css";

interface ChartBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export const ChartBar = ({ value, maxValue, label }: ChartBarProps) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

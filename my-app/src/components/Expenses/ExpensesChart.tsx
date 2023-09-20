import React from "react";
import { Chart } from "../Chart/Chart";
import { ExpenseData } from "../../App";

export interface ChartData {
    label: string,
    value: number
}

interface ExpensesChartProps {
    expenses: ExpenseData[]
}

export const ExpensesChart = ({expenses}: ExpensesChartProps) => {
    
  const chartDataPoints: ChartData[] = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const expense of expenses){
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

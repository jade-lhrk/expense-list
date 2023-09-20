import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseData } from "../../App";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export default function Expenses(props: { items: ExpenseData[] }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

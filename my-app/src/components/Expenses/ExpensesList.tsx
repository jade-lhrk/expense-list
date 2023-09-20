import React from "react";
import { ExpenseData } from "../../App";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props: { items: ExpenseData[] }) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  const expensesContent: JSX.Element[] = props.items.map(
    (expense: ExpenseData) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    }
  );

  return <ul className="expenses-list">{expensesContent}</ul>;
};
